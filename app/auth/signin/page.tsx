"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Fieldset, Input, Stack } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import Link from "next/link";
import { useSigninForm } from "./hooks/useSigninForm";
import { FORM_LABELS, FORM_ERRORS } from "./constants/data";
import ActionButton from "./components/ActionButton";
import LoginIcon from "@/components/Svgs/LoginIcon/LoginIcon";
import UserRegisterIcon from "@/components/Svgs/UserRegisterIcon/UserRegisterIcon";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./SignIn.module.css";
import { getPasswordStrength } from "./utils/getPasswordStrength";
import { validatePassword } from "./utils/validatePassword";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

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
  } = useForm<FormValues>();
  const { onSubmit, error } = useSigninForm();

  return (
    <div className={styles["signin-container"]}>
      <div className={styles["sigin-card"]}>
        <div className={styles["sigin-form"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset.Root size="lg" maxW="md">
              <Stack mb="35px">
                <Fieldset.Legend className={styles["title"]}>
                  {FORM_LABELS.LOGIN}{" "}
                </Fieldset.Legend>
              </Stack>

              <Fieldset.Content className={styles["content"]}>
                <Field
                  label={FORM_LABELS.USERNAME_EMAIL}
                  invalid={!!errors.username}
                  errorText={errors.username?.message}
                  required
                >
                  {/* <EmailIcon /> */}
                  <Input
                    {...register("username", {
                      required: FORM_ERRORS.USERNAME_REQUIRED,
                    })}
                  />
                </Field>

                <Field
                  label={FORM_LABELS.PASSWORD}
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
                        required: FORM_ERRORS.PASSWORD_REQUIRED,
                        validate: validatePassword,
                      })}
                    />
                    <PasswordStrengthMeter
                      value={getPasswordStrength(watch("password"))}
                    />
                  </Stack>
                </Field>

                <Link href="/auth/signin">{FORM_LABELS.FORGOT_PASSWORD}</Link>

                <Checkbox dir="rtl" required>
                  {FORM_LABELS.STAY_CONNECTED}
                </Checkbox>
              </Fieldset.Content>

              {error && <ErrorMessage message={error} />}

              <Stack direction="row" margin="22px 43px">
                <ActionButton
                  type="submit"
                  icon={<LoginIcon />}
                  className={styles["btn-submit"]}
                >
                  {FORM_LABELS.LOGIN}
                </ActionButton>
                <ActionButton
                  type="button"
                  icon={<UserRegisterIcon />}
                  className={styles["btn"]}
                >
                  {FORM_LABELS.CREATE_ACCOUNT}
                </ActionButton>
              </Stack>
            </Fieldset.Root>
          </form>

          <div className={styles["lined-text"]}>
            يمكنك تسجيل الدخول باستخدام
          </div>
          <Stack direction="row" margin="22px 43px">
            <Button type="button" className={styles["btn-auth"]}>
              Facebook
              <hr className={styles["btn-line"]} />
              <span className={styles["btn-icon"]}>F</span>
            </Button>
            <Button
              type="button"
              className={styles["btn-auth"]}
              onClick={() => {
                signIn("google");
              }}
            >
              Google
              <span className={styles["btn-icon"]}>G</span>
            </Button>
          </Stack>

          {/* <button
            onClick={() => {
              signIn("google");
            }}
          >
            Signin With Google
          </button> */}
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
