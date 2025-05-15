import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Code, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  ];

  const courses = [
    {
      id: "Frontend-dev-for-beginners",
      image: "/frontend.jpg",
      title: "FRONTEND DEVELOPMENT",
      description:
        "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
      price: "$99",
    },
    {
      id: "Backend-dev-for-beginners",
      image: "/backend.jpg",
      title: "BACKEND DEVELOPMENT",
      description:
        "Dive into server-side development with Node.js and Express.",
      price: "$129",
    },
    {
      id: "Data-Structures-Algorithms",
      image: "/dsa.jpg",
      title: "DATA STRUCTURES & ALGORITHMS",
      description:
        "Master the core concepts of data structures and algorithms for technical interviews.",
      price: "$149",
    },
  ];

  const instructors = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      image: "/placeholder-user.jpg",
    },
  ];

  return (
    // <div className="relative w-full min-h-screen bg-[url('/student-coding.png')] bg-cover bg-center bg-no-repeat">
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Main Section with curved image */}
      {/* <div className="relative bg-gray-50 overflow-hidden"> */}
      <div className="relative bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/student-coding.png" // Replace with actual path
            alt="Student coding"
            className="w-50% h-full object-cover opacity-70"
          />
        </div>

        {/* Navigation */}
        <header className="container mx-auto py-6 px-4 md:px-6 relative z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-blue-500">5K</span>
                <span className="text-sm font-medium text-gray-800 mt-1">
                  Tutorial
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center">
              <div className="flex gap-12 mx-auto">
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
                  {/* <Image
                      src="/student-coding.png"
                      alt="Student coding"
                      width={1000}
                      height={1000}
                      className="object-cover"
                      priority
                    /> */}
                </div>
              </div>
              <div className="space-y-6 text-center md:text-left z-20">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  Learn . Code . Grow
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                  This is a powerful platform designed to empower learners with
                  valuable tools and features that make studying easier and more
                  effective.
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

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 shadow-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:shadow-lg group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 group-hover:bg-white transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Courses
            </div>
            <h2 className="text-3xl font-bold">Explore Our Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white h-[400px]  rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
              >
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-md font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
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

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white border-t border-b border-gray-100"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl font-bold">Who We Are</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/backend.jpg"
                alt="Coding environment"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                From Curiosity To Code - The Next Tech
              </h2>
              <p className="text-gray-600">
                We are a team of passionate developers and educators committed
                to helping you master coding. Our program focuses on hands-on
                learning and real-world applications. We offer a comprehensive
                curriculum, personalized mentorship, and a supportive community
                to ensure your success in the tech industry.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">Join Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold">What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r rounded-lg p-6 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-blue-500 group"
              >
                <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">
                  {idx === 0 &&
                    `"The 5K Tutorial community has been a game-changer for me. The hands-on approach and supportive instructors made learning coding enjoyable and effective."`}
                  {idx === 1 &&
                    `"I never thought I could learn coding so quickly. The instructors are knowledgeable and always available to help. I highly recommend 5K Tutorial to anyone looking to start their coding journey."`}
                  {idx === 2 &&
                    `"5K Tutorial has a fantastic curriculum that covers everything you need to know. The projects are challenging yet rewarding. I feel confident in my coding skills now."`}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={`/placeholder.svg?height=60&width=60`}
                    alt={`Student ${idx + 1}`}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-semibold group-hover:text-white transition-colors">
                      Student Name
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                      {idx === 0 && "Frontend Developer"}
                      {idx === 1 && "Backend Developer"}
                      {idx === 2 && "Data Scientist"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder-logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-blue-400">
                  5K Tutorial
                </span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of developers through quality
                education.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="text-gray-400 hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>tsedeketechane@gmail.com</li>
                <li>+251 961 204 648</li>
                <li>5Kilo, Addis Ababa</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest courses and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="tsedeketechane@gmail.com"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 5K Tutorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
