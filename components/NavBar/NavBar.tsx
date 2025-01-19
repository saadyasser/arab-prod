"use client";
import React, { useState } from "react";
import BurgorIcon from "../Svgs/BurgorIcon/BurgorIcons";
import "./NavBar.css";
import Link from "next/link";
import Logo from "../Logo/Logo";
import UserCard from "../UserCard/UserCard";
import ArrowBottom from "../Svgs/ArrowBottom/ArrowBotton";
import useOutsideClick from "@/hooks/useOutsideClick/useOutsideClick";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMobileMenuOpen] = useState(false);

  const { isOpen, setIsOpen, ref } = useOutsideClick<HTMLLIElement>(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Logo width={156} height={30} />
        <ul className="nav-items-desktop">
          <li ref={ref} className="desktop-resources">
            <span
              onClick={() => {
                console.log(isOpen, "is open");

                setIsOpen((prev) => !prev);
              }}
              className={`desktop-recources-link`}
            >
              <ArrowBottom />
              المصادر
            </span>
            {isOpen && (
              <ul className="nav-sub-list">
                <li>
                  <Link href="/blog">المدونة</Link>
                </li>
                <li>
                  <Link href="/forum">المنتدى</Link>
                </li>
                <li>
                  <Link href="/word-dictionary">قاموس الكلمات</Link>
                </li>
                <li>
                  <Link href="/short-video-lessons">دروس فيديو قصيرة</Link>
                </li>
                <li>
                  <Link href="/ai-tools-guide">
                    دليل أدوات الذكاء الاصطناعي
                  </Link>
                </li>
                <li>
                  <Link href="/tech-question-bank">بنك الأسئلة التقنية</Link>
                </li>
                <li>
                  <Link href="/midjourney-lessons-patterns">
                    دروس وأنماط الميدجورني
                  </Link>
                </li>
                <li>
                  <Link href="/dad-language">لغة ضاد</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href={"/educational-channels"}>المسارات التعليمية</Link>
          </li>
          <li>
            <Link href="/communication">التواصل</Link>
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
          <UserCard />
          {/* <UserIcon className="user-icon" />
          <LogoutIcon className="logout-icon" /> */}
        </div>
      </div>
      {mobileMenuOpen && (
        <ul className="nav-items-mobile">
          <li>
            <Link href={"/educational-channels"}>المسارات التعليمية</Link>
          </li>

          <div>
            <span
              onClick={(e) => {
                e.preventDefault();
                setSubMobileMenuOpen((prev) => !prev);
              }}
              className={`recources-link ${subMenuOpen ? "open" : ""}`}
            >
              <ArrowBottom fill={`${!subMenuOpen ? "#713488" : ""}`} />
              المصادر
            </span>
            {subMenuOpen && (
              <ul className="nav-sub-list">
                <li>
                  <Link href="/blog">المدونة</Link>
                </li>
                <li>
                  <Link href="/forum">المنتدى</Link>
                </li>
                <li>
                  <Link href="/word-dictionary">قاموس الكلمات</Link>
                </li>
                <li>
                  <Link href="/short-video-lessons">دروس فيديو قصيرة</Link>
                </li>
                <li>
                  <Link href="/ai-tools-guide">
                    دليل أدوات الذكاء الاصطناعي
                  </Link>
                </li>
                <li>
                  <Link href="/tech-question-bank">بنك الأسئلة التقنية</Link>
                </li>
                <li>
                  <Link href="/midjourney-lessons-patterns">
                    دروس وأنماط الميدجورني
                  </Link>
                </li>
                <li>
                  <Link href="/dad-language">لغة ضاد</Link>
                </li>
              </ul>
            )}
          </div>
          <li>
            <Link href="/communication">التواصل</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
