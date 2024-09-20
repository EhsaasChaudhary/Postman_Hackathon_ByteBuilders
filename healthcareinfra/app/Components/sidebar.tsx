"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"; // Adjust path based on where you have Sidebar components

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUserBolt className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="h-5 w-5" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className="h-5 w-5" />,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-100 dark:bg-neutral-800">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

const Logo = () => (
  <Link href="/" className="flex items-center text-sm">
    <div className="h-5 w-6 bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ml-2"
    >
      Acet Labs
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="/" className="flex items-center text-sm">
    <div className="h-5 w-6 bg-black dark:bg-white" />
  </Link>
);
