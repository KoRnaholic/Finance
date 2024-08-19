import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/icons/logo.svg";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg-flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2a47]">Welcome Back!</h1>
          <p>Login or Create account to get back to your dashboard!</p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-blue-500 hidden lg:flex items-center justify-center">
        <Image src={logo} alt="logo" height={100} width={100} />
      </div>
    </div>
  );
}
