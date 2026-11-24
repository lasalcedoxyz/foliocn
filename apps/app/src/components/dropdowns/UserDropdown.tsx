import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"

const userNav = [
  {
    id: 'profile',
    label: 'Profile',
  },
  {
    id: 'settings',
    label: 'Settings',
  },
  {
    id: 'logout',
    label: 'Log Out',
  },
]

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        <Avatar className="pointer-events-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      }>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <UserMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserMenu() {
  return (
    <div>
      {userNav.map((item) => (
        <DropdownMenuItem key={item.id}>
          <span>{item.label}</span>
        </DropdownMenuItem>
      ))}
    </div>
  )
}
