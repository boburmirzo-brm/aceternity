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
      className={`w-full left-0 right-0 z-50 px-4 ${
        pathname === "/"
          ? "absolute"
          : "sticky bg-white border-b border-black/[0.1]"
      }  `}
    >
      <div className={`h-16 flex items-center max-w-6xl mx-auto gap-5`}>
        <h2 className="text-xl font-bold">Acetenity</h2>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/service">Service</Link>
      </div>
    </header>
  );
};

export default Header;
