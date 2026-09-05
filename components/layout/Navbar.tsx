"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Work", href: "#projects" },
  { label: "My Journey", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-cream/10 bg-nav/95 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.18em] text-cream hover:text-muted"
        >
         &gt;&gt; Pasindu Bhanuka &lt;&lt;
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream hover:text-muted"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/20 lg:hidden"
        >
          <span
            className={`h-px w-5 bg-cream ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-cream ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`absolute left-0 top-[72px] w-full overflow-hidden bg-nav/98 transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 border-b border-cream/10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-4 text-cream last:border-b-0 hover:text-muted"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
