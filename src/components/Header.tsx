"use client";
import { div } from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header
      className={`w-full left-0 right-0 z-50 ${
        pathname === "/"
          ? "absolute"
          : "sticky bg-white border-b border-black/[0.1]"
      }  `}
    >
      <div className={`h-16 flex items-center max-w-6xl mx-auto gap-5`}>
        <h2>Header</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
