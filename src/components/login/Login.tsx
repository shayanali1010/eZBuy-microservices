
"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";
import AuthLink from "../../components/signup/AuthLink";
import AuthHeading from "../../components/signup/AuthHeading";
import Link from "next/link";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="min-h-screen p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white min-h-[600px] flex">

                    <div className="flex-1 flex items-center justify-center p-8">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/assets/authImage/authImage.png"
                                alt="Security illustration with people and digital icons"
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>


                    <div className="flex-1 flex items-center justify-center p-8">
                        <div className="w-full max-w-sm space-y-6">

                            <div className="space-y-2">
                                <AuthHeading heading="Welcome Back" paragraph="LOGIN TO CONTINUE" />
                            </div>


                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        autoComplete="off"
                                        id="email"
                                        type="email"
                                        placeholder="Example@gmail.com"
                                        className="h-12 border border-gray-200 bg-gray-50 w-full rounded-md px-3"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            id="password"
                                            autoComplete="off"

                                            type={showPassword ? "text" : "password"}
                                            placeholder="***"
                                            className="h-12 border border-gray-200 bg-gray-50 w-full rounded-md px-3 pr-12"
                                        />
                                        <button

                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute -right-9 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash  className="h-5 w-5" />
                                            ) : (
                                                <FaEye className="h-5 w-5" />
                                            )}
                                        </button>


                                    </div>
                                    <div>
                                        <Link href="/forgot-password" className="text-sm text-[#999999] font-Inter hover:underline">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>




                                <PrimaryBtn text="LOGIN" />

                            
                                <div className="text-sm font-inter mt-4">
                                    <AuthLink text="NEW USER ?" link="SIGN UP" path="/Signup" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
