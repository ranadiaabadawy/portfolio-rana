"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Lock, Leaf, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Food Bowl with Floating Icons */}
        <div className="hidden lg:flex flex-col items-center justify-center relative min-h-[600px]">
          {/* SmartMeal Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-3 text-white text-2xl font-bold z-20">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            SmartMeal
          </div>

          {/* Central Food Bowl */}
          <div className="relative">
            {/* Main Bowl Image */}
            <div className="w-80 h-80 rounded-full overflow-hidden relative shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-01%20200240-glWoGPsi7HsXdKuymNWeC6HD1Wdk50.png')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-900/30"></div>
              </div>

              {/* Central Plate Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Food Icons */}
            <div className="absolute inset-0">
              {/* Different healthy food icons for signup */}
              <div className="absolute -top-8 left-16 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-xl">🥦</span>
              </div>

              <div className="absolute -top-4 right-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-300 shadow-lg">
                <span className="text-lg">🍓</span>
              </div>

              <div className="absolute top-16 -right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-500 shadow-lg">
                <span className="text-xl">🥕</span>
              </div>

              <div className="absolute top-32 -right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-700 shadow-lg">
                <span className="text-lg">🫐</span>
              </div>

              <div className="absolute -bottom-8 right-16 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-900 shadow-lg">
                <span className="text-xl">🌽</span>
              </div>

              <div className="absolute -bottom-4 left-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-1100 shadow-lg">
                <span className="text-lg">🍋</span>
              </div>

              <div className="absolute top-16 -left-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-1300 shadow-lg">
                <span className="text-xl">🥑</span>
              </div>

              <div className="absolute top-32 -left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-1500 shadow-lg">
                <span className="text-lg">🥒</span>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mt-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Join the Food Revolution</h2>
            <p className="text-purple-200">Start your healthy eating journey!</p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">Join SmartMeal</h1>
            <p className="text-purple-200 text-lg">Create your account and start your food journey.</p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white text-base">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-emerald-400 focus:ring-emerald-400 text-base rounded-xl backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white text-base">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-emerald-400 focus:ring-emerald-400 text-base rounded-xl backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-white text-base">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-emerald-400 focus:ring-emerald-400 text-base rounded-xl backdrop-blur-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-medium">Hide</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="confirmPassword" className="text-white text-base">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-emerald-400 focus:ring-emerald-400 text-base rounded-xl backdrop-blur-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-sm font-medium">Hide</span>
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 text-lg rounded-xl h-14 shadow-lg border-0"
                >
                  Create Account
                </Button>

                <div className="text-center pt-2">
                  <span className="text-purple-200 text-base">Already have an account? </span>
                  <Link
                    href="/login"
                    className="text-white hover:text-emerald-400 font-semibold transition-colors text-base"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
