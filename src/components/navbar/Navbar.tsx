"use client";

import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types/index";
import Categories from "./Categories";

interface navbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<navbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed bg-white shadow-sm z-10 w-full">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0"
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
