import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sameer Notes App - Sign Up'
}

const SignUpPage = () => {
  return (
    <>
      <SignUp appearance={{ variables: { colorPrimary: "#0f172a" } }} />
    </>
  );
};

export default SignUpPage;
