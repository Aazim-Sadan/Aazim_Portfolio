export const projectsData = [
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
    demoUrl: "https://ace-mock-ai-qm5y.vercel.app/",
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
    title: "WorkHive",
    description:
      "Job portal app, allowing candidates to apply for jobs, save listings, and recruiters to manage job postings.",
    image: "/Horkhive.webp",
    tags: ["React.js","Node.js","Express.js", "MongoDB", "Redux-Toolkit", "Tailwind", "Shadcn"],
    demoUrl: "https://job-portal-mern-z2za.onrender.com",
    githubUrl: "",
    features: [
      "Employed JWTs for authentication, securing user sessions and protecting sensitive data",
      "Secure backend APIs with NodeJs and ExpressJs, handling user authentication, job management, and role-based access",
      "JWTs for authentication, securing user sessions and protecting sensitive data",
      "Cloudinary for efficient and scalable media storage and management",
    ]
  }
]