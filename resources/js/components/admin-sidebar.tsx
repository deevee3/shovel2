import { NavFooter } from '@/components/nav-footer';
import { NavAdmin } from '@/components/nav-admin';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { 
    BarChart3, 
    Book,
    Bot,
    FileText, 
    Folder, 
    LayoutGrid, 
    MessageSquare,
    Settings,
    Sparkles, 
} from 'lucide-react';
import { inbox } from '@/routes';
import { useMemo } from 'react';
import AppLogo from './app-logo';

const footerNavItems: NavItem[] = [];

export function AdminSidebar() {
    const page = usePage<{ auth: { permissions?: string[] | null } }>();
    const permissions = page.props.auth.permissions ?? [];
    const canManageApiKeys = permissions.includes('api-keys.manage');
    const canManageWebhooks = permissions.includes('webhooks.manage');
    const canViewAuditLogs = permissions.includes('audit-logs.view');

    const mainNavItems: NavItem[] = useMemo(() => {
        const items: NavItem[] = [
            {
                title: 'Dashboard',
                href: '/admin',
                icon: LayoutGrid,
            },
            {
                title: 'Analytics',
                href: '/admin/analytics',
                icon: BarChart3,
            },
            {
                title: 'Conversations',
                href: inbox(),
                icon: MessageSquare,
            },
            {
                title: 'Skills',
                href: '/admin/skills',
                icon: Sparkles,
            },
            {
                title: 'Queues',
                href: '/admin/queues',
                icon: Folder,
            },
            {
                title: 'Knowledge Base',
                href: '/admin/kb',
                icon: Book,
            },
            {
                title: 'AI Persona',
                href: '/admin/persona',
                icon: Bot,
            },
        ];

        if (canViewAuditLogs) {
            items.push({
                title: 'Audit Logs',
                href: '/admin/audit-logs',
                icon: FileText,
            });
        }

        // Settings group with admin items
        const settingsItems: NavItem['items'] = [
            {
                title: 'Organization',
                href: '/admin/organization',
            },
            {
                title: 'Users',
                href: '/admin/users',
            },
            {
                title: 'Roles',
                href: '/admin/roles',
            },
            {
                title: 'Handoff Policies',
                href: '/admin/handoff-policies',
            },
        ];

        if (canManageWebhooks) {
            settingsItems.push({
                title: 'Webhooks',
                href: '/admin/webhooks',
            });
        }

        if (canManageApiKeys) {
            settingsItems.push({
                title: 'API Keys',
                href: '/admin/api-keys',
            });
        }

        settingsItems.push(
            {
                title: 'Billing',
                href: '/billing',
            },
            {
                title: 'Appearance',
                href: '/settings/appearance',
            }
        );

        items.push({
            title: 'Settings',
            icon: Settings,
            items: settingsItems,
        });

        return items;
    }, [canManageApiKeys, canManageWebhooks, canViewAuditLogs]);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavAdmin items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
