"use client";

import React, { useState } from "react";
import { getSession, signIn } from "next-auth/react";

import { useForm } from "react-hook-form";

import styles from "./SignIn.module.css";
import Image from "next/image";
import { Fieldset, Input, Stack } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import LoginIcon from "@/components/Svgs/LoginIcon/LoginIcon";
import UserRegisterIcon from "@/components/Svgs/UserRegisterIcon/UserRegisterIcon";
import { Field } from "@/components/ui/field";
import { getPasswordStrength } from "./utils/getPasswordStrength";
import { validatePassword } from "./utils/validatePassword";
import { useRouter } from "next/navigation";

interface FormValues {
  username: string;
  password: string;
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({});

  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit = async (data: FormValues) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (result?.error) {
      setError("فشل تسجيل الدخول، يرجى التحقق من بيانات الاعتماد.");
    } else if (result?.ok) {
      const session = await getSession();
      // console.log(session, "session");

      const userId = session?.user?.id; // Ensure that the `user` object is correct
      if (userId) {
        router.push(`/`);
      } else {
        setError("حدث خطأ غير متوقع");
      }
    }
  };

  return (
    <div className={styles["signin-container"]}>
      <div className={styles["sigin-card"]}>
        <div className={styles["sigin-form"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset.Root size="lg" maxW="md">
              <Stack mb="35px">
                <Fieldset.Legend className={styles["title"]}>
                  تسجيل دخول
                </Fieldset.Legend>
              </Stack>

              <Fieldset.Content className={styles["content"]}>
                <Field
                  label="اسم المستخدم أو البريد الإلكتروني"
                  invalid={!!errors.username}
                  errorText={errors.username?.message}
                  required
                >
                  {/* <EmailIcon /> */}
                  <Input
                    {...register("username", {
                      required: "اسم المستخدم أو البريد الإلكتروني مطلوب",
                    })}
                  />
                </Field>

                <Field
                  label="كلمة المرور"
                  invalid={!!errors.password}
                  errorText={errors.password?.message}
                  required
                >
                  <Stack width="full">
                    <PasswordInput
                      defaultVisible={true}
                      visibility="readonly"
                      // onVisibleChange={(e) => console.log(e, "test change")}
                      {...register("password", {
                        required: "كلمة المرور مطلوبة",
                        validate: validatePassword,
                      })}
                    />
                    <PasswordStrengthMeter
                      value={getPasswordStrength(watch("password"))}
                    />
                  </Stack>
                </Field>

                <Link href="https://google.com">نسيت كلمة المرور؟</Link>

                <Checkbox dir="rtl">البقاء متصلاً</Checkbox>
              </Fieldset.Content>

              <Stack direction="row" margin="22px 43px">
                <Button
                  type="submit"
                  alignSelf="flex-start"
                  className={styles["btn-submit"]}
                >
                  <LoginIcon />
                  تسجيل الدخول
                </Button>
                <Button
                  type="button"
                  alignSelf="flex-start"
                  className={styles["btn"]}
                >
                  <UserRegisterIcon />
                  إنشاء حساب جديد
                </Button>
              </Stack>
            </Fieldset.Root>
          </form>
        </div>
        <div className={styles["sigin-image"]}>
          <Image
            src="/images/signin-image.png"
            alt="signin image"
            width={100}
            height={100}
            className={styles["image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
