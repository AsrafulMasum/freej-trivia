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

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/30 backdrop-blur-md rounded-3xl py-20 px-32 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create a new account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 my-10">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="bg-white rounded-full px-4 h-12 text-sm placeholder:text-gray-500 border-0"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="bg-white rounded-full px-4 h-12 text-sm placeholder:text-gray-500 border-0"
            />
          </div>

          {/* Date of Birth and Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="bg-white rounded-full px-4 h-12 text-sm border-0"
              />
            </div>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange("gender", value)}
            >
              <SelectTrigger className="bg-white rounded-full px-4 h-12 text-sm border-0">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Number */}
          <Select
            value={formData.contactNo}
            onValueChange={(value) => handleSelectChange("contactNo", value)}
          >
            <SelectTrigger className="bg-white rounded-full px-4 h-12 text-sm border-0">
              <SelectValue placeholder="Contact No." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+1">+1 (USA)</SelectItem>
              <SelectItem value="+44">+44 (UK)</SelectItem>
              <SelectItem value="+92">+92 (Pakistan)</SelectItem>
              <SelectItem value="+91">+91 (India)</SelectItem>
            </SelectContent>
          </Select>

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

          {/* Confirm Password */}
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="bg-white rounded-full px-4 h-12 text-sm placeholder:text-gray-500 border-0 w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg"
            >
              {showConfirmPassword ? "👁" : "👁‍🗨"}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 mt-8">
            <Checkbox
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: checked === true,
                }))
              }
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-700 cursor-pointer"
            >
              I agree with terms of service and privacy policy
            </label>
          </div>

          {/* Registration Button */}
          {/* <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 font-semibold mt-4"
          >
            Registration
          </Button> */}
          <CustomButton
            style="bg-[linear-gradient(191deg,#0080FF_1.79%,#04A3FF_95.03%)] rounded-full w-full h-12 text-lg font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
            text="Registration"
          />
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-700 mt-4">
          have any account?{" "}
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
