"use client";
import React from "react";
import LogoutIcon from "../Svgs/LogoutIcon/LogoutIcon";
import UserIcon from "../Svgs/UserIcon/UserIcon";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import styles from "./UserCard.module.css";
import UserRegisterIcon from "../Svgs/UserRegisterIcon/UserRegisterIcon";
import LoginIcon from "../Svgs/LoginIcon/LoginIcon";
import { useRouter } from "next/navigation";

const UserCard = () => {
  const router = useRouter();
  const { status } = useSession();
  console.log(status, "login status");
  return status === "authenticated" ? (
    <>
      <UserIcon className="user-icon" />
      <LogoutIcon
        handleLogOut={() => {
          signOut();
        }}
        className="logout-icon"
      />
    </>
  ) : (
    <>
      <Button
        onClick={() => {
          router.push("/auth/signin");
        }}
        className={`${styles["btn"]} ${styles["signup-btn"]}`}
      >
        <UserRegisterIcon />
        إنشاء حساب
      </Button>
      <Button
        onClick={() => {
          router.push("/auth/signin");
        }}
        className={`${styles["btn"]} ${styles["signin-btn"]}`}
      >
        <LoginIcon />
        تسجيل الدخول
      </Button>
    </>
  );
};

export default UserCard;
