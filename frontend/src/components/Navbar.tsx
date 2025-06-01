"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import "../../src/styles/navbar.css";

const navItems = [
  { href: "/", label: "Registro" },
  { href: "/list", label: "Lista de usuarios" },
];

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rectStyle, setRectStyle] = useState({ left: 0, width: 0 });

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const container = containerRef.current;
    if (!container) return;

    const { left: containerLeft } = container.getBoundingClientRect();
    const { left, width } = target.getBoundingClientRect();

    setRectStyle({
      left: left - containerLeft,
      width: width,
    });
  };

  const handleLeave = () => {
    setRectStyle({ left: 0, width: 0 });
  };

  return (
    <div className="nav">
      <div className="container" ref={containerRef}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {item.label}
          </Link>
        ))}
        <svg className="navbar" width="100%" height="100%">
          <rect
            className="rect"
            x={rectStyle.left}
            y="0"
            width={rectStyle.width}
            height="100%"
            fill="transparent"
            stroke="#fff"
            strokeWidth="3"
            rx="8"
            style={{
              transition: "all 0.3s ease",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
