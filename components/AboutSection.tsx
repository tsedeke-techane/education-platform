"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-blue-600"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 8v4l3 3"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Empowering Your Tech Journey
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-6">
              We're dedicated to making technology education accessible,
              engaging, and effective for everyone. Our mission is to bridge the
              gap between theoretical knowledge and real-world application.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-blue-600"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Expert-Led Learning
            </h3>
            <p className="text-gray-600 mb-4 flex-1">
              Learn from industry professionals with years of experience who are
              passionate about teaching and mentoring the next generation of
              tech talent.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Instructor"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/placeholder-user.jpg"
                    alt="Instructor"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/placeholder-user.jpg"
                    alt="Instructor"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-sm text-gray-500 ml-3">
                  10+ expert instructors
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 flex flex-col">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-600"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 15v-6"></path>
                <path d="M12 12v3"></path>
                <path d="M15 9v6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Project-Based Curriculum
            </h3>
            <p className="text-gray-600 mb-4 flex-1">
              Apply what you learn through hands-on projects that simulate
              real-world scenarios, building a portfolio that showcases your
              skills to potential employers.
            </p>
            <div className="mt-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                100+ Real-world Projects
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 flex flex-col">
            <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-purple-600"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Supportive Community
            </h3>
            <p className="text-gray-600 mb-4 flex-1">
              Join a vibrant community of learners, mentors, and industry
              professionals who collaborate, share knowledge, and provide
              support throughout your learning journey.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ml-3">
                  2000+ Students
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex p-1 rounded-full bg-gray-100 mb-6">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-white shadow-sm">
              Our Values
            </span>
            <span className="px-3 py-1 text-sm text-gray-600">Excellence</span>
            <span className="px-3 py-1 text-sm text-gray-600">
              Collaboration
            </span>
            <span className="px-3 py-1 text-sm text-gray-600">Innovation</span>
          </div>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            "Education is not just about filling a bucket, but lighting a fire.
            We're here to ignite your passion for technology and guide you
            towards excellence."
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg">
            Learn About Our Vision
          </Button>
        </div>
      </div>
    </section>
  );
}
