"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  course: z.string().min(1, { message: "Please select a course" }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      course: "",
    },
  });

  function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    // In a real application, you would handle registration here
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-orange-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        {/* Left side with image and text */}
        <div className="relative w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/frontend.jpg"
              alt="Classroom background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Create your Account
            </h1>
            <p className="text-gray-600">Your Journey Starts Here</p>
            <p className="text-gray-600">Join the 5K Tech Movement</p>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-500 mb-6 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-1">Sign Up</h2>
            <p className="text-gray-500 text-sm mb-6">
              Join Our Learning Platform Today
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Frontend-dev-for-beginners">
                            Frontend Development
                          </SelectItem>
                          <SelectItem value="Backend-dev-for-beginners">
                            Backend Development
                          </SelectItem>
                          <SelectItem value="Data-Structures-Algorithms">
                            Data Structures & Algorithms
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Join Us"}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-500 hover:underline">
                    Sign In
                  </Link>
                </p>

                <p className="text-center text-xs text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
