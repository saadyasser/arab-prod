"use client";
import React, { useState } from "react";
import Logo1 from "../Svgs/Logo1/Logo1";
import BurgorIcon from "../Svgs/BurgorIcon/BurgorIcons";
import "./NavBar.css";
import Link from "next/link";
import Logo from "../Logo/Logo";
import LogoutIcon from "../Svgs/LogoutIcon/LogoutIcon";
import UserIcon from "../Svgs/UserIcon/UserIcon";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-container">
        <Logo width={156} height={30} />
        <ul className="nav-items-desktop">
          <li>
            <Link href="/resources">المصادر</Link>
          </li>
          <li>
            <Link href="/contact-us">تواصل</Link>
          </li>
          <li>
            <Link href={"/educational-channels"}>قنوات تعليمية</Link>
          </li>
        </ul>
        <div className="nav-btns">
          {mobileMenuOpen ? (
            <span
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="nav-close-icon"
            >
              X
            </span>
          ) : (
            <BurgorIcon
              className="burgor-icon"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            />
          )}
          <UserIcon className="user-icon" />
          <LogoutIcon className="logout-icon" />
        </div>
      </div>
      {mobileMenuOpen && (
        <ul className="nav-items-mobile">
          <li>
            <Link href="/resources">المصادر</Link>
          </li>
          <li>
            <Link href="/contact-us">تواصل</Link>
          </li>
          <li>
            <Link href={"/educational-channels"}>قنوات تعليمية</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
