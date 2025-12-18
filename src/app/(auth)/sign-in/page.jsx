"use client";
import PublicLayOut from "@/component/publicLayOut/PublicLayOut";
import { useLoginMutation } from "@/redux/feature/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const LogIn = () => {
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await loginUser({ email, password }).unwrap();
      const { success, data } = result;

      if (success && data.role === "admin") {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            role: data.role,
            name: data.name,
            email: data.email,
          })
        );
        toast.success("Logged in successfully");
        router.push("/dashboard/products");
        e.target.reset();
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
   <div>
    <PublicLayOut>
       <div className="max-w-sm w-full mx-auto text-center p-16 ">
       {/* <div className="max-w-sm w-full mx-auto text-center shadow-[0_0_250px_#000] p-16 rounded-lg bg-white dark:bg-[#0f172a]"> */}
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
      <h2 className="text-4xl font-light uppercase mb-6 text-gray-800 dark:text-gray-200">
        Log In
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="info@mailaddress.com"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-center py-2 px-4 outline-none placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
            name="email"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%236b7280'%3E%3Cpath d='M256.017 273.436l-205.17-170.029h410.904l-205.734 170.029zm-.034 55.462l-205.983-170.654v250.349h412v-249.94l-206.017 170.245z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5rem",
              backgroundPosition: "1rem center",
            }}
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-center py-2 px-4 outline-none placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
            name="password"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%236b7280'%3E%3Cpath d='M195.334 223.333h-50v-62.666c0-61.022 49.645-110.667 110.666-110.667 61.022 0 110.667 49.645 110.667 110.667v62.666h-50v-62.666c0-33.452-27.215-60.667-60.667-60.667-33.451 0-60.666 27.215-60.666 60.667v62.666zm208.666 30v208.667h-296v-208.667h296zm-121 87.667c0-14.912-12.088-27-27-27s-27 12.088-27 27c0 7.811 3.317 14.844 8.619 19.773 4.385 4.075 6.881 9.8 6.881 15.785v22.942h23v-22.941c0-5.989 2.494-11.708 6.881-15.785 5.302-4.93 8.619-11.963 8.619-19.774z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5rem",
              backgroundPosition: "1rem center",
            }}
          />
        </div>

        {/* Submit */}
        <div>
          <input
            type="submit"
            value="Log In"
            disabled={isLoading}
            className="w-full rounded-full py-2 px-4 cursor-pointer text-white bg-gradient-to-r from-[#8ceabb] to-[#378f7b] mb-12"
          />
        </div>
      </form>

      {/* Footer text */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link
          href="/sign-up"
          className="text-[#378f7b] underline hover:text-black dark:hover:text-white"
        >
          Sign up
        </Link>
      </p>
    </div>
    </PublicLayOut>
   </div>
  );
};

export default LogIn;
