// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import { ArrowRight, Code, BookOpen, Brain } from "lucide-react"

// // // import { Button } from "@/components/ui/button"
// // // import { Card, CardContent } from "@/components/ui/card"

// // // export default function Home() {
// // //   const features = [
// // //     {
// // //       icon: <Code className="h-8 w-8 text-blue-500" />,
// // //       title: "Learn from Real Coding",
// // //       description: "Practical hands-on coding experience with real-world projects leading to job opportunities.",
// // //     },
// // //     {
// // //       icon: <BookOpen className="h-8 w-8 text-blue-500" />,
// // //       title: "Structured Curriculum",
// // //       description: "Follow our carefully designed learning path to master coding",
// // //     },
// // //     {
// // //       icon: <Brain className="h-8 w-8 text-blue-500" />,
// // //       title: "Grow Your Skillset",
// // //       description: "Expand your knowledge and stay ahead in the tech industry",
// // //     },
// // //   ]

// // //   const instructors = [
// // //     {
// // //       image: "/placeholder.svg?height=60&width=60",
// // //       name: "Tsedeke Techan",
// // //       role: "Full Stack Developer and Instructor",
// // //     },
// // //     {
// // //       image: "/placeholder.svg?height=60&width=60",
// // //       name: "Jiru Gutema",
// // //       role: "Full Stack Developer and Instructor",
// // //     },
// // //     {
// // //       image: "/placeholder.svg?height=60&width=60",
// // //       name: "Buruk Demise",
// // //       role: "A2SVian and Instructor",
// // //     },
// // //   ]

// // //   const courses = [
// // //     {
// // //       id: "Frontend-dev-for-beginners",
// // //       image: "/placeholder.svg?height=200&width=300",
// // //       title: "FRONTEND DEV FOR BEGINNERS",
// // //       description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
// // //       price: "50 hours",
// // //     },
// // //     {
// // //       id: "Backend-dev-for-beginners",
// // //       image: "/placeholder.svg?height=200&width=300",
// // //       title: "BACKEND DEV FOR BEGINNERS",
// // //       description: "Dive into server-side development with Node.js and Express.",
// // //       price: "50 hours",
     
// // //     },
// // //     {
// // //       id: "Data-Structures-Algorithms",
// // //       image: "/placeholder.svg?height=200&width=300",
// // //       title: "DATA STRUCTURES & ALGORITHMS",
// // //       description: "Understand the core concepts of data structures and algorithms.",      
// // //       price: "50 hours",
// // //     },
    
// // //   ]

// // //   return (
// // //     <main className="flex min-h-screen flex-col">
// // //       {/* Navigation */}
// // //       <header className="container mx-auto py-4 px-4 md:px-6">
// // //         <div className="flex justify-between items-center">
// // //           <div className="flex items-center gap-2">
// // //             <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
// // //             <span className="text-xl font-bold text-blue-600">5K Tutorial</span>
// // //           </div>
// // //           <nav className="hidden md:flex items-center gap-6">
// // //             <Link href="/" className="text-sm font-medium hover:text-blue-600">
// // //               Home
// // //             </Link>
// // //             <Link href="#about" className="text-sm font-medium hover:text-blue-600">
// // //               About
// // //             </Link>
// // //             <Link href="#courses" className="text-sm font-medium hover:text-blue-600">
// // //               Courses
// // //             </Link>
// // //             <Link href="#courses" className="text-sm font-medium hover:text-blue-600">
// // //               Contact
// // //             </Link>
// // //           </nav>
// // //           <div className="flex items-center gap-4">
// // //             <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
// // //               <Button className="bg-orange-500 hover:bg-orange-600">
// // //                   Get Started <ArrowRight className="ml-2 h-4 w-4" />
// // //                 </Button>
// // //             </Link>
// // //             {/* <Button variant="outline" size="sm">
// // //               Login
// // //             </Button> */}
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* main Section */}
// // //       <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// // //             <div className="space-y-6">
// // //               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn . Code . Grow</h1>
// // //               <p className="text-lg text-gray-600 max-w-md">
// // //                 This is a 5K Tutorial community for students who are eager to learn coding and programming. Join
// // //                 us to explore the world of technology.
// // //               </p>
// // //               <div className="flex flex-wrap gap-4">
// // //                 <Button className="bg-orange-500 hover:bg-orange-600">
// // //                   Get Started <ArrowRight className="ml-2 h-4 w-4" />
// // //                 </Button>
// // //                 <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
// // //                   Our Courses
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //             <div className="relative">
// // //               <Image
// // //                 src="/placeholder.svg?height=400&width=500"
// // //                 alt="Student coding"
// // //                 width={500}
// // //                 height={400}
// // //                 className="rounded-lg shadow-lg"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

     
// // //       {/* Features Section */}
// // //       <section className="py-16 bg-white">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {features.map((feature, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="border border-gray-100 shadow-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:shadow-lg group"
// // //               >
// // //                 <CardContent className="p-6 text-center">
// // //                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 group-hover:bg-white transition-colors">
// // //                     {feature.icon}
// // //                   </div>
// // //                   <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors">
// // //                     {feature.title}
// // //                   </h3>
// // //                   <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
// // //                     {feature.description}
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Courses Section */}
// // //       <section id="courses" className="py-16 bg-gray-50">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// // //               Courses
// // //             </div>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {courses.map((course) => (
// // //               <div
// // //                 key={course.id}
// // //                 className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
// // //               >
// // //                 <Image
// // //                   src={course.image || "/placeholder.svg"}
// // //                   alt={course.title}
// // //                   width={300}
// // //                   height={200}
// // //                   className="w-full h-48 object-cover"
// // //                 />
// // //                 <div className="p-6">
// // //                   <h3 className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
// // //                     {course.title}
// // //                   </h3>
// // //                   <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">
// // //                     {course.description}
// // //                   </p>
// // //                   <div className="flex justify-between items-center">
// // //                     <span className="font-bold group-hover:text-white transition-colors">
// // //                       {course.price}
// // //                     </span>
// // //                     <Link href={`/courses/${course.id}`}>
// // //                       <Button
// // //                         size="sm"
// // //                         variant="outline"
// // //                         className="text-orange-500 border-orange-500 hover:bg-orange-50 group-hover:bg-white group-hover:text-orange-500 transition-colors"
// // //                       >
// // //                         Details
// // //                       </Button>
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>


// // //       {/* Our Hero Section */}

// // //       <section className="py-16 bg-gray-50">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// // //               Meet Our Instructors
// // //             </div>
// // //             <h2 className="text-3xl font-bold">Learn from the Best</h2>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {instructors.map((instructor, index) => (
// // //               <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 group">
// // //                 <Image
// // //                   src={instructor.image}
// // //                   alt={instructor.name}
// // //                   width={60}
// // //                   height={60}
// // //                   className="rounded-full border-2 border-white mb-4"
// // //                 />
// // //                 <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
// // //                   {instructor.name}
// // //                 </h3>
// // //                 <p className="text-gray-600 group-hover:text-blue-100 transition-colors">{instructor.role}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* About Section */}
// // //       <section id="about" className="py-16 bg-gray-50 border-t border-b border-gray-100">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-8">
// // //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// // //               About Us
// // //             </div>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// // //             <div>
// // //               <Image
// // //                 src="/placeholder.svg?height=400&width=500"
// // //                 alt="Coding environment"
// // //                 width={500}
// // //                 height={400}
// // //                 className="rounded-lg shadow-lg"
// // //               />
// // //             </div>
// // //             <div className="space-y-6">
// // //               <h2 className="text-3xl font-bold">From Curiosity To Code - The Next Tech</h2>
// // //               <p className="text-gray-600">
// // //                 We are a team of passionate developers and educators committed to helping you master coding. Our program
// // //                 focuses on hands-on learning and real-world applications. We offer a comprehensive curriculum,
// // //                 personalized mentorship, and a supportive community to ensure your success in the tech industry.
// // //               </p>
// // //              <div className="relative" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
// // //               <Button className="bg-blue-500 hover:bg-blue-600 ml-[-100px]">Join Us</Button>
// // //             </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

          
// // //       {/* Testimonials Section */}
// // //       <section className="py-16 bg-white">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// // //               Testimonials
// // //             </div>
// // //             <h2 className="text-3xl font-bold">What Our Students Say</h2>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {[1, 2, 3].map((_, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 className="bg-gradient-to-r rounded-lg p-6 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-blue-500 group"
// // //               >
// // //                 <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">
// // //                   {idx === 0 &&
// // //                     `"The 5K Tutorial community has been a game-changer for me. The hands-on approach and supportive instructors made learning coding enjoyable and effective."`}
// // //                   {idx === 1 &&
// // //                     `"I never thought I could learn coding so quickly. The instructors are knowledgeable and always available to help. I highly recommend 5K Tutorial to anyone looking to start their coding journey."`}
// // //                   {idx === 2 &&
// // //                     `"5K Tutorial has a fantastic curriculum that covers everything you need to know. The projects are challenging yet rewarding. I feel confident in my coding skills now."`}
// // //                 </p>
// // //                 <div className="flex items-center gap-4">
// // //                   <Image
// // //                     src={`/placeholder.svg?height=60&width=60`}
// // //                     alt={`Student ${idx + 1}`}
// // //                     width={60}
// // //                     height={60}
// // //                     className="rounded-full border-2 border-white"
// // //                   />
// // //                   <div>
// // //                     <h3 className="font-semibold group-hover:text-white transition-colors">
// // //                       Student Name
// // //                     </h3>
// // //                     <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
// // //                       {idx === 0 && "Frontend Developer"}
// // //                       {idx === 1 && "Backend Developer"}
// // //                       {idx === 2 && "Data Scientist"}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>


// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-white py-12">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // //             <div>
// // //               <div className="flex items-center gap-2 mb-4">
// // //                 <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
// // //                 <span className="text-xl font-bold text-blue-400">5K Tutorial</span>
// // //               </div>
// // //               <p className="text-gray-400">Empowering the next generation of developers through quality education.</p>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
// // //               <ul className="space-y-2">
// // //                 <li>
// // //                   <Link href="/" className="text-gray-400 hover:text-white">
// // //                     Home
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link href="#about" className="text-gray-400 hover:text-white">
// // //                     About
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link href="#courses" className="text-gray-400 hover:text-white">
// // //                     Courses
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link href="#courses" className="text-gray-400 hover:text-white">
// // //                     Contact
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold mb-4">Contact</h3>
// // //               <ul className="space-y-2 text-gray-400">
// // //                 <li>tsedeketechane@gmail.com</li>
// // //                 <li>+251 961 204 648</li>
// // //                 <li>5Kilo, Addis Ababa</li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
// // //               <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
// // //               <div className="flex">
// // //                 <input type="email" placeholder="tsedeketechane@gmail.com" className="px-4 py-2 rounded-l-md w-full text-gray-900" />
// // //                 <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
// // //             <p>© 2025 5K Tutorial. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </main>
// // //   )
// // // }
// // import Image from "next/image"
// // import Link from "next/link"
// // import { ArrowRight, Code, BookOpen, Laptop } from "lucide-react"

// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent } from "@/components/ui/card"

// // export default function Home() {
// //   const features = [
// //     {
// //       icon: <Laptop className="h-8 w-8 text-white" />,
// //       title: "Learn Your Skills Online",
// //       description:
// //         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
// //     },
// //     {
// //       icon: <Code className="h-8 w-8 text-white" />,
// //       title: "Improve Your Coding",
// //       description:
// //         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
// //     },
// //     {
// //       icon: <BookOpen className="h-8 w-8 text-white" />,
// //       title: "Read And Explore",
// //       description:
// //         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
// //     },
// //   ]

// //   const instructors = [
// //     {
// //       image: "/placeholder.svg?height=60&width=60",
// //       name: "Tsedeke Techan",
// //       role: "Full Stack Developer and Instructor",
// //     },
// //     {
// //       image: "/placeholder.svg?height=60&width=60",
// //       name: "Jiru Gutema",
// //       role: "Full Stack Developer and Instructor",
// //     },
// //     {
// //       image: "/placeholder.svg?height=60&width=60",
// //       name: "Buruk Demise",
// //       role: "A2SVian and Instructor",
// //     },
// //   ]

// //   const courses = [
// //     {
// //       id: "Frontend-dev-for-beginners",
// //       image: "/placeholder.svg?height=200&width=300",
// //       title: "FRONTEND DEV FOR BEGINNERS",
// //       description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
// //       price: "50 hours",
// //     },
// //     {
// //       id: "Backend-dev-for-beginners",
// //       image: "/placeholder.svg?height=200&width=300",
// //       title: "BACKEND DEV FOR BEGINNERS",
// //       description: "Dive into server-side development with Node.js and Express.",
// //       price: "50 hours",
// //     },
// //     {
// //       id: "Data-Structures-Algorithms",
// //       image: "/placeholder.svg?height=200&width=300",
// //       title: "DATA STRUCTURES & ALGORITHMS",
// //       description: "Understand the core concepts of data structures and algorithms.",
// //       price: "50 hours",
// //     },
// //   ]

// //   return (
// //     <main className="flex min-h-screen flex-col">
// //       {/* Navigation */}
// //       <div className="bg-gray-50">
// //         <header className="container mx-auto py-4 px-4 md:px-6">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center gap-2">
// //               <div className="flex items-center">
// //                 <span className="text-4xl font-bold text-blue-500">5K</span>
// //                 <span className="text-xl font-bold text-gray-800">Tutorial</span>
// //               </div>
// //             </div>
// //             <nav className="hidden md:flex items-center gap-12">
// //               <div className="flex gap-12">
// //                 <Link href="/" className="text-base font-medium text-gray-900 border-b-2 border-blue-500 pb-1">
// //                   Home
// //                 </Link>
// //                 <Link href="#about" className="text-base font-medium text-gray-600 hover:text-gray-900">
// //                   About
// //                 </Link>
// //                 <Link href="#courses" className="text-base font-medium text-gray-600 hover:text-gray-900">
// //                   Courses
// //                 </Link>
// //               </div>
// //             </nav>
// //             <div className="flex items-center gap-4">
// //               <Button variant="outline" className="bg-blue-50 text-gray-800 border-none rounded-full px-6">
// //                 Register
// //               </Button>
// //               <Button variant="outline" className="bg-orange-50 text-gray-800 border-none rounded-full px-6">
// //                 Log In
// //               </Button>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Main Section with curved image */}
// //         <section className="relative overflow-hidden">
// //           {/* Curved background for the image */}
// //           <div className="absolute left-0 top-0 w-1/2 h-full">
// //             <div className="absolute right-0 top-0 bottom-0 w-full h-full overflow-hidden">
// //               <div className="absolute right-[-30%] top-[-10%] bottom-0 w-[130%] h-[120%] rounded-[50%] border-[2px] border-blue-100"></div>
// //             </div>
// //           </div>

// //           <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //               <div className="relative">
// //                 <div className="relative aspect-square max-w-md mx-auto md:mx-0">
// //                   <Image
// //                     src="/placeholder.svg?height=500&width=500"
// //                     alt="Student coding"
// //                     width={500}
// //                     height={500}
// //                     className="object-cover"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="space-y-6 text-center md:text-left">
// //                 <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Learn . Code . Grow</h1>
// //                 <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
// //                   This is a powerful platform designed to empower learners with valuable tools and features that make
// //                   studying easier and more effective.
// //                 </p>
// //                 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
// //                   <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-6 text-base">
// //                     Get Courses <ArrowRight className="ml-2 h-4 w-4" />
// //                   </Button>
// //                   <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-6 text-base">
// //                     Our Courses <ArrowRight className="ml-2 h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Feature Cards */}
// //           <div className="container mx-auto px-4 md:px-6 pb-16">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               {features.map((feature, index) => (
// //                 <Card key={index} className="border-none shadow-md rounded-lg overflow-hidden">
// //                   <CardContent className="p-8">
// //                     <div className="flex flex-col gap-4">
// //                       <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center">
// //                         {feature.icon}
// //                       </div>
// //                       <h3 className="text-xl font-semibold">{feature.title}</h3>
// //                       <p className="text-gray-600 text-sm">{feature.description}</p>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </div>

// //       {/* Courses Section */}
// //       <section id="courses" className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// //               Courses
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {courses.map((course) => (
// //               <div
// //                 key={course.id}
// //                 className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
// //               >
// //                 <Image
// //                   src={course.image || "/placeholder.svg"}
// //                   alt={course.title}
// //                   width={300}
// //                   height={200}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <h3 className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
// //                     {course.title}
// //                   </h3>
// //                   <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">{course.description}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="font-bold group-hover:text-white transition-colors">{course.price}</span>
// //                     <Link href={`/courses/${course.id}`}>
// //                       <Button
// //                         size="sm"
// //                         variant="outline"
// //                         className="text-orange-500 border-orange-500 hover:bg-orange-50 group-hover:bg-white group-hover:text-orange-500 transition-colors"
// //                       >
// //                         Details
// //                       </Button>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Hero Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// //               Meet Our Instructors
// //             </div>
// //             <h2 className="text-3xl font-bold">Learn from the Best</h2>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {instructors.map((instructor, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 group"
// //               >
// //                 <Image
// //                   src={instructor.image || "/placeholder.svg"}
// //                   alt={instructor.name}
// //                   width={60}
// //                   height={60}
// //                   className="rounded-full border-2 border-white mb-4"
// //                 />
// //                 <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
// //                   {instructor.name}
// //                 </h3>
// //                 <p className="text-gray-600 group-hover:text-blue-100 transition-colors">{instructor.role}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="py-16 bg-gray-50 border-t border-b border-gray-100">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-8">
// //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// //               About Us
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <Image
// //                 src="/placeholder.svg?height=400&width=500"
// //                 alt="Coding environment"
// //                 width={500}
// //                 height={400}
// //                 className="rounded-lg shadow-lg"
// //               />
// //             </div>
// //             <div className="space-y-6">
// //               <h2 className="text-3xl font-bold">From Curiosity To Code - The Next Tech</h2>
// //               <p className="text-gray-600">
// //                 We are a team of passionate developers and educators committed to helping you master coding. Our program
// //                 focuses on hands-on learning and real-world applications. We offer a comprehensive curriculum,
// //                 personalized mentorship, and a supportive community to ensure your success in the tech industry.
// //               </p>
// //               <div className="relative" style={{ marginLeft: "auto", marginRight: "auto", width: "fit-content" }}>
// //                 <Button className="bg-blue-500 hover:bg-blue-600 ml-[-100px]">Join Us</Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
// //               Testimonials
// //             </div>
// //             <h2 className="text-3xl font-bold">What Our Students Say</h2>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[1, 2, 3].map((_, idx) => (
// //               <div
// //                 key={idx}
// //                 className="bg-gradient-to-r rounded-lg p-6 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-blue-500 group"
// //               >
// //                 <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">
// //                   {idx === 0 &&
// //                     `"The 5K Tutorial community has been a game-changer for me. The hands-on approach and supportive instructors made learning coding enjoyable and effective."`}
// //                   {idx === 1 &&
// //                     `"I never thought I could learn coding so quickly. The instructors are knowledgeable and always available to help. I highly recommend 5K Tutorial to anyone looking to start their coding journey."`}
// //                   {idx === 2 &&
// //                     `"5K Tutorial has a fantastic curriculum that covers everything you need to know. The projects are challenging yet rewarding. I feel confident in my coding skills now."`}
// //                 </p>
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={`/placeholder.svg?height=60&width=60`}
// //                     alt={`Student ${idx + 1}`}
// //                     width={60}
// //                     height={60}
// //                     className="rounded-full border-2 border-white"
// //                   />
// //                   <div>
// //                     <h3 className="font-semibold group-hover:text-white transition-colors">Student Name</h3>
// //                     <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
// //                       {idx === 0 && "Frontend Developer"}
// //                       {idx === 1 && "Backend Developer"}
// //                       {idx === 2 && "Data Scientist"}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 text-white py-12">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //             <div>
// //               <div className="flex items-center gap-2 mb-4">
// //                 <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
// //                 <span className="text-xl font-bold text-blue-400">5K Tutorial</span>
// //               </div>
// //               <p className="text-gray-400">Empowering the next generation of developers through quality education.</p>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link href="/" className="text-gray-400 hover:text-white">
// //                     Home
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#about" className="text-gray-400 hover:text-white">
// //                     About
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#courses" className="text-gray-400 hover:text-white">
// //                     Courses
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#courses" className="text-gray-400 hover:text-white">
// //                     Contact
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold mb-4">Contact</h3>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>tsedeketechane@gmail.com</li>
// //                 <li>+251 961 204 648</li>
// //                 <li>5Kilo, Addis Ababa</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
// //               <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
// //               <div className="flex">
// //                 <input
// //                   type="email"
// //                   placeholder="tsedeketechane@gmail.com"
// //                   className="px-4 py-2 rounded-l-md w-full text-gray-900"
// //                 />
// //                 <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
// //             <p>© 2025 5K Tutorial. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </main>
// //   )
// // }
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, Code, BookOpen, Brain } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// export default function Home() {
//   const features = [
//     {
//       icon: <Code className="h-8 w-8 text-blue-500" />,
//       title: "Learn from Real Coding",
//       description: "Practical hands-on coding experience with real-world projects leading to job opportunities.",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-blue-500" />,
//       title: "Structured Curriculum",
//       description: "Follow our carefully designed learning path to master coding",
//     },
//     {
//       icon: <Brain className="h-8 w-8 text-blue-500" />,
//       title: "Grow Your Skillset",
//       description: "Expand your knowledge and stay ahead in the tech industry",
//     },
//   ]

//   const courses = [
//     {
//       id: "Frontend-dev-for-beginners",
//       image: "/frontend.jpg",
//       title: "FRONTEND DEV FOR BEGINNERS",
//       description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
//       price: "50 hours",
//     },
//     {
//       id: "Backend-dev-for-beginners",
//       image: "/backend.jpg",
//       title: "BACKEND DEV FOR BEGINNERS",
//       description: "Dive into server-side development with Node.js and Express.",
//       price: "50 hours",
//     },
//     {
//       id: "Data-Structures-Algorithms",
//       image: "/dsa.jpg",
//       title: "DATA STRUCTURES & ALGORITHMS",
//       description: "Understand the core concepts of data structures and algorithms.",
//       price: "50 hours",
//     },
//   ]

//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Navigation */}
//       <header className="container mx-auto py-4 px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Image src="/placeholder-logo.svg" alt="Logo" width={40} height={40} />
//             <span className="text-xl font-bold text-blue-600">5K Tutorial</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-sm font-medium hover:text-blue-600">
//               Home
//             </Link>
//             <Link href="#about" className="text-sm font-medium hover:text-blue-600">
//               About
//             </Link>
//             <Link href="#courses" className="text-sm font-medium hover:text-blue-600">
//               Courses
//             </Link>
//             <Link href="#contact" className="text-sm font-medium hover:text-blue-600">
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Link href="/login" className="text-sm font-medium hover:text-blue-600">
//               Login
//             </Link>
//             <Link href="/Register">
//               <Button className="bg-orange-500 hover:bg-orange-600">
//                 Register <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn . Code . Grow</h1>
//               <p className="text-lg text-gray-600 max-w-md">
//                 This is a 5K Tutorial community for students who are eager to learn coding and programming. Join us to
//                 explore the world of technology.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Button className="bg-orange-500 hover:bg-orange-600">
//                   Get Started <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//                 <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
//                   Our Courses
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/frontend.jpg"
//                 alt="Student coding"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border border-gray-100 shadow-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:shadow-lg group"
//               >
//                 <CardContent className="p-6 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 group-hover:bg-white transition-colors">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 group-hover:text-blue-100 transition-colors">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
//               Courses
//             </div>
//             <h2 className="text-3xl font-bold">Explore Our Courses</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {courses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
//               >
//                 <Image
//                   src={course.image || "/placeholder.svg"}
//                   alt={course.title}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
//                     {course.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">{course.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold group-hover:text-white transition-colors">{course.price}</span>
//                     <Link href={`/courses/${course.id}`}>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="text-orange-500 border-orange-500 hover:bg-orange-50 group-hover:bg-white group-hover:text-orange-500 transition-colors"
//                       >
//                         Details
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-gray-50 border-t border-b border-gray-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-8">
//             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
//               About Us
//             </div>
//             <h2 className="text-3xl font-bold">Who We Are</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/backend.jpg"
//                 alt="Coding environment"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold">From Curiosity To Code - The Next Tech</h2>
//               <p className="text-gray-600">
//                 We are a team of passionate developers and educators committed to helping you master coding. Our program
//                 focuses on hands-on learning and real-world applications. We offer a comprehensive curriculum,
//                 personalized mentorship, and a supportive community to ensure your success in the tech industry.
//               </p>
//               <Button className="bg-blue-500 hover:bg-blue-600">Join Us</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
//               Contact Us
//             </div>
//             <h2 className="text-3xl font-bold">Get In Touch</h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Have questions about our courses or need more information? We're here to help!
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-lg">
//               Contact Us <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Image src="/placeholder-logo.svg" alt="Logo" width={40} height={40} />
//                 <span className="text-xl font-bold text-blue-400">5K Tutorial</span>
//               </div>
//               <p className="text-gray-400">Empowering the next generation of developers through quality education.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-gray-400 hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#about" className="text-gray-400 hover:text-white">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#courses" className="text-gray-400 hover:text-white">
//                     Courses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#contact" className="text-gray-400 hover:text-white">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>info@5ktutorial.com</li>
//                 <li>+251 961 204 648</li>
//                 <li>5Kilo, Addis Ababa</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
//               <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
//               <div className="flex">
//                 <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-gray-900" />
//                 <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>© 2025 5K Tutorial. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }
// import Home from "./home"

// export default function Page() {
//   return <Home />
// }
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, Code, BookOpen, Laptop } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// export default function Home() {
//   const features = [
//     {
//       icon: <Laptop className="h-8 w-8 text-white" />,
//       title: "Learn Your Skills Online",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
//     },
//     {
//       icon: <Code className="h-8 w-8 text-white" />,
//       title: "Improve Your Coding",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-white" />,
//       title: "Read And Explore",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Odio lacus massa placerat ipsum malesuada mi viverra mattis viverra. Odio lacus massa placerat ipsum malesuada mi viverra mattis.",
//     },
//   ]

//   const courses = [
//     {
//       id: "Frontend-dev-for-beginners",
//       image: "/frontend.jpg",
//       title: "FRONTEND DEV FOR BEGINNERS",
//       description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
//       price: "50 hours",
//     },
//     {
//       id: "Backend-dev-for-beginners",
//       image: "/backend.jpg",
//       title: "BACKEND DEV FOR BEGINNERS",
//       description: "Dive into server-side development with Node.js and Express.",
//       price: "50 hours",
//     },
//     {
//       id: "Data-Structures-Algorithms",
//       image: "/dsa.jpg",
//       title: "DATA STRUCTURES & ALGORITHMS",
//       description: "Understand the core concepts of data structures and algorithms.",
//       price: "50 hours",
//     },
//   ]

//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Main Section with curved image */}
//       <div className="relative bg-gray-50 overflow-hidden">
//         {/* Navigation */}
//         <header className="container mx-auto py-6 px-4 md:px-6 relative z-20">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold text-blue-500">5K</span>
//                 <span className="text-sm font-medium text-gray-800 mt-1">Tutorial</span>
//               </div>
//             </div>
//             <nav className="hidden md:flex items-center">
//               <div className="flex gap-12 mx-auto">
//                 <Link href="/" className="text-base font-medium text-gray-900 border-b-2 border-blue-500 pb-1">
//                   Home
//                 </Link>
//                 <Link href="#about" className="text-base font-medium text-gray-600 hover:text-gray-900">
//                   About
//                 </Link>
//                 <Link href="#courses" className="text-base font-medium text-gray-600 hover:text-gray-900">
//                   Courses
//                 </Link>
//               </div>
//             </nav>
//             <div className="flex items-center gap-4">
//               <Link href="/Register">
//                 <Button variant="outline" className="bg-blue-50 text-gray-800 border-none rounded-full px-6">
//                   Register
//                 </Button>
//               </Link>
//               <Link href="/login">
//                 <Button variant="outline" className="bg-orange-50 text-gray-800 border-none rounded-full px-6">
//                   Log In
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </header>

//         {/* Curved background for the image */}
//         <div className="absolute left-0 top-0 w-1/2 h-full z-10">
//           <div className="absolute right-0 top-0 bottom-0 w-full h-full overflow-hidden">
//             <div className="absolute right-[-25%] top-[-5%] bottom-0 w-[125%] h-[110%] rounded-[50%] border-[2px] border-blue-100"></div>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <section className="relative pt-8 pb-32 z-10">
//           <div className="container mx-auto px-4 md:px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div className="relative z-10">
//                 <div className="relative aspect-square max-w-md mx-auto md:mx-0">
//                   <Image
//                     src="/student-coding.png"
//                     alt="Student coding"
//                     width={500}
//                     height={500}
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//               </div>
//               <div className="space-y-6 text-center md:text-left z-20">
//                 <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Learn . Code . Grow</h1>
//                 <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
//                   This is a powerful platform designed to empower learners with valuable tools and features that make
//                   studying easier and more effective.
//                 </p>
//                 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//                   <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-6 text-base">
//                     Get Courses <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                   <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-6 text-base">
//                     Our Courses <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Feature Cards */}
//         <section className="relative z-20 -mt-20 pb-16">
//           <div className="container mx-auto px-4 md:px-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {features.map((feature, index) => (
//                 <Card key={index} className="border-none shadow-md rounded-lg overflow-hidden">
//                   <CardContent className="p-8">
//                     <div className="flex flex-col gap-4">
//                       <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center">
//                         {feature.icon}
//                       </div>
//                       <h3 className="text-xl font-semibold">{feature.title}</h3>
//                       <p className="text-gray-600 text-sm">{feature.description}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Courses Section */}
//       <section id="courses" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
//               Courses
//             </div>
//             <h2 className="text-3xl font-bold">Explore Our Courses</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {courses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
//               >
//                 <Image
//                   src={course.image || "/placeholder.svg"}
//                   alt={course.title}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-sm font-semibold text-blue-600 mb-2 group-hover:text-white transition-colors">
//                     {course.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">{course.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold group-hover:text-white transition-colors">{course.price}</span>
//                     <Link href={`/courses/${course.id}`}>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="text-orange-500 border-orange-500 hover:bg-orange-50 group-hover:bg-white group-hover:text-orange-500 transition-colors"
//                       >
//                         Details
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-gray-50 border-t border-b border-gray-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-8">
//             <div className="inline-block px-6 py-2 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
//               About Us
//             </div>
//             <h2 className="text-3xl font-bold">Who We Are</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/backend.jpg"
//                 alt="Coding environment"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold">From Curiosity To Code - The Next Tech</h2>
//               <p className="text-gray-600">
//                 We are a team of passionate developers and educators committed to helping you master coding. Our program
//                 focuses on hands-on learning and real-world applications. We offer a comprehensive curriculum,
//                 personalized mentorship, and a supportive community to ensure your success in the tech industry.
//               </p>
//               <Button className="bg-blue-500 hover:bg-blue-600">Join Us</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Image src="/placeholder-logo.svg" alt="Logo" width={40} height={40} />
//                 <span className="text-xl font-bold text-blue-400">5K Tutorial</span>
//               </div>
//               <p className="text-gray-400">Empowering the next generation of developers through quality education.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-gray-400 hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#about" className="text-gray-400 hover:text-white">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#courses" className="text-gray-400 hover:text-white">
//                     Courses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#contact" className="text-gray-400 hover:text-white">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>tsedeketechane@gmail.com</li>
//                 <li>+251 961 204 648</li>
//                 <li>5Kilo, Addis Ababa</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
//               <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="tsedeketechane@gmail.com"
//                   className="px-4 py-2 rounded-l-md w-full text-gray-900"
//                 />
//                 <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>© 2025 5K Tutorial. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, BookOpen, Laptop } from "lucide-react"

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

  const courses = [
    {
      id: "Frontend-dev-for-beginners",
      image: "/frontend.jpg",
      title: "FRONTEND DEV FOR BEGINNERS",
      description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
      price: "50 hours",
    },
    {
      id: "Backend-dev-for-beginners",
      image: "/backend.jpg",
      title: "BACKEND DEV FOR BEGINNERS",
      description: "Dive into server-side development with Node.js and Express.",
      price: "50 hours",
    },
    {
      id: "Data-Structures-Algorithms",
      image: "/dsa.jpg",
      title: "DATA STRUCTURES & ALGORITHMS",
      description: "Understand the core concepts of data structures and algorithms.",
      price: "50 hours",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
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
              <Link href="/register">
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

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
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
                className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 group"
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
                  <p className="text-gray-600 mb-4 group-hover:text-blue-100 transition-colors">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold group-hover:text-white transition-colors">{course.price}</span>
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
      <section id="about" className="py-16 bg-gray-50 border-t border-b border-gray-100">
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
              <h2 className="text-3xl font-bold">From Curiosity To Code - The Next Tech</h2>
              <p className="text-gray-600">
                We are a team of passionate developers and educators committed to helping you master coding. Our program
                focuses on hands-on learning and real-world applications. We offer a comprehensive curriculum,
                personalized mentorship, and a supportive community to ensure your success in the tech industry.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">Join Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/placeholder-logo.svg" alt="Logo" width={40} height={40} />
                <span className="text-xl font-bold text-blue-400">5K Tutorial</span>
              </div>
              <p className="text-gray-400">Empowering the next generation of developers through quality education.</p>
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
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-400 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
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
              <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="tsedeketechane@gmail.com"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 5K Tutorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
