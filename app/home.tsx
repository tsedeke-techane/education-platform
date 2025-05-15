import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Code, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: <Laptop className="h-10 w-10 text-white" />,
      title: "Learn Your Skills Online",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Improve Your Coding",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "Read And Explore",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
    },
  ];

  const courses = [
    {
      id: "Frontend-dev-for-beginners",
      image: "/frontend.jpg",
      title: "Frontend Development for Beginners",
      description:
        "This comprehensive course teaches HTML, CSS, and JavaScript to build responsive websites from scratch.",
      price: "2000 Birr",
    },
    {
      id: "Backend-dev-for-beginners",
      image: "/backend.jpg",
      title: "Backend Development for Beginners",
      description:
        "Learn to build server-side applications with Node.js, Express, and MongoDB.",
      price: "2000 Birr",
    },
    {
      id: "Data-Structures-Algorithms",
      image: "/dsa.jpg",
      title: "Data Structures & Algorithms using Python",
      description:
        "Master problem-solving with Python, covering DSA concepts from beginner to advanced.",
      price: "2000 Birr",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/student-coding.png')" }}
    >
   

      {/* Main Content */}
      <main className="relative z-10 flex flex-col min-h-screen text-white">
        {/* Header */}
        <header className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold text-blue-500">5K</span>
                <span className="text-sm font-medium text-gray-800 ml-1">
                  Tutorial
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center">
              <div className="flex gap-12">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 border-b-2 border-blue-500 pb-1"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="#courses"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  Courses
                </Link>
              </div>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/Register">
                <Button
                  variant="outline"
                  className="bg-blue-50 text-gray-800 border-none rounded-full px-6"
                >
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="bg-orange-50 text-gray-800 border-none rounded-full px-6"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Learn . Code . Grow
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                This is a powerful platform designed to empower learners with
                valuable tools and features that make studying easier and more
                effective.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                <Link href="#courses">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 text-base font-medium">
                    Get Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#courses">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 text-base font-medium">
                    Our Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <section className="relative z-20 -mt-8 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md rounded-2xl overflow-hidden bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-50 text-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
                Courses
              </div>
              <h2 className="text-3xl font-bold">Explore Our Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold group-hover:text-white transition-colors">
                        {course.price}
                      </span>
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-orange-500 border-orange-500 hover:bg-orange-50 group-hover:bg-white group-hover:text-orange-500 transition-colors"
                        >
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
