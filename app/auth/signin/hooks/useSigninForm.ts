import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FORM_ERRORS } from "../constants/data";

interface FormValues {
  username: string;
  password: string;
}

export const useSigninForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      });

      if (result?.error) {
        setError(FORM_ERRORS.LOGIN_FAILED);
      } else if (result?.ok) {
        const session = await getSession();
        const userId = session?.user?.id;

        if (userId) {
          router.push(`/`);
        } else {
          setError(FORM_ERRORS.UNEXPECTED_ERROR);
        }
      }
    } catch (err) {
      setError(FORM_ERRORS.GENERAL_ERROR);
    }
  };

  return { onSubmit, error };
};
