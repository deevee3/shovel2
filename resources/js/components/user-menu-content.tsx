import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import { type User } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Building2, CreditCard, Key, LogOut, Palette, Settings, Shield, Users, Webhook } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Settings className="mr-2" />
                        Settings
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href={edit()} prefetch onClick={cleanup}>
                                <Users className="mr-2 h-4 w-4" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/organization" prefetch onClick={cleanup}>
                                <Building2 className="mr-2 h-4 w-4" />
                                Organization
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/users" prefetch onClick={cleanup}>
                                <Users className="mr-2 h-4 w-4" />
                                Users
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/roles" prefetch onClick={cleanup}>
                                <Shield className="mr-2 h-4 w-4" />
                                Roles
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/handoff-policies" prefetch onClick={cleanup}>
                                <Shield className="mr-2 h-4 w-4" />
                                Handoff Policies
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/webhooks" prefetch onClick={cleanup}>
                                <Webhook className="mr-2 h-4 w-4" />
                                Webhooks
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/admin/api-keys" prefetch onClick={cleanup}>
                                <Key className="mr-2 h-4 w-4" />
                                API Keys
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/billing" prefetch onClick={cleanup}>
                                <CreditCard className="mr-2 h-4 w-4" />
                                Billing
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className="block w-full" href="/settings/appearance" prefetch onClick={cleanup}>
                                <Palette className="mr-2 h-4 w-4" />
                                Appearance
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link className="block w-full" href={logout()} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2" />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
