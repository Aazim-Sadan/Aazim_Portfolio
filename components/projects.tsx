"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SummAIze",
    description:
      "summaize enabled users to upload PDFs and receive accurate AI-generated summaries using OpenAI, Gemini, and Langchain, boosting productivity and reducing reading time.",
    image: "/summaize.webp",
    tags: ["Next.js", "PostgreSql", "Gemini AI", "OpenAI", "Langchain", "Stripe", "Shadcn", "Motion"],
    demoUrl: "https://summ-ai-ze.vercel.app/",
    githubUrl: "",
    features: [
      "Integrated OpenAI and Gemini with fallback logic, accurate summaries even if one model fails",
      "Langchain to parse multi-page PDFs and generate summaries using prompt chains with memory",
      "Built a secure payment flow with Stripe for Basic and Pro subscriptions"
    ],
  },
  {
    title: "Chat App",
    description:
      "Built the entire real-time chat functionality, integrating Socket.io for instant messaging and Firebase for presence tracking.",
    image: "/chatapp.webp",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Firebase", "Redux-Toolkit"],
    demoUrl: "https://chat-app-lilac-psi-15.vercel.app/Auth",
    githubUrl: "",
    features: [
      "Enabled one-on-one and group messaging with live updates using Socket.io",
      "Supported images, videos, PDFs, and contact sharing; included message scheduling functionality",
      "Extensively used aggregation pipelines for querying, message threading, and group-level analytics",
      "User theme switching and message deletion for a personalized chat experience",
    ],
  },
  {
    title: "AceMock_AI",
    description:
      "An mock interview platform that leverages Gemini AI to enhance your interview preparation with intelligent feedback and real-time interaction",
    image: "/AceMockAI.webp",
    tags: ["React.js", "Gemini AI", "Firebase"],
    demoUrl: "https://acemock-ai-react.web.app",
    githubUrl: "",
    features: [
      "Realistic AI-driven interview questions",
      "Text-to-Speech Analysis for feedback on user responses",
      "Rating overall performace",
      "A record of original response",
      "Feedback on your responses, offering constructive criticism and tips for enhancement.",
    ],
  },
  {
    title: "Humanity Care Foundation",
    description:
      "A modern website for a charitable organization, highlighting their mission, donation options, and community impact with a smooth UI/UX experience.",
    image: "/humanitycarefoundation.webp",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma", "Nodemailer"],
    demoUrl: "https://www.humanitycarefoundation.in/",
    githubUrl: "",
    features: [
      "Animated homepage using Framer Motion for engaging transitions",
      "Clean and responsive design built with Tailwind CSS",
      "Contact form with Nodemailer for email handling",
      "Sections like About, Mission, Services, Gallery, and Contact",
      "Designed in Figma and implemented using Next.js for fast performance",
    ]
  },
  {
    title: "Exceed Robotics",
    description:
      "Program enrollment camps and blog pages for Exceed Robotics, focusing on intuitive user experience.",
    image: "/exceedrobotics.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    demoUrl: "https://exceedrobotics.com/",
    githubUrl: "",
    features: [
      "Responsive program enrollment pages",
      "Interactive blog section",
      "Optimized for speed and accessibility",
      "Cross-browser compatible design",
      "Collaborative development with team members",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}