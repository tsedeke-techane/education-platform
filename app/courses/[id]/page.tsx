import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Award,
  CheckCircle,
  BookOpen,
  DollarSign,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseEnrollButton } from "@/components/CourseEnrollButton";

// This would typically come from a database or API
const coursesData = {
  "Frontend-dev-for-beginners": {
    title: "Frontend Development for Beginners",
    subtitle: "Master the fundamentals of Frontend development",
    description:
      "This comprehensive course is designed for absolute beginners who want to learn frontend web development from scratch. You'll learn HTML, CSS, and JavaScript, the building blocks of the web, and build your first responsive websites.",
    image: "/frontend.jpg",
    price: 2000,
    duration: "8+ weeks",
    level: "Beginner",
    students: 40,
    lastUpdated: "March 2025",
    instructor: {
      name: "Tsedeke Techane",
      role: "FullStack Developer & Instructor",
      image: "/placeholder-user.jpg",
      bio: "Tsedeke has experience in web development and has taught over 100+ students online. He specializes in making complex concepts easy to understand for beginners.",
    },
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
      "A computer with internet access the programme is 100% online",
      "A willingness to learn and practice",
    ],
    whatYouWillLearn: [
      "HTML5 structure and semantics",
      "CSS3 styling and responsive design",
      "JavaScript fundamentals and DOM manipulation",
      "Building responsive websites from scratch",
      "Web accessibility best practices",
      "Version control with Git and GitHub",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Web Development",
        lessons: [
          "What is Web Development?",
          "How the Internet Works",
          "Setting Up Your Development Environment",
          "Introduction to HTML",
        ],
      },
      {
        title: "Module 2: HTML Fundamentals",
        lessons: [
          "HTML Document Structure",
          "Text Elements and Typography",
          "Links and Navigation",
          "Images and Media",
          "Tables and Forms",
        ],
      },
      {
        title: "Module 3: CSS Basics",
        lessons: [
          "Introduction to CSS",
          "Selectors and Properties",
          "The Box Model",
          "Colors and Typography",
          "Layouts and Positioning",
        ],
      },
      {
        title: "Module 4: Responsive Design",
        lessons: [
          "Mobile-First Design",
          "Media Queries",
          "Flexbox",
          "CSS Grid",
          "Responsive Images and Media",
        ],
      },
      {
        title: "Module 5: JavaScript Fundamentals",
        lessons: [
          "Introduction to JavaScript",
          "Variables and Data Types",
          "Functions and Control Flow",
          "Arrays and Objects",
          "DOM Manipulation",
          "Event Handling",
          "Debugging and Developer Tools",
        ],
      },
      {
        title: "Module 6: Building Projects",
        lessons: [
          "Project 1: Personal Portfolio",
          "Project 2: Landing Page",
          "Project 3: Interactive Form",
          "Project 4: Complete Website",
        ],
      },
    ],
    paymentOptions: [
      {
        name: "One-time Payment",
        price: "2000 Birr",
        features: [
          "Full course access",
          "Certificate of completion",
          "8+ weeks of support",
          "Access to community forum",
        ],
      },
      {
        name: "Monthly Subscription",
        price: "1000 Birr/month",
        features: [
          "Ongoing support",
          "Certificate of completion",
          "Access to community forum",
          "Access to all platform courses",
        ],
      },
    ],
  },
  "Backend-dev-for-beginners": {
    title: "Backend Development for Beginners",
    subtitle: "Learn the server-side of web applications",
    description:
      "This course is designed for beginners who want to learn backend development. You'll learn how to build server-side applications using Node.js, Express, and MongoDB. By the end of this course, you'll be able to create RESTful APIs and connect your frontend applications to a database.",
    image: "/backend.jpg",
    price: 2000,
    duration: "8+ weeks",
    level: "Intermediate to Advanced",
    students: 40,
    lastUpdated: "April 2025",
    instructor: {
      name: "Natnael Yohannes and Jiru Gutema",
      role: "Full Stack Developer",
      image: "/placeholder-user.jpg",
      bio: "Both are Full Stack Developers with extensive experience in backend technologies. They have worked on various projects and are passionate about teaching others.",
    },
    prerequisites: [
      "Basic knowledge of JavaScript",
      "Familiarity with HTML and CSS",
      "Understanding of RESTful APIs",
      "Basic command line skills",
      "A computer with internet access. The programme is 100% online",
      "A willingness to learn and practice",
    ],
    whatYouWillLearn: [
      "Node.js and Express.js fundamentals",
      "Building RESTful APIs",
      "Database management with MongoDB",
      "Authentication and authorization",
      "Error handling and debugging",
      "Deployment and hosting",
      "Building a complete backend application",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Backend Development",
        lessons: [
          "What is Backend Development?",
          "Setting Up Your Environment",
          "Node.js Basics",
          "Introduction to Express.js",
        ],
      },
      {
        title: "Module 2: Building RESTful APIs",
        lessons: [
          "Understanding RESTful APIs",
          "Creating Your First API with Express",
          "CRUD Operations",
          "Middleware in Express",
          "Error Handling in APIs",
        ],
      },
      {
        title: "Module 3: Database Management",
        lessons: [
          "SQL Basics",
          "Introduction to PostgreSQL",
          "Setting Up PostgreSQL",
          "Connecting Node.js to PostgreSQL",
          "Using Sequelize prisma ORM",
          "Data Modeling and Schemas and Migrations ",
          "CRUD Operations with MongoDB",
        ],
      },
      {
        title: "Module 4: Authentication and Authorization",
        lessons: [
          "Understanding Authentication vs. Authorization",
          "Implementing JWT Authentication",
          "Securing Your API Endpoints",
          "Role-Based Access Control (RBAC)",
        ],
      },
      {
        title: "Module 5: Deployment and Hosting",
        lessons: [
          "Preparing Your Application for Production",
          "Deploying to Heroku or AWS",
          "Environment Variables and Configuration",
          "Monitoring and Logging Your Application",
        ],
      },
      {
        title: "Module 6: Final Project",
        lessons: [
          "Project Planning and Setup",
          "Building the Core Features",
          "Testing and Debugging",
          "Deployment and CI/CD",
        ],
      },
    ],

    paymentOptions: [
      {
        name: "One-time Payment",
        price: "2000 Birr",
        features: [
          "Full course access",
          "Certificate of completion",
          " 8+ weeks of support",
          "Access to private GitHub repository",
          "Code reviews for final project",
        ],
      },
      {
        name: "Monthly Subscription",
        price: "1000 Birr/month",
        features: [
          "Full course access",
          "Certificate of completion",
          "Ongoing support",
          "Access to all platform courses",
          "Monthly Q&A sessions with instructor",
        ],
      },
    ],
  },

  "Data-Structures-Algorithms": {
    title: "Data Structures & Algorithms using Python",
    subtitle: "From basics to advanced concepts",
    description:
      "This course is designed for beginners and intermediate programmers who want to master data structures and algorithms using Python. You'll learn how to solve complex problems efficiently and improve your coding skills.",
    image: "/dsa.jpg",
    price: 2000,
    duration: "8+ weeks",
    level: "Intermediate",
    students: 40,
    lastUpdated: "June 2025",
    instructor: {
      name: "Buruk Demise",
      role: "Computer Science and A2SVian",
      image: "/placeholder-user.jpg",
      bio: "Buruk is a Computer Science graduate with a passion for teaching. He has experience in competitive programming and has helped many students prepare for coding interviews.",
    },

    prerequisites: [
      "No prior programming experience required",
      "Basic computer skills",
      "A computer with internet access. The programme is 100% online",
      "A willingness to learn and practice",
    ],

    whatYouWillLearn: [
      "Python programming fundamentals",
      "Understanding data structures: lists, stacks, queues, trees, and graphs",
      "Algorithm design and analysis",
      "Sorting and searching algorithms",
      "Dynamic programming and recursion",
      "Problem-solving techniques",
      "Real-world applications of data structures and algorithms",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Python",
        lessons: [
          "Python Basics",
          "Data Types and Variables",
          "Control Flow Statements",
          "Functions and Modules",
          "Error Handling and Exceptions",
        ],
      },
      {
        title: "Module 2: Data Structures",
        lessons: [
          "Lists and Tuples",
          "Dictionaries and Sets",
          "Stacks and Queues",
          "Linked Lists",
          "Trees (Binary Trees, Binary Search Trees)",
        ],
      },
      {
        title: "Module 3: Algorithms",
        lessons: [
          "Sorting Algorithms (Bubble, Merge, Quick)",
          "Two-Pointer Technique",
          "Sliding Window Technique",
          "Searching Algorithms (Linear, Binary)",
        ],
      },
      {
        title: "Module 4: Advanced Topics",
        lessons: [
          "Graph Algorithms (DFS, BFS)",
          "Complexity Analysis (Big O Notation)",
          "Greedy Algorithms",
        ],
      },
      {
        title: "Module 5: Final Project",
        lessons: ["Solving 100+ LeetCode Problems"],
      },
    ],

    paymentOptions: [
      {
        name: "One-time Payment",
        price: "2000 Birr",
        features: [
          "Full course access",
          "Certificate of completion",
          "8+ weeks of support",
          "Access to community forum",
          "20+ practice exercises and projects",
        ],
      },
      {
        name: "Monthly Subscription",
        price: "1000 Birr/month",
        features: [
          "Full course access",
          "Certificate of completion",
          "Ongoing support",
          "Access to all platform courses",
          "Weekly coding challenges",
        ],
      },
    ],
  },
};

export default async function CourseDetails({
  params,
}: {
  params: { id: string };
}) {
  // In a real app with dynamic data, you would fetch the data here
  // For now, we'll use the static data from the file
  const courseId = params.id;

  // Check if course exists in our data
  if (!(courseId in coursesData)) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <p className="mb-8">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  // If course exists, we can safely access it
  const course = coursesData[courseId as keyof typeof coursesData];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center text-white mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl mb-6">{course.subtitle}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-blue-100">
                    {course.instructor.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
              <div className="mb-6">
                <p className="text-3xl font-bold mb-2">{course.price} Birr</p>
                <p className="text-gray-600 mb-4">Full lifetime access</p>
                <CourseEnrollButton
                  courseTitle={course.title}
                  paymentOptions={course.paymentOptions}
                />
                <Button variant="outline" className="w-full text-lg py-6">
                  Try Free Preview
                </Button>
              </div>
              <div className="border-t pt-4">
                <p className="text-center text-sm text-gray-600 mb-2">
                  7-Day Money-Back Guarantee
                </p>
                <p className="text-center text-sm text-gray-600">
                  Full lifetime access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="text-gray-700 mb-6">{course.description}</p>

              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {course.prerequisites.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Course Curriculum</h2>
                <div className="text-gray-600">
                  <BookOpen className="inline mr-2 h-5 w-5" />
                  {course.curriculum.reduce(
                    (total, module) => total + module.lessons.length,
                    0
                  )}{" "}
                  lessons
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="font-medium">{module.title}</span>
                        <p className="text-sm text-gray-600">
                          {module.lessons.length} lessons
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-center p-2 hover:bg-gray-50 rounded"
                          >
                            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                              {lessonIndex + 1}
                            </div>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="instructor">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <Image
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {course.instructor.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{course.instructor.role}</p>
                  <p className="text-gray-700">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.paymentOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-blue-500 transition-all"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                      <p className="text-3xl font-bold text-blue-600 mb-4">
                        {option.price}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
