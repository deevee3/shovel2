# External Integrations Guide

This guide covers how to integrate Tandem with external tools like Microsoft Excel, Google Sheets, and Airtable.

## Authentication

All API requests require authentication via an organization-scoped API key:

```bash
# Header format
X-Api-Key: your-api-key-here

# Or Bearer token
Authorization: Bearer your-api-key-here
```

API keys are created in the Admin panel under **Settings > API Keys**. Each key is scoped to your organization and only returns data for that organization.

## Available Endpoints

### Schema (GET /api/integrations/schema)

Returns the data structure for understanding field types and available values.

```bash
curl -H "X-Api-Key: YOUR_KEY" https://your-app.com/api/integrations/schema
```

### Conversations (GET /api/integrations/conversations)

List conversations with pagination and delta sync support.

**Query Parameters:**
- `updated_since` - ISO8601 timestamp for delta sync
- `status` - Filter by status (comma-separated)
- `priority` - Filter by priority
- `from` / `to` - Date range filter
- `per_page` - Results per page (max 500)
- `sort` / `order` - Sorting options

```bash
# Get all conversations
curl -H "X-Api-Key: YOUR_KEY" "https://your-app.com/api/integrations/conversations"

# Delta sync (only changed records since last sync)
curl -H "X-Api-Key: YOUR_KEY" "https://your-app.com/api/integrations/conversations?updated_since=2024-01-01T00:00:00Z"
```

### Export Conversations (GET /api/integrations/conversations/export)

Export as CSV or JSON for direct import into spreadsheets.

```bash
# CSV export
curl -H "X-Api-Key: YOUR_KEY" "https://your-app.com/api/integrations/conversations/export?format=csv" -o conversations.csv

# JSON export
curl -H "X-Api-Key: YOUR_KEY" "https://your-app.com/api/integrations/conversations/export?format=json"
```

### Messages (GET /api/integrations/messages)

List messages with delta sync support.

### Handoffs (GET /api/integrations/handoffs)

List handoff events with delta sync support.

### Analytics (GET /api/integrations/analytics)

Summary metrics for dashboards.

```bash
curl -H "X-Api-Key: YOUR_KEY" "https://your-app.com/api/integrations/analytics?from=2024-01-01&to=2024-01-31"
```

---

## Google Sheets Integration

### Using Apps Script

1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste this code:

```javascript
// Configuration
const API_KEY = 'YOUR_API_KEY';
const API_BASE = 'https://your-app.com/api/integrations';

function fetchConversations() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Conversations');
  
  // Get last sync timestamp from sheet property
  const props = PropertiesService.getScriptProperties();
  const lastSync = props.getProperty('lastConversationSync');
  
  let url = `${API_BASE}/conversations?per_page=500`;
  if (lastSync) {
    url += `&updated_since=${lastSync}`;
  }
  
  const options = {
    method: 'GET',
    headers: { 'X-Api-Key': API_KEY },
    muteHttpExceptions: true
  };
  
  const response = UrlFetchApp.fetch(url, options);
  const data = JSON.parse(response.getContentText());
  
  if (data.data && data.data.length > 0) {
    // Clear existing data if first sync, otherwise append
    if (!lastSync) {
      sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).clearContent();
    }
    
    // Write headers if empty
    if (sheet.getLastRow() === 0) {
      const headers = ['ID', 'Case ID', 'Subject', 'Status', 'Priority', 'Requester', 'Created', 'Updated'];
      sheet.appendRow(headers);
    }
    
    // Write data
    data.data.forEach(conv => {
      // Check if row exists (update) or new (append)
      const existingRow = findRowById(sheet, conv.id);
      const rowData = [
        conv.id,
        conv.case_id,
        conv.subject,
        conv.status,
        conv.priority,
        conv.requester_identifier,
        conv.created_at,
        conv.updated_at
      ];
      
      if (existingRow) {
        sheet.getRange(existingRow, 1, 1, rowData.length).setValues([rowData]);
      } else {
        sheet.appendRow(rowData);
      }
    });
  }
  
  // Save sync timestamp
  props.setProperty('lastConversationSync', data.meta.sync_timestamp);
  
  return `Synced ${data.data.length} conversations`;
}

function findRowById(sheet, id) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) return i + 1;
  }
  return null;
}

// Create menu for manual sync
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Tandem Sync')
    .addItem('Sync Conversations', 'fetchConversations')
    .addItem('Sync Analytics', 'fetchAnalytics')
    .addToUi();
}

// Set up automatic sync (hourly)
function createTrigger() {
  ScriptApp.newTrigger('fetchConversations')
    .timeBased()
    .everyHours(1)
    .create();
}
```

4. Save and run `fetchConversations()` to test
5. Run `createTrigger()` to set up automatic hourly sync

---

## Microsoft Excel Integration

### Using Power Query

1. Open Excel
2. Go to **Data > Get Data > From Web**
3. Select **Advanced**
4. Enter URL: `https://your-app.com/api/integrations/conversations/export?format=json`
5. Add HTTP header: `X-Api-Key: YOUR_API_KEY`
6. Click OK to import

### Using Office Scripts (Excel Online)

```typescript
async function main(workbook: ExcelScript.Workbook) {
  const API_KEY = "YOUR_API_KEY";
  const API_BASE = "https://your-app.com/api/integrations";
  
  // Fetch data
  const response = await fetch(`${API_BASE}/conversations?per_page=100`, {
    headers: { "X-Api-Key": API_KEY }
  });
  
  const data = await response.json();
  
  // Get or create sheet
  let sheet = workbook.getWorksheet("Conversations");
  if (!sheet) {
    sheet = workbook.addWorksheet("Conversations");
  }
  
  // Clear and write headers
  sheet.getRange("A1:H1").setValues([["ID", "Case ID", "Subject", "Status", "Priority", "Requester", "Created", "Updated"]]);
  
  // Write data
  const rows = data.data.map((c: any) => [
    c.id,
    c.case_id,
    c.subject,
    c.status,
    c.priority,
    c.requester_identifier,
    c.created_at,
    c.updated_at
  ]);
  
  if (rows.length > 0) {
    sheet.getRange(`A2:H${rows.length + 1}`).setValues(rows);
  }
}
```

### Using Power Automate

1. Create a new flow with **Recurrence** trigger (e.g., hourly)
2. Add **HTTP** action:
   - Method: GET
   - URI: `https://your-app.com/api/integrations/conversations/export?format=json`
   - Headers: `X-Api-Key: YOUR_API_KEY`
3. Add **Parse JSON** action with the response
4. Add **Add a row to a table** action for Excel

---

## Airtable Integration

### Using Airtable Automations

1. Open your Airtable base
2. Go to **Automations > Create automation**
3. Set trigger: **At scheduled time** (e.g., every hour)
4. Add action: **Run a script**

```javascript
// Airtable Automation Script
const API_KEY = 'YOUR_API_KEY';
const API_BASE = 'https://your-app.com/api/integrations';

// Get last sync timestamp from a config table
const configTable = base.getTable('Config');
const configRecords = await configTable.selectRecordsAsync();
const lastSyncRecord = configRecords.records.find(r => r.getCellValue('Key') === 'lastConversationSync');
const lastSync = lastSyncRecord?.getCellValue('Value');

// Build URL with delta sync
let url = `${API_BASE}/conversations?per_page=100`;
if (lastSync) {
  url += `&updated_since=${lastSync}`;
}

// Fetch from API
const response = await fetch(url, {
  headers: { 'X-Api-Key': API_KEY }
});
const data = await response.json();

// Get conversations table
const table = base.getTable('Conversations');

// Process each conversation
for (const conv of data.data) {
  // Check if exists
  const existingRecords = await table.selectRecordsAsync({
    filterByFormula: `{External ID} = "${conv.id}"`
  });
  
  const fields = {
    'External ID': conv.id,
    'Case ID': conv.case_id,
    'Subject': conv.subject,
    'Status': { name: conv.status },
    'Priority': { name: conv.priority },
    'Requester': conv.requester_identifier,
    'Created': conv.created_at,
    'Updated': conv.updated_at
  };
  
  if (existingRecords.records.length > 0) {
    await table.updateRecordAsync(existingRecords.records[0], fields);
  } else {
    await table.createRecordAsync(fields);
  }
}

// Update sync timestamp
if (lastSyncRecord) {
  await configTable.updateRecordAsync(lastSyncRecord, {
    'Value': data.meta.sync_timestamp
  });
} else {
  await configTable.createRecordAsync({
    'Key': 'lastConversationSync',
    'Value': data.meta.sync_timestamp
  });
}

console.log(`Synced ${data.data.length} conversations`);
```

### Airtable Table Setup

Create a table with these fields:
- **External ID** (Number) - Primary identifier from Tandem
- **Case ID** (Text)
- **Subject** (Text)
- **Status** (Single Select) - Options: new, agent_working, needs_human, queued, assigned, human_working, back_to_agent, resolved, archived
- **Priority** (Single Select) - Options: low, standard, high, urgent
- **Requester** (Email)
- **Created** (Date)
- **Updated** (Date)

---

## Webhooks (Real-time Updates)

For real-time sync instead of polling, configure webhooks in **Admin > Webhooks**:

### Available Events:
- `conversation.created`
- `conversation.updated`
- `message.created`
- `handoff.created`
- `conversation.resolved`

### Webhook Payload Example:

```json
{
  "event": "conversation.updated",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": 123,
    "case_id": "CASE-00123",
    "status": "resolved",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

### Verifying Webhooks

Each webhook includes a signature header for verification:

```
X-Webhook-Signature: sha256=...
```

Verify by computing HMAC-SHA256 of the request body with your webhook secret.

---

## Rate Limits

- **Standard endpoints**: 100 requests/minute per API key
- **Export endpoints**: 10 requests/minute per API key
- **Delta sync**: Recommended interval of 5+ minutes

## Best Practices

1. **Use delta sync** - Always store and use `sync_timestamp` to minimize data transfer
2. **Handle pagination** - Process all pages when `last_page > current_page`
3. **Respect rate limits** - Implement exponential backoff on 429 responses
4. **Secure API keys** - Never expose keys in client-side code or version control
5. **Use webhooks when possible** - More efficient than polling for real-time updates

## Troubleshooting

### 401 Unauthorized
- Check API key is valid and active
- Ensure key hasn't expired
- Verify the `X-Api-Key` header is set correctly

### 403 Forbidden
- API key doesn't have permission for this resource
- Organization doesn't have access to this feature

### 429 Too Many Requests
- Rate limit exceeded
- Wait and retry with exponential backoff

### Empty Results
- Check `updated_since` timestamp isn't in the future
- Verify organization has data
- Check filter parameters are correct
