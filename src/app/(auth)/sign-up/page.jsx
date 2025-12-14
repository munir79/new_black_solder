"use client";
import PublicLayOut from "@/component/publicLayOut/PublicLayOut";
import { useSignupMutation } from "@/redux/feature/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const [signUpUser, { isLoading }] = useSignupMutation();
  const handleSubmitFrom = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const name = fromData.get("name");
    const email = fromData.get("email");
    const password = fromData.get("password");
    const result = await signUpUser({ name, email, password });
    if (result?.data?.success === true) {
      localStorage.setItem("token", result?.data?.data?.token);
      toast.success("User created successfully");
      router.push("/");
      e.target.reset();

    }
  };
  return (
   <div>
    <PublicLayOut>
       <div className="max-w-sm w-full mx-auto text-center shadow-[0_0_250px_#000] p-16 rounded-lg bg-white dark:bg-gray-900 transition-colors">
      {/* Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-8"
        width="56"
        height="84"
        viewBox="77.7 214.9 274.7 412"
      >
        <defs>
          <linearGradient id="a" x1="0%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#8ceabb" />
            <stop offset="100%" stopColor="#378f7b" />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 
             75.2 61.4 136.1 137.3 136.1s137.3-60.9 
             137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
        />
      </svg>

      {/* Title */}
      <h2 className="text-4xl font-light uppercase mb-6 text-gray-900 dark:text-white">
        Sign Up
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmitFrom} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-center py-2 px-4 outline-none placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-white"
            name="name"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="info@mailaddress.com"
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-center py-2 px-4 outline-none dark:placeholder-gray-500 text-gray-900 dark:text-white placeholder:text-amber-50"
            name="email"
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-transparent text-center py-2 px-4 outline-none dark:placeholder-gray-500 text-gray-900 dark:text-white placeholder:text-amber-50"
            name="password"
          />
        </div>

        {/* Submit */}
        <div>
          <input
            type="submit"
            value="Sign Up"
            disabled={isLoading}
            className="w-full rounded-full py-2 px-4 cursor-pointer text-white bg-gradient-to-r from-[#8ceabb] to-[#378f7b] mb-12"
          />
        </div>
      </form>

      {/* Footer text */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-[#7e8ba3] dark:text-[#8ceabb] underline hover:text-black dark:hover:text-white"
        >
          Log in
        </Link>
      </p>
    </div>
    </PublicLayOut>
   </div>
  );
};

export default SignUp;
