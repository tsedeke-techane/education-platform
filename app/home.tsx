import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Laptop, Code, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const features = [
    {
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Learn Your Skills Online",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Improve Your Coding",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Read And Explore",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Main Section with curved image */}
      <div className="relative bg-gray-50 overflow-hidden">
        {/* Navigation */}
        <header className="container mx-auto py-6 px-4 md:px-6 relative z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-blue-500">5K</span>
                <span className="text-sm font-medium text-gray-800 mt-1">Tutorial</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center">
              <div className="flex gap-12 mx-auto">
                <Link href="/" className="text-base font-medium text-gray-900 border-b-2 border-blue-500 pb-1">
                  Home
                </Link>
                <Link href="#about" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="#courses" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Courses
                </Link>
              </div>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/Register">
                <Button variant="outline" className="bg-blue-50 text-gray-800 border-none rounded-full px-6">
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="bg-orange-50 text-gray-800 border-none rounded-full px-6">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Curved background for the image */}
        <div className="absolute left-0 top-0 w-1/2 h-full z-10">
          <div className="absolute right-0 top-0 bottom-0 w-full h-full overflow-hidden">
            <div className="absolute right-[-25%] top-[-5%] bottom-0 w-[125%] h-[110%] rounded-[50%] border-[2px] border-blue-100"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-32 z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                  <Image
                    src="/student-coding.png"
                    alt="Student coding"
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6 text-center md:text-left z-20">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Learn . Code . Grow</h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                  This is a powerful platform designed to empower learners with valuable tools and features that make
                  studying easier and more effective.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-6 text-base">
                    Get Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-6 text-base">
                    Our Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="relative z-20 -mt-20 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md rounded-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                      <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
