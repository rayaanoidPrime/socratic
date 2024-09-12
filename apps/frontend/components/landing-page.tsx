"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, ChevronDown, Zap } from "lucide-react";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#1F1F1F] bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#FF7A00]"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="text-lg font-bold">LearnAI</span>
              </Link>
            </div>
            <nav className="hidden items-center space-x-8 md:flex">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-[#FF7A00]"
              >
                Features
              </Link>
              <Link
                href="#methods"
                className="text-sm font-medium hover:text-[#FF7A00]"
              >
                Methods
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-[#FF7A00]"
              >
                Pricing
              </Link>
              <Link
                href="#founders-note"
                className="text-sm font-medium hover:text-[#FF7A00]"
              >
                Founders' Note
              </Link>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium hover:text-[#FF7A00]">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1F1F1F] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="#blog"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2F2F2F]"
                      role="menuitem"
                    >
                      Blog
                    </Link>
                    <Link
                      href="#docs"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2F2F2F]"
                      role="menuitem"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="#tutorials"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2F2F2F]"
                      role="menuitem"
                    >
                      Tutorials
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-[#FF7A00]"
              >
                Sign In
              </Button>
              <Button className="bg-[#FF7A00] text-white hover:bg-[#FF7A00]/90">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="mb-12 rounded-lg border border-[#1F1F1F] bg-[#1F1F1F] p-4">
          <h3 className="text-lg font-semibold">
            Introducing: AI-Powered Learning
          </h3>
          <p className="text-gray-400">
            Supercharge your learning with our Socratic method AI tutor
          </p>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
          Supercharge Your Learning
          <br />
          with AI-Guided Education
        </h1>
        <p className="mb-8 text-xl text-[#FF7A00]">
          Learn anything faster and more effectively with our open-source AI
          tutor using the Socratic method
        </p>
        <Button className="mb-16 bg-white px-8 py-6 text-lg text-[#0A0A0A] hover:bg-gray-100">
          Start Learning Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Brain className="h-12 w-12 text-[#FF7A00]" />}
            title="AI-Powered Dialogues"
            description="Engage in Socratic conversations to deepen your understanding of any subject."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-[#FF7A00]" />}
            title="Accelerated Learning"
            description="Learn faster with personalized AI feedback and adaptive learning paths."
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12 text-[#FF7A00]" />}
            title="Diverse Subjects"
            description="From coding to history, science to arts - expand your knowledge in any field."
          />
        </div>

        <div className="mt-24">
          <h3 className="mb-12 text-center text-3xl font-semibold">
            What Our Learners Are Saying
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <TestimonialCard
              quote="LearnAI has revolutionized my study habits. The AI tutor's ability to break down complex topics and guide me through problems step-by-step has significantly improved my understanding and retention."
              author="Emily Chen"
              role="Computer Science Student"
            />
            <TestimonialCard
              quote="As a teacher, I've seen a remarkable improvement in my students' engagement and comprehension since incorporating LearnAI into our curriculum. It's like having a personal tutor for each student."
              author="Dr. Michael Thompson"
              role="High School Physics Teacher"
            />
          </div>
        </div>
      </main>

      <footer className="container mx-auto mt-16 px-4 py-8 text-center text-gray-400">
        <p>&copy; 2024 LearnAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#1F1F1F] p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="rounded-lg bg-[#1F1F1F] p-6 text-white">
      <p className="mb-4 text-lg">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-[#FF7A00]">{role}</p>
      </div>
    </div>
  );
}
