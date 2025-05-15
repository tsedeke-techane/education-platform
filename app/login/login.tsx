"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    // In a real application, you would handle authentication here
    console.log(data)
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-orange-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        {/* Left side with image and text */}
        <div className="relative w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image src="/backend.jpg" alt="Classroom background" fill className="object-cover opacity-30" />
          </div>
          <div className="relative z-10 text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-gray-600">Join Us — Start Something Great Today</p>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <Link href="/" className="inline-flex items-center text-blue-500 mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-1">Login</h2>
            <p className="text-gray-500 text-sm mb-6">Welcome Back • Please Login To Your Account</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
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
                          <Input type={showPassword ? "text" : "password"} placeholder="••••••••" {...field} />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center text-sm">
                  <Link href="/forgot-password" className="text-blue-500 hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-blue-500 hover:underline">
                    Create Account
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
