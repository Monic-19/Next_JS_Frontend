'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 lg:p-0 p-3", className)}
    >

      <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home" >
            </MenuItem>
          </Link>


        <MenuItem active={active} setActive={setActive} item="Courses">
          <div className="flex flex-col gap-2 italic">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/bmt">Basic Music Theory</HoveredLink>
            <HoveredLink href="/ac">Advanced Composition</HoveredLink>
            <HoveredLink href="/sw">Song Writing</HoveredLink>
            <HoveredLink href="/mp">Music Production</HoveredLink>
          </div>
        </MenuItem>
     
   
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
          </Link>


      </Menu>
    </div>
  )
}

export default Navbar