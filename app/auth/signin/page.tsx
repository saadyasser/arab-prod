import React from "react";
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

const Signin = () => {
  return (
    <div className={styles["signin-container"]}>
      <div className={styles["sigin-card"]}>
        <div className={styles["sigin-form"]}>
          <form>
            <Fieldset.Root size="lg" maxW="md">
              <Stack mb="35px">
                <Fieldset.Legend className={styles["title"]}>
                  تسجيل دخول
                </Fieldset.Legend>
              </Stack>

              <Fieldset.Content className={styles["content"]}>
                <Field label="اسم المستخدم أو البريد الإلكتروني" required>
                  {/* <EmailIcon /> */}
                  <Input />
                </Field>

                <Field label="كلمة المرور" required>
                  <Stack width="full">
                    <PasswordInput
                      defaultVisible={true}
                      visibility="readonly"
                      // onVisibleChange={(e) => console.log(e, "test change")}
                    />
                    <PasswordStrengthMeter value={2} />
                  </Stack>
                </Field>

                <Link href="https://google.com">نسيت كلمة المرور؟</Link>

                <Checkbox dir="rtl">البقاء متصلاً</Checkbox>
              </Fieldset.Content>

              <Stack
                direction="row"
                // backgroundColor="red"
                margin="22px 43px"
              >
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
