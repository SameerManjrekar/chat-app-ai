import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sameer Notes App - Sign In'
}

const SignInPage = () => {
  return (
    <>
      <SignIn appearance={{ variables: { colorPrimary: "#0f172a" } }} />
    </>
  );
};

export default SignInPage;
