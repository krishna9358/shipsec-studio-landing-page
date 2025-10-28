"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar as Nav,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Integrations",
      link: "#integrations",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    // {
    //   name: "Blog",
    //   link: "/blog",
    // },
  ];

  return (
    <Nav onVisibleChange={setVisible} className="z-[9999]">
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex items-center gap-8">
          <NavbarLogo />
          <NavItems items={navItems} visible={visible} />
        </div>
        <div className="flex items-center gap-3">
          <NavbarButton variant="primary" href="#pricing">Get Started</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <span className="block py-2">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href="#pricing"
              as="a"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Nav>
  );
}
