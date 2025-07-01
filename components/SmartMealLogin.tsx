"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff, Leaf } from "lucide-react"

export default function SmartMealLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          {/* Logo */}
          <div className="absolute top-0 left-0 flex items-center gap-2 text-white text-2xl font-bold">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            SmartMeal
          </div>

          {/* Decorative leaves */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-8 h-12 bg-emerald-400 rounded-full transform rotate-45 opacity-60"></div>
            <div className="absolute top-32 left-32 w-6 h-10 bg-green-500 rounded-full transform -rotate-12 opacity-40"></div>
            <div className="absolute bottom-40 left-20 w-10 h-6 bg-emerald-300 rounded-full transform rotate-75 opacity-50"></div>
            <div className="absolute bottom-20 left-40 w-4 h-8 bg-green-400 rounded-full transform -rotate-30 opacity-60"></div>
            <div className="absolute top-40 right-20 w-6 h-4 bg-emerald-500 rounded-full transform rotate-45 opacity-40"></div>
            <div className="absolute bottom-60 right-10 w-8 h-6 bg-green-300 rounded-full transform -rotate-60 opacity-50"></div>
          </div>

          {/* Main Bowl Illustration */}
          <div className="relative z-10">
            {/* Bowl */}
            <div className="w-80 h-48 bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-b-full relative shadow-2xl">
              {/* Bowl face */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                  <div className="w-8 h-2 bg-indigo-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                </div>
              </div>

              {/* Bowl contents */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-end gap-2">
                {/* Lettuce leaves */}
                <div className="w-16 h-20 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full transform -rotate-12"></div>
                <div className="w-14 h-18 bg-gradient-to-t from-green-700 to-green-500 rounded-t-full transform rotate-12"></div>

                {/* Tomato */}
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-red-300 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-red-300 rounded-full opacity-40"></div>
                </div>

                {/* Egg */}
                <div className="w-10 h-12 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-400 rounded-full"></div>
                </div>

                {/* Peas */}
                <div className="flex flex-col gap-1">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative leaves */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
            <div className="w-12 h-8 bg-emerald-400 rounded-full transform rotate-45 opacity-70"></div>
            <div className="w-8 h-12 bg-green-500 rounded-full transform -rotate-30 opacity-60"></div>
            <div className="w-10 h-6 bg-emerald-300 rounded-full transform rotate-60 opacity-50"></div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-slate-400">We're so happy to have you back.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <button type="button" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 text-lg"
                >
                  Log in
                </Button>

                <div className="text-center">
                  <span className="text-slate-400">Don't have an account? </span>
                  <button type="button" className="text-white hover:text-emerald-400 font-semibold transition-colors">
                    Sign up
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
