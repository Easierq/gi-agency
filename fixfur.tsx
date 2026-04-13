// ============================================
// PART 1: UPDATED PRISMA SCHEMA
// ============================================
// Add these two new models to your schema.prisma

/*
// ============================================
// VIBE CODING PROJECTS
// ============================================

model VibeCodingProject {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  description String   @db.Text
  
  image       String
  images      String[]        @default([])
  badge       String?
  popular     Boolean         @default(false)
  featured    Boolean         @default(false)
  
  clientName     String?
  completionDate DateTime?
  projectUrl     String?       // Live demo URL
  githubUrl      String?       // Repository URL
  videoUrl       String?       // Demo video
  
  // Vibe Coding Specific
  aiTools        String[]      // ["Cursor", "v0", "Claude", "GitHub Copilot", "Bolt.new"]
  techStack      String[]      // Technologies used
  complexity     String        // "Simple", "Moderate", "Complex"
  buildTime      String?       // "2 hours", "1 day", etc.
  linesOfCode    Int?          // Approximate lines generated
  features       String[]      // What was built
  challenges     String?       @db.Text // Challenges faced during AI coding
  
  category       String        @default("Vibe Coding")
  categorySlug   String        @default("vibe-coding")
  
  status      ProjectStatus   @default(PUBLISHED)
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt
  
  @@index([slug])
  @@index([categorySlug])
  @@index([featured])
  @@index([popular])
  @@index([status])
}

// ============================================
// AI AGENT BUILDING PROJECTS
// ============================================

model AIAgentBuildingProject {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  description String   @db.Text
  
  image       String
  images      String[]        @default([])
  badge       String?
  popular     Boolean         @default(false)
  featured    Boolean         @default(false)
  
  clientName     String?
  completionDate DateTime?
  demoUrl        String?       // Demo/playground URL
  githubUrl      String?       // Repository URL (if public)
  videoUrl       String?       // Demo video
  
  // AI Agent Specific
  aiModels       String[]      // ["GPT-4", "Claude 3.5", "Gemini Pro"]
  agentType      String        // "Chatbot", "Automation Agent", "Research Agent", "Code Agent"
  frameworks     String[]      // ["LangChain", "CrewAI", "AutoGen", "Custom"]
  integrations   String[]      // ["Slack", "Discord", "API", "Database"]
  capabilities   String[]      // What the agent can do
  techStack      String[]      // Backend technologies
  features       String[]      // Agent features
  results        String?       @db.Text // Performance metrics, ROI
  
  category       String        @default("AI Agent Building")
  categorySlug   String        @default("ai-agent-building")
  
  status      ProjectStatus   @default(PUBLISHED)
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt
  
  @@index([slug])
  @@index([categorySlug])
  @@index([featured])
  @@index([popular])
  @@index([status])
}
*/

// ============================================
// PART 2: UPDATED TYPES
// ============================================
// types/api.ts - Add to existing ServiceCategory type

export type ServiceCategory =
  | "web-development"
  | "graphic-design"
  | "video-editing"
  | "content-creation"
  | "sales-copywriting"
  | "ai-automation"
  | "mobile-app-development"
  | "social-media-management"
  | "vibe-coding" // NEW
  | "ai-agent-building"; // NEW

// ============================================
// PART 3: VALIDATION SCHEMAS
// ============================================
// lib/validations/project.ts - Add these new schemas

import { z } from "zod";

// Vibe Coding Project Schema
export const vibeCodingProjectSchema = z.object({
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(200, "Slug must be less than 200 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase with hyphens only"
    ),

  name: z
    .string()
    .min(1, "Project name is required")
    .max(200, "Name must be less than 200 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(5000, "Description must be less than 5000 characters"),

  image: z.string().url("Must be a valid URL"),
  images: z.array(z.string().url()).optional(),
  videoUrl: z.string().url().optional().or(z.literal("")).or(z.null()),
  badge: z.string().max(50).optional(),
  popular: z.boolean().default(false),
  featured: z.boolean().default(false),

  clientName: z.string().max(200).optional(),
  completionDate: z.string().optional(),
  projectUrl: z.string().url().optional().or(z.literal("")).or(z.null()),
  githubUrl: z.string().url().optional().or(z.literal("")).or(z.null()),

  aiTools: z
    .array(z.string())
    .min(1, "At least one AI tool is required")
    .max(15, "Maximum 15 AI tools allowed"),

  techStack: z
    .array(z.string())
    .min(1, "At least one technology is required")
    .max(20, "Maximum 20 technologies allowed"),

  complexity: z
    .string()
    .min(1, "Complexity level is required")
    .max(50, "Complexity must be less than 50 characters"),

  buildTime: z.string().max(50).optional(),
  linesOfCode: z.number().int().positive().max(1000000).optional(),

  features: z
    .array(z.string())
    .min(1, "At least one feature is required")
    .max(30, "Maximum 30 features allowed"),

  challenges: z.string().max(2000).optional(),

  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
});

export type VibeCodingProjectFormData = z.infer<typeof vibeCodingProjectSchema>;

// AI Agent Building Project Schema
export const aiAgentBuildingProjectSchema = z.object({
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(200, "Slug must be less than 200 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase with hyphens only"
    ),

  name: z
    .string()
    .min(1, "Project name is required")
    .max(200, "Name must be less than 200 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(5000, "Description must be less than 5000 characters"),

  image: z.string().url("Must be a valid URL"),
  images: z.array(z.string().url()).optional(),
  videoUrl: z.string().url().optional().or(z.literal("")).or(z.null()),
  badge: z.string().max(50).optional(),
  popular: z.boolean().default(false),
  featured: z.boolean().default(false),

  clientName: z.string().max(200).optional(),
  completionDate: z.string().optional(),
  demoUrl: z.string().url().optional().or(z.literal("")).or(z.null()),
  githubUrl: z.string().url().optional().or(z.literal("")).or(z.null()),

  aiModels: z
    .array(z.string())
    .min(1, "At least one AI model is required")
    .max(10, "Maximum 10 AI models allowed"),

  agentType: z
    .string()
    .min(1, "Agent type is required")
    .max(100, "Agent type must be less than 100 characters"),

  frameworks: z
    .array(z.string())
    .min(1, "At least one framework is required")
    .max(10, "Maximum 10 frameworks allowed"),

  integrations: z
    .array(z.string())
    .max(20, "Maximum 20 integrations allowed")
    .optional(),

  capabilities: z
    .array(z.string())
    .min(1, "At least one capability is required")
    .max(20, "Maximum 20 capabilities allowed"),

  techStack: z
    .array(z.string())
    .max(20, "Maximum 20 technologies allowed")
    .optional(),

  features: z
    .array(z.string())
    .min(1, "At least one feature is required")
    .max(30, "Maximum 30 features allowed"),

  results: z.string().max(2000).optional(),

  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
});

export type AIAgentBuildingProjectFormData = z.infer<
  typeof aiAgentBuildingProjectSchema
>;

// Update the helper function to include new categories
export function getProjectSchema(category: string) {
  switch (category) {
    case "web-development":
      return webDevelopmentProjectSchema;
    case "graphic-design":
      return graphicDesignProjectSchema;
    case "video-editing":
      return videoEditingProjectSchema;
    case "content-creation":
      return contentCreationProjectSchema;
    case "sales-copywriting":
      return salesCopywritingProjectSchema;
    case "social-media-management":
      return socialMediaProjectSchema;
    case "ai-automation":
      return aiAutomationProjectSchema;
    case "mobile-app-development":
      return mobileAppProjectSchema;
    case "vibe-coding":
      return vibeCodingProjectSchema;
    case "ai-agent-building":
      return aiAgentBuildingProjectSchema;
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}

// ============================================
// PART 4: FORM FIELD COMPONENTS
// ============================================
// Add these to components/admin/ProjectForm.tsx

// Update ServiceSpecificFields function to include new cases
function ServiceSpecificFields({
  category,
  form,
}: {
  category: string;
  form: any;
}) {
  switch (category) {
    case "web-development":
      return <WebDevelopmentFields form={form} />;
    case "graphic-design":
      return <GraphicDesignFields form={form} />;
    case "video-editing":
      return <VideoEditingFields form={form} />;
    case "content-creation":
      return <ContentCreationFields form={form} />;
    case "sales-copywriting":
      return <SalesCopywritingFields form={form} />;
    case "social-media-management":
      return <SocialMediaFields form={form} />;
    case "ai-automation":
      return <AiAutomationFields form={form} />;
    case "mobile-app-development":
      return <MobileAppFields form={form} />;
    case "vibe-coding":
      return <VibeCodingFields form={form} />;
    case "ai-agent-building":
      return <AIAgentBuildingFields form={form} />;
    default:
      return null;
  }
}

// Vibe Coding Fields Component
function VibeCodingFields({ form }: { form: any }) {
  return (
    <div className="bg-white rounded-lg border p-6 space-y-6">
      <h2 className="text-2xl font-bold">Vibe Coding Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="projectUrl"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Live Project URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://example.com" />
              </FormControl>
              <FormDescription>
                Live demo or deployed application
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://github.com/..." />
              </FormControl>
              <FormDescription>Repository URL (if public)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://youtube.com/..." />
              </FormControl>
              <FormDescription>Demo video URL</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="complexity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Complexity Level *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Simple, Moderate, Complex" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="buildTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Build Time</FormLabel>
              <FormControl>
                <Input {...field} placeholder="2 hours, 1 day, 3 days, etc." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linesOfCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lines of Code (Approximate)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="1000"
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="aiTools"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="AI Tools Used *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Cursor, v0, Claude, GitHub Copilot, Bolt.new, etc."
              description="AI tools and platforms used for code generation"
              error={form.formState.errors.aiTools?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="techStack"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Tech Stack *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Next.js, React, TypeScript, Tailwind, etc."
              description="Technologies and frameworks used"
              error={form.formState.errors.techStack?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="features"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Features *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Authentication, Real-time updates, API integration, etc."
              description="Key features built with AI assistance"
              error={form.formState.errors.features?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="challenges"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Challenges & Solutions</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="What challenges did you face during AI-assisted coding and how did you solve them?"
                rows={4}
              />
            </FormControl>
            <FormDescription>
              Document challenges faced and how you overcame them
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// AI Agent Building Fields Component
function AIAgentBuildingFields({ form }: { form: any }) {
  return (
    <div className="bg-white rounded-lg border p-6 space-y-6">
      <h2 className="text-2xl font-bold">AI Agent Building Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="demoUrl"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Demo/Playground URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://example.com/demo" />
              </FormControl>
              <FormDescription>Live demo or playground link</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://github.com/..." />
              </FormControl>
              <FormDescription>Repository URL (if public)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://youtube.com/..." />
              </FormControl>
              <FormDescription>Demo video URL</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agentType"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Agent Type *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Chatbot, Automation Agent, Research Agent, Code Agent, etc."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="aiModels"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="AI Models *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="GPT-4, Claude 3.5 Sonnet, Gemini Pro, etc."
              description="AI models powering the agent"
              error={form.formState.errors.aiModels?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="frameworks"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Frameworks *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="LangChain, CrewAI, AutoGen, Custom Framework, etc."
              description="Agent frameworks and libraries used"
              error={form.formState.errors.frameworks?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="integrations"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Integrations"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Slack, Discord, Telegram, API, Database, etc."
              description="Third-party integrations and platforms"
              error={form.formState.errors.integrations?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="capabilities"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Agent Capabilities *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Answer questions, Automate tasks, Research, Generate code, etc."
              description="What the agent can do"
              error={form.formState.errors.capabilities?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="techStack"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Tech Stack"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Python, Node.js, FastAPI, Vector DB, etc."
              description="Backend technologies used"
              error={form.formState.errors.techStack?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="features"
        render={({ field }) => (
          <FormItem>
            <ArrayInput
              label="Features *"
              value={field.value || []}
              onChange={field.onChange}
              placeholder="Context awareness, Memory, Multi-step reasoning, etc."
              description="Agent features and capabilities"
              error={form.formState.errors.features?.message}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="results"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Results & Performance</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Performance metrics, ROI, user satisfaction, time saved, etc."
                rows={4}
              />
            </FormControl>
            <FormDescription>
              Measurable results and impact of the AI agent
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// ============================================
// PART 5: API ROUTES
// ============================================
// You'll need to create these API routes following your existing pattern

/*
app/api/services/vibe-coding/route.ts
app/api/services/vibe-coding/[slug]/route.ts
app/api/services/ai-agent-building/route.ts
app/api/services/ai-agent-building/[slug]/route.ts

Use the same structure as your existing service API routes.
The model names in Prisma will be:
- prisma.vibeCodingProject
- prisma.aIAgentBuildingProject
*/

// ============================================
// PART 6: SERVICE CATEGORY PAGES
// ============================================
// app/services/vibe-coding/page.tsx

("use client");
import React, { useState } from "react";
import { Search, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VibeCodingGallery from "@/components/service-category/VibeCodingGallery";

export default function VibeCodingPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/95 via-pink-600/90 to-orange-500/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold text-white">
                Vibe Coding Portfolio
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              AI-Powered Development
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Building software at lightning speed with AI code generation
            </p>

            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search vibe coding projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              Browse our AI-powered development portfolio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Project Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <main>
          <VibeCodingGallery
            searchQuery={searchQuery}
            sortBy={sortBy}
            categorySlug="vibe-coding"
          />
        </main>
      </div>
    </div>
  );
}

// app/services/ai-agent-building/page.tsx

("use client");
import React, { useState } from "react";
import { Search, Bot } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AIAgentBuildingGallery from "@/components/service-category/AIAgentBuildingGallery";

export default function AIAgentBuildingPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/95 via-purple-600/90 to-pink-500/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Bot className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold text-white">
                AI Agent Building Portfolio
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Custom AI Agents
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Building intelligent agents that automate, assist, and innovate
            </p>

            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search AI agent projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Browse our AI agent portfolio</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Project Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <main>
          <AIAgentBuildingGallery
            searchQuery={searchQuery}
            sortBy={sortBy}
            categorySlug="ai-agent-building"
          />
        </main>
      </div>
    </div>
  );
}

// ============================================
// NOTE: Gallery components (VibeCodingGallery and AIAgentBuildingGallery)
// should be created following your existing WebDevGallery pattern.
// They will be identical except for:
// 1. API endpoint calls
// 2. Category-specific colors (purple for vibe-coding, indigo for ai-agent-building)
// 3. Field names displayed in cards
// ============================================
