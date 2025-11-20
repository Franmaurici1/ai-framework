import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, FileText, Palette, Code2, Sparkles, Clock, Zap, CheckCircle2, Database, Layers, Shield, Workflow, Rocket } from 'lucide-react';

const buildStages = [
  {
    number: 1,
    title: 'Research & Discovery',
    description: 'Used GPT 4.5 / Claude Sonnet 4.5 (deep research mode) to investigate UATP using only publicly available information',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: 2,
    title: 'Needs Analysis',
    description: 'Narrowed down key business requirements and identified potential pain points UATP might face',
    icon: Target,
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: 3,
    title: 'Framework Planning',
    description: 'Used GPT 4.5 to create a comprehensive AI adoption framework, combining industry expertise with AI-powered tool research',
    icon: FileText,
    color: 'from-pink-500 to-pink-600',
  },
  {
    number: 4,
    title: 'Design Documentation',
    description: 'Generated detailed site documentation with GPT 4.5, then created a structured design prompt for implementation',
    icon: Palette,
    color: 'from-orange-500 to-orange-600',
  },
  {
    number: 5,
    title: 'Development Sprint',
    description: 'Built the entire site using Claude Code (Claude Sonnet 4.5) and Cursor, leveraging AI-assisted development',
    icon: Code2,
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: 6,
    title: 'Polish & Refinement',
    description: 'Applied final touches through a combination of manual adjustments and AI-powered optimizations',
    icon: Sparkles,
    color: 'from-green-500 to-green-600',
  },
];

const technologies = [
  { name: 'React 18', description: 'Modern UI library' },
  { name: 'TypeScript', description: 'Type-safe development' },
  { name: 'Tailwind CSS', description: 'Utility-first styling' },
  { name: 'Framer Motion', description: 'Smooth animations' },
  { name: 'Vite', description: 'Lightning-fast builds' },
  { name: 'shadcn/ui', description: 'Beautiful components' },
];

const technicalExcellence = [
  {
    icon: Rocket,
    title: 'Production-Ready Architecture',
    description: 'Built with scalable component architecture following React best practices, ensuring maintainability and long-term growth.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Backend Agnostic Design',
    description: 'Modular architecture ready to integrate with any backend—REST APIs, GraphQL, Firebase, Supabase, or custom solutions.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Layers,
    title: 'Component-Driven Development',
    description: 'Reusable, composable components with clear separation of concerns, making updates and feature additions seamless.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Type-Safe Codebase',
    description: 'Full TypeScript implementation with strict type checking, catching errors at compile-time and improving developer experience.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Workflow,
    title: 'Optimized Performance',
    description: 'Code splitting, lazy loading, and optimized bundle sizes ensure fast load times and excellent user experience.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: CheckCircle2,
    title: 'Industry Best Practices',
    description: 'Follows SOLID principles, accessibility standards (WCAG), and modern web development patterns throughout.',
    color: 'from-green-500 to-green-600',
  },
];

const aiDrivenBenefits = [
  {
    title: 'Consistent Code Quality',
    description: 'AI-assisted development ensures consistent coding patterns, naming conventions, and architectural decisions across the entire codebase.',
  },
  {
    title: 'Comprehensive Documentation',
    description: 'Every component and function is well-structured with clear, self-documenting code that makes maintenance straightforward.',
  },
  {
    title: 'Rapid Iteration Cycles',
    description: 'AI enables quick prototyping and refinement, allowing for multiple design iterations in the time it would take to build one manually.',
  },
  {
    title: 'Best-in-Class Patterns',
    description: 'Leverages proven design patterns and modern frameworks, incorporating industry knowledge from thousands of successful projects.',
  },
];

export function BuildWithAI() {
  return (
    <section id="built-with-ai" className="py-24 bg-gradient-to-br from-gray-900 via-uatp-navy to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTAgMjBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTIwIDRjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-uatp-teal to-uatp-green rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Development</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built in 3 Hours with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This entire website—from research to deployment—was created in just 3 hours using cutting-edge AI tools. Here's how artificial intelligence transformed weeks of work into hours.
          </p>
        </motion.div>

        {/* Time Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gradient-to-r from-uatp-teal to-uatp-green p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center space-x-4">
              <Clock className="w-12 h-12 text-white" />
              <div>
                <div className="text-5xl font-bold text-white">3 Hours</div>
                <div className="text-sm text-white/80">From Concept to Completion</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Build Stages Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            The Development Journey
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-1">Stage {stage.number}</div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            {stage.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {stage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Technologies Powering This Site
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Excellence Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise-Grade Technical Excellence
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with scalability, flexibility, and maintainability at its core—ready to grow with your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {technicalExcellence.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all hover:border-uatp-teal/50">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* AI-Driven Development Benefits */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Sparkles className="w-10 h-10 text-uatp-teal mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Why AI-Driven Development Delivers Superior Results
                </h4>
                <p className="text-gray-200">
                  Beyond speed—AI brings consistency, quality, and expertise to every line of code
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiDrivenBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-uatp-teal/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-uatp-teal" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {benefit.title}
                      </h5>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scalability Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-uatp-navy to-gray-900 border-white/20 backdrop-blur-lg overflow-hidden">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Database className="w-12 h-12 text-uatp-teal mx-auto mb-4" />
                  <h5 className="text-xl font-bold text-white mb-2">
                    Infinite Scalability
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Designed to handle growth from dozens to millions of users with minimal architectural changes
                  </p>
                </div>
                <div>
                  <Layers className="w-12 h-12 text-uatp-teal mx-auto mb-4" />
                  <h5 className="text-xl font-bold text-white mb-2">
                    Multi-Backend Ready
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Plug into REST, GraphQL, WebSockets, or any data source—architecture adapts to your needs
                  </p>
                </div>
                <div>
                  <Workflow className="w-12 h-12 text-uatp-teal mx-auto mb-4" />
                  <h5 className="text-xl font-bold text-white mb-2">
                    CI/CD Integration
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Built for modern DevOps workflows with automated testing, deployment, and monitoring capabilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-white/10 border-uatp-teal/50 backdrop-blur-lg max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <Sparkles className="w-12 h-12 text-uatp-teal mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-4">
                The Future of Development is Here
              </h4>
              <p className="text-white text-lg leading-relaxed mb-4">
                What traditionally would take weeks of planning, design, and development was accomplished in just 3 hours by leveraging AI as a collaborative partner. This is not just a demo—it's proof that AI can accelerate your team's productivity while maintaining quality and precision.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every aspect—from component architecture to styling choices—reflects industry best practices and enterprise-grade standards. The result is a scalable, maintainable, and production-ready application that demonstrates the transformative power of AI-assisted development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
