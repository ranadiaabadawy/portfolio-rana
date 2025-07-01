"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Coffee Background */}
        <div className="hidden lg:flex flex-col items-center justify-center relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop"
              alt="Coffee and pastries background"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-amber-900/70 to-slate-900/80 rounded-3xl"></div>
          </div>

          {/* Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-3 text-white text-3xl font-bold z-20">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            SmartMeal
          </div>

          {/* Floating Food Icons */}
          <div className="absolute inset-0 z-10">
            {/* Coffee Icons */}
            <div className="absolute top-20 left-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
              <span className="text-3xl">☕</span>
            </div>

            <div className="absolute top-32 right-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-300">
              <span className="text-2xl">🥐</span>
            </div>

            <div className="absolute bottom-40 left-20 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-700">
              <span className="text-4xl">🧁</span>
            </div>

            <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-500">
              <span className="text-xl">🍪</span>
            </div>

            <div className="absolute top-1/2 left-12 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-1000">
              <span className="text-2xl">🥯</span>
            </div>

            <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-200">
              <span className="text-xl">🍰</span>
            </div>

            <div className="absolute top-40 right-1/3 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-800">
              <span className="text-3xl">🥛</span>
            </div>

            <div className="absolute bottom-16 right-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-400">
              <span className="text-2xl">🍵</span>
            </div>
          </div>

          {/* Central Food Illustration */}
          <div className="relative z-20 text-center">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
              <span className="text-6xl">☕</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Take a Coffee Break</h2>
            <p className="text-white/80">We'll help you get back in</p>
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">☕</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-3">Forgot Password?</h1>
                    <p className="text-slate-400 text-lg">
                      No worries! Enter your email and we'll send you reset instructions.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-white text-base">
                        Email address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-12 h-14 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500 text-base rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 text-lg rounded-xl h-14 shadow-lg"
                    >
                      Send Reset Instructions
                    </Button>

                    <div className="text-center pt-2">
                      <Link
                        href="/login"
                        className="text-slate-400 hover:text-emerald-400 text-base transition-colors inline-flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to login
                      </Link>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-4">Check Your Email</h1>
                  <p className="text-slate-400 mb-6 text-lg">
                    We've sent password reset instructions to <span className="text-white font-medium">{email}</span>
                  </p>
                  <p className="text-slate-400 text-base mb-8">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  <div className="space-y-4">
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent h-12 rounded-xl"
                    >
                      Try Again
                    </Button>
                    <Link href="/login" className="block">
                      <Button variant="ghost" className="w-full text-slate-400 hover:text-emerald-400 h-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to login
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
