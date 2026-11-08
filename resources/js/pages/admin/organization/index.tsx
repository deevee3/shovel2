import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building2, Mail, Trash2, UserPlus, Crown, Shield, User, Clock, DollarSign } from 'lucide-react';
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Admin',
        href: '/admin',
    },
    {
        title: 'Organization',
        href: '/admin/organization',
    },
];

interface Member {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    role: 'owner' | 'admin' | 'member';
    joined_at: string;
}

interface Invitation {
    id: number;
    email: string;
    role: string;
    expires_at: string;
    created_at: string;
}

interface Organization {
    id: number;
    name: string;
    slug: string;
    description?: string;
    type: string;
}

interface SeatInfo {
    total_members: number;
    billable_seats: number;
    price_per_seat: number;
    monthly_seat_cost: number;
    included_seats: number;
}

interface Props {
    organization: Organization;
    members: Member[];
    pendingInvitations: Invitation[];
    userRole: string;
    canManage: boolean;
    seatInfo: SeatInfo;
}

const roleIcons = {
    owner: Crown,
    admin: Shield,
    member: User,
};

const roleBadgeVariants = {
    owner: 'default',
    admin: 'secondary',
    member: 'outline',
} as const;

export default function OrganizationIndex({ organization, members, pendingInvitations, userRole, canManage, seatInfo }: Props) {
    const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const inviteForm = useForm({
        email: '',
        role: 'member',
    });

    const editForm = useForm({
        name: organization.name,
        description: organization.description || '',
    });

    const handleInvite = (e: React.FormEvent) => {
        e.preventDefault();
        inviteForm.post('/admin/organization/invite', {
            onSuccess: () => {
                setIsInviteDialogOpen(false);
                inviteForm.reset();
            },
        });
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        editForm.put('/admin/organization', {
            onSuccess: () => {
                setIsEditDialogOpen(false);
            },
        });
    };

    const handleCancelInvitation = (invitationId: number) => {
        router.delete(`/admin/organization/invitations/${invitationId}`);
    };

    const handleRemoveMember = (memberId: number) => {
        if (confirm('Are you sure you want to remove this member?')) {
            router.delete(`/admin/organization/members/${memberId}`);
        }
    };

    const handleUpdateRole = (memberId: number, newRole: string) => {
        router.put(`/admin/organization/members/${memberId}/role`, { role: newRole });
        setIsRoleDialogOpen(false);
        setSelectedMember(null);
    };

    const openRoleDialog = (member: Member) => {
        setSelectedMember(member);
        setIsRoleDialogOpen(true);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Organization Settings" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Organization</h1>
                        <p className="text-muted-foreground mt-2">Manage your team and organization settings</p>
                    </div>
                    {canManage && (
                        <Button onClick={() => setIsInviteDialogOpen(true)}>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Invite Member
                        </Button>
                    )}
                </div>

                {/* Organization Details */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Building2 className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle>{organization.name}</CardTitle>
                                <CardDescription>
                                    {organization.description || 'No description provided'}
                                </CardDescription>
                            </div>
                        </div>
                        {canManage && (
                            <Button variant="outline" onClick={() => setIsEditDialogOpen(true)}>
                                Edit
                            </Button>
                        )}
                    </CardHeader>
                </Card>

                {/* Seat Billing */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                                <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Team Billing</CardTitle>
                                <CardDescription>
                                    {seatInfo.included_seats} seat included · ${seatInfo.price_per_seat}/mo per additional member
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="rounded-lg bg-muted p-4">
                                <div className="text-2xl font-bold">{seatInfo.total_members}</div>
                                <div className="text-sm text-muted-foreground">Total Members</div>
                            </div>
                            <div className="rounded-lg bg-muted p-4">
                                <div className="text-2xl font-bold">{seatInfo.billable_seats}</div>
                                <div className="text-sm text-muted-foreground">Billable Seats</div>
                            </div>
                            <div className="rounded-lg bg-muted p-4">
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                    ${seatInfo.monthly_seat_cost}
                                </div>
                                <div className="text-sm text-muted-foreground">Monthly Cost</div>
                            </div>
                        </div>
                        {seatInfo.billable_seats > 0 && (
                            <p className="mt-4 text-sm text-muted-foreground text-center">
                                You are paying ${seatInfo.monthly_seat_cost}/month for {seatInfo.billable_seats} additional team member{seatInfo.billable_seats !== 1 ? 's' : ''}.
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Team Members */}
                <Card>
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>
                            {members.length} member{members.length !== 1 ? 's' : ''} in your organization
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Member</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Joined</TableHead>
                                    {canManage && <TableHead className="text-right">Actions</TableHead>}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {members.map((member) => {
                                    const RoleIcon = roleIcons[member.role] || User;
                                    return (
                                        <TableRow key={member.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={member.avatar} />
                                                        <AvatarFallback>
                                                            {member.name.charAt(0).toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">{member.name}</div>
                                                        <div className="text-sm text-muted-foreground">{member.email}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={roleBadgeVariants[member.role]}>
                                                    <RoleIcon className="mr-1 h-3 w-3" />
                                                    {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <Clock className="mr-1 h-3 w-3" />
                                                    {formatDate(member.joined_at)}
                                                </div>
                                            </TableCell>
                                            {canManage && (
                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        {userRole === 'owner' && member.role !== 'owner' && (
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => openRoleDialog(member)}
                                                            >
                                                                Change Role
                                                            </Button>
                                                        )}
                                                        {member.role !== 'owner' && (
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => handleRemoveMember(member.id)}
                                                            >
                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                            </Button>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Pending Invitations */}
                {pendingInvitations.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Invitations</CardTitle>
                            <CardDescription>
                                {pendingInvitations.length} pending invitation{pendingInvitations.length !== 1 ? 's' : ''}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Expires</TableHead>
                                        {canManage && <TableHead className="text-right">Actions</TableHead>}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pendingInvitations.map((invitation) => (
                                        <TableRow key={invitation.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                    {invitation.email}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {invitation.role.charAt(0).toUpperCase() + invitation.role.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {formatDate(invitation.expires_at)}
                                            </TableCell>
                                            {canManage && (
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleCancelInvitation(invitation.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Invite Member Dialog */}
            <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Invite Team Member</DialogTitle>
                        <DialogDescription>
                            Send an invitation to join your organization
                        </DialogDescription>
                    </DialogHeader>
                    
                    {/* Pricing Notice */}
                    <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/50 p-3">
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            <strong>Note:</strong> Each additional team member adds <strong>${seatInfo.price_per_seat}/month</strong> to your subscription.
                        </p>
                    </div>
                    <form onSubmit={handleInvite} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="invite-email">Email Address</Label>
                            <Input
                                id="invite-email"
                                type="email"
                                value={inviteForm.data.email}
                                onChange={(e) => inviteForm.setData('email', e.target.value)}
                                placeholder="colleague@company.com"
                                required
                            />
                            {inviteForm.errors.email && (
                                <p className="text-sm text-destructive">{inviteForm.errors.email}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="invite-role">Role</Label>
                            <Select
                                value={inviteForm.data.role}
                                onValueChange={(value) => inviteForm.setData('role', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="member">Member</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={inviteForm.processing}>
                                {inviteForm.processing ? 'Sending...' : 'Send Invitation'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Edit Organization Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Organization</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-name">Organization Name</Label>
                            <Input
                                id="edit-name"
                                value={editForm.data.name}
                                onChange={(e) => editForm.setData('name', e.target.value)}
                                required
                            />
                            {editForm.errors.name && (
                                <p className="text-sm text-destructive">{editForm.errors.name}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-description">Description</Label>
                            <Textarea
                                id="edit-description"
                                value={editForm.data.description}
                                onChange={(e) => editForm.setData('description', e.target.value)}
                                rows={3}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editForm.processing}>
                                {editForm.processing ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Change Role Dialog */}
            <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Change Role</DialogTitle>
                        <DialogDescription>
                            Update {selectedMember?.name}'s role in the organization
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="flex flex-col gap-2">
                            <Button
                                variant={selectedMember?.role === 'admin' ? 'default' : 'outline'}
                                className="justify-start"
                                onClick={() => selectedMember && handleUpdateRole(selectedMember.id, 'admin')}
                            >
                                <Shield className="mr-2 h-4 w-4" />
                                Admin - Can manage members and settings
                            </Button>
                            <Button
                                variant={selectedMember?.role === 'member' ? 'default' : 'outline'}
                                className="justify-start"
                                onClick={() => selectedMember && handleUpdateRole(selectedMember.id, 'member')}
                            >
                                <User className="mr-2 h-4 w-4" />
                                Member - Standard access
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
}
