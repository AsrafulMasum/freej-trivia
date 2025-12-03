"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import CustomButton from "../shared/CustomButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl py-20 px-32">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create a new account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 my-10">

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white rounded-full px-4 h-12 text-sm placeholder:text-gray-500 border-0 w-full"
          />

          {/* Password */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-white rounded-full px-4 h-12 text-sm placeholder:text-gray-500 border-0 w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg"
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </button>
          </div>
          <CustomButton
            style="bg-[linear-gradient(191deg,#0080FF_1.79%,#04A3FF_95.03%)] rounded-full w-full h-12 text-lg font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
            text="Sign In"
          />
        </form>

        {/* signup Link */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
