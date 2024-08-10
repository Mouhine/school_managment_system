import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const UserAvatar = () => {
  return (
    <div className="flex items-center space-x-1 ">
      <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
              <DropdownMenuContent>
              <DropdownMenuLabel>Mohamed</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )};

export default UserAvatar;
