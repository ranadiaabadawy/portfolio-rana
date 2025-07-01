"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Search, ShoppingCart, User, Heart, Star, Clock, MapPin, Bell, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  const [cartItems, setCartItems] = useState(0)

  const categories = [
    { name: "Pizza", emoji: "🍕", color: "bg-red-100 text-red-600" },
    { name: "Burger", emoji: "🍔", color: "bg-yellow-100 text-yellow-600" },
    { name: "Sushi", emoji: "🍣", color: "bg-blue-100 text-blue-600" },
    { name: "Salad", emoji: "🥗", color: "bg-green-100 text-green-600" },
    { name: "Dessert", emoji: "🍰", color: "bg-pink-100 text-pink-600" },
    { name: "Drinks", emoji: "🥤", color: "bg-purple-100 text-purple-600" },
  ]

  const popularMeals = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 24.99,
      rating: 4.8,
      time: "25-30 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      restaurant: "Tony's Pizza",
      liked: false,
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 18.5,
      rating: 4.6,
      time: "15-20 min",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      restaurant: "Burger House",
      liked: true,
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 16.0,
      rating: 4.7,
      time: "10-15 min",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      restaurant: "Green Garden",
      liked: false,
    },
    {
      id: 4,
      name: "Salmon Sushi",
      price: 32.0,
      rating: 4.9,
      time: "20-25 min",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      restaurant: "Sushi Master",
      liked: true,
    },
  ]

  const addToCart = (mealId: number) => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">SmartMeal</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for food, restaurants..."
                  className="pl-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>

              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogOut className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Good afternoon, Rana! 👋</h1>
          <p className="text-gray-600">What would you like to eat today?</p>
        </div>

        {/* Delivery Info */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Delivering to</p>
                  <p className="text-emerald-100">Home - 123 Main Street</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">Estimated time</p>
                <p className="text-emerald-100">25-30 min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.emoji}</div>
                  <Badge variant="secondary" className={category.color}>
                    {category.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Meals */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Popular Near You</h2>
            <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
              See all
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularMeals.map((meal) => (
              <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={meal.image || "/placeholder.svg"}
                    alt={meal.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full ${
                      meal.liked ? "text-red-500 bg-white/80" : "text-gray-400 bg-white/80"
                    } hover:bg-white`}
                  >
                    <Heart className={`w-4 h-4 ${meal.liked ? "fill-current" : ""}`} />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{meal.name}</h3>
                    <span className="font-bold text-emerald-600">${meal.price}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{meal.restaurant}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{meal.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{meal.time}</span>
                    </div>
                  </div>

                  <Button onClick={() => addToCart(meal.id)} className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Special Offers</h3>
              <p className="text-purple-100 mb-4">Get 20% off on your first order!</p>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                View Offers
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Track Your Order</h3>
              <p className="text-orange-100 mb-4">Your last order is on the way!</p>
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Track Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
