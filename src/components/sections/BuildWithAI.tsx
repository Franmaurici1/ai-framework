import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, FileText, Palette, Code2, Sparkles, Clock, Zap, CheckCircle2, Database, Layers, Shield, Workflow, Rocket } from 'lucide-react';

const buildStages = [
  {
    number: 1,
    title: 'Research & Discovery',
    description: 'Used GPT 4.5 / Claude Sonnet 4.5 (deep research mode) to investigate using only publicly available information',
    icon: Search,
  },
  {
    number: 2,
    title: 'Needs Analysis',
    description: 'Narrowed down key business requirements and identified potential pain points that might be faced',
    icon: Target,
  },
  {
    number: 3,
    title: 'Framework Planning',
    description: 'Used GPT 4.5 to create a comprehensive AI adoption framework, combining industry expertise with AI-powered tool research',
    icon: FileText,
  },
  {
    number: 4,
    title: 'Design Documentation',
    description: 'Generated detailed site documentation with GPT 4.5, then created a structured design prompt for implementation',
    icon: Palette,
  },
  {
    number: 5,
    title: 'Development Sprint',
    description: 'Built the entire site using Claude Code (Claude Sonnet 4.5) and Cursor, leveraging AI-assisted development',
    icon: Code2,
  },
  {
    number: 6,
    title: 'Polish & Refinement',
    description: 'Applied final touches through a combination of manual adjustments and AI-powered optimizations',
    icon: Sparkles,
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
  },
  {
    icon: Database,
    title: 'Backend Agnostic Design',
    description: 'Modular architecture ready to integrate with any backend—REST APIs, GraphQL, Firebase, Supabase, or custom solutions.',
  },
  {
    icon: Layers,
    title: 'Component-Driven Development',
    description: 'Reusable, composable components with clear separation of concerns, making updates and feature additions seamless.',
  },
  {
    icon: Shield,
    title: 'Type-Safe Codebase',
    description: 'Full TypeScript implementation with strict type checking, catching errors at compile-time and improving developer experience.',
  },
  {
    icon: Workflow,
    title: 'Optimized Performance',
    description: 'Code splitting, lazy loading, and optimized bundle sizes ensure fast load times and excellent user experience.',
  },
  {
    icon: CheckCircle2,
    title: 'Industry Best Practices',
    description: 'Follows SOLID principles, accessibility standards (WCAG), and modern web development patterns throughout.',
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
    <section id="built-with-ai" className="pt-32 pb-24 bg-[#0E0E12] text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#FBFCFF 1px, transparent 1px), linear-gradient(90deg, #FBFCFF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#404044] text-[#AFB0B3] rounded-[4px] text-xs font-semibold mb-6 tracking-widest uppercase">
            <Zap className="w-3 h-3" />
            <span>AI-Powered Development</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-barlow uppercase tracking-wide text-[#FBFCFF]">
            Built in 4 Hours with AI
          </h2>
          <p className="text-lg text-[#AFB0B3] max-w-3xl mx-auto">
            This entire website—from research to deployment—was created in just 4 hours using cutting-edge AI tools. Here's how artificial intelligence transformed weeks of work into hours.
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
          <div className="bg-[#212225] border border-[#EBD698]/30 p-8 rounded-[8px]">
            <div className="flex items-center space-x-4">
              <Clock className="w-10 h-10 text-[#EBD698]" />
              <div>
                <div className="text-5xl font-bold text-[#FBFCFF] font-barlow">4 Hours</div>
                <div className="text-xs text-[#88898C] uppercase tracking-widest mt-1">From Concept to Completion</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Build Stages */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 font-barlow uppercase tracking-wide text-[#FBFCFF]"
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
                >
                  <Card className="h-full bg-[#212225] border border-[#404044] rounded-[12px] shadow-none hover:border-[#88898C] transition-colors duration-250">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-[#292934] border border-[#404044] rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#EBD698]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-[#88898C] mb-1 uppercase tracking-widest">Stage {stage.number}</div>
                          <h4 className="text-base font-bold text-[#FBFCFF] font-barlow uppercase tracking-wide">
                            {stage.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-[#88898C] leading-relaxed">
                        {stage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 font-barlow uppercase tracking-wide text-[#FBFCFF]">
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
              >
                <Card className="bg-[#212225] border border-[#404044] rounded-[8px] shadow-none hover:border-[#88898C] transition-colors duration-250">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-[#FBFCFF] mb-1 text-sm font-barlow uppercase tracking-wide">{tech.name}</h4>
                    <p className="text-xs text-[#88898C]">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-barlow uppercase tracking-wide text-[#FBFCFF]">
              Enterprise-Grade Technical Excellence
            </h3>
            <p className="text-lg text-[#AFB0B3] max-w-3xl mx-auto">
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
                  <Card className="h-full bg-[#212225] border border-[#404044] rounded-[12px] shadow-none hover:border-[#88898C] transition-colors duration-250">
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 bg-[#292934] border border-[#404044] rounded-[8px] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#EBD698]" />
                      </div>
                      <h4 className="text-base font-bold text-[#FBFCFF] mb-3 font-barlow uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#88898C] leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* AI-Driven Benefits */}
          <Card className="bg-[#212225] border border-[#404044] rounded-[12px] shadow-none">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Sparkles className="w-8 h-8 text-[#EBD698] mx-auto mb-3" />
                <h4 className="text-xl font-bold text-[#FBFCFF] mb-2 font-barlow uppercase tracking-wide">
                  Why AI-Driven Development Delivers Superior Results
                </h4>
                <p className="text-[#88898C] text-sm">
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
                      <div className="w-7 h-7 rounded-[4px] bg-[#EBD698]/10 border border-[#EBD698]/30 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#EBD698]" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-semibold text-[#FBFCFF] mb-1 font-barlow uppercase tracking-wide">
                        {benefit.title}
                      </h5>
                      <p className="text-sm text-[#88898C] leading-relaxed">
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
          <Card className="bg-[#212225] border border-[#404044] rounded-[12px] shadow-none overflow-hidden">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Database className="w-10 h-10 text-[#EBD698] mx-auto mb-4" />
                  <h5 className="text-lg font-bold text-[#FBFCFF] mb-2 font-barlow uppercase tracking-wide">
                    Infinite Scalability
                  </h5>
                  <p className="text-[#88898C] text-sm leading-relaxed">
                    Designed to handle growth from dozens to millions of users with minimal architectural changes
                  </p>
                </div>
                <div>
                  <Layers className="w-10 h-10 text-[#EBD698] mx-auto mb-4" />
                  <h5 className="text-lg font-bold text-[#FBFCFF] mb-2 font-barlow uppercase tracking-wide">
                    Multi-Backend Ready
                  </h5>
                  <p className="text-[#88898C] text-sm leading-relaxed">
                    Plug into REST, GraphQL, WebSockets, or any data source—architecture adapts to your needs
                  </p>
                </div>
                <div>
                  <Workflow className="w-10 h-10 text-[#EBD698] mx-auto mb-4" />
                  <h5 className="text-lg font-bold text-[#FBFCFF] mb-2 font-barlow uppercase tracking-wide">
                    CI/CD Integration
                  </h5>
                  <p className="text-[#88898C] text-sm leading-relaxed">
                    Built for modern DevOps workflows with automated testing, deployment, and monitoring capabilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why 4 Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-[#212225] border border-[#EBD698]/20 rounded-[12px] shadow-none overflow-hidden">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <Target className="w-10 h-10 text-[#EBD698] mx-auto mb-4" />
                <h3 className="text-3xl lg:text-4xl font-bold text-[#FBFCFF] mb-4 font-barlow uppercase tracking-wide">
                  Why This Site Was Built in Just 4 Hours
                </h3>
                <p className="text-lg text-[#AFB0B3] max-w-5xl mx-auto leading-relaxed mb-6">
                  The speed at which this site was created is not an accident, and it's not simply "because of AI." It is the result of hundreds of hours of prior work: testing tools, researching models, configuring workflows, building automations, refining prompts, and understanding how each AI system behaves in real production environments.
                </p>

                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-xs h-px bg-[#404044]"></div>
                </div>

                <p className="text-base text-[#88898C] max-w-4xl mx-auto leading-relaxed">
                  Over the last year I've invested significant time into understanding and mastering these critical areas:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                {[
                  'Researching the best AI tools for each type of work, understanding their strengths, limitations, and hidden capabilities',
                  'Configuring environments like Cursor, Claude Code, OpenAI Assistants, and Slack bots for optimal performance',
                  'Building reusable templates, automations, and internal design systems that accelerate every new project',
                  'Learning how to integrate AI effectively into software, product, and operational workflows',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EBD698] flex-shrink-0 mt-0.5" />
                    <p className="text-[#AFB0B3] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-[#FBFCFF] text-center font-semibold font-barlow uppercase tracking-wide">
                  That accumulated expertise is what allows me to move at this level of velocity.
                </p>
              </div>

              <div className="bg-[#0E0E12] rounded-[8px] p-8 border border-[#404044] max-w-5xl mx-auto mb-8">
                <p className="text-base text-[#FBFCFF] leading-relaxed text-center mb-6">
                  AI can dramatically accelerate output — but not instantly.
                </p>
                <p className="text-[#88898C] text-sm leading-relaxed mb-4">
                  There is a learning curve, there are configuration steps, and real impact requires:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Knowing which tool is right for which task',
                    'Guide AI through prompts, patterns, and constraints',
                    'Building the right scaffolding and system design around the AI',
                    'Avoiding the pitfalls that slow down teams',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EBD698] flex-shrink-0 mt-2"></div>
                      <p className="text-[#88898C] text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[#AFB0B3] leading-relaxed text-center mt-6 text-sm">
                  You don't get this speed by "just plugging AI into the company." You get it through the combination of <strong className="text-[#FBFCFF]">AI + experience + the right guidance.</strong>
                </p>
              </div>

              <div className="bg-[#EBD698]/5 rounded-[8px] p-8 border border-[#EBD698]/20 max-w-5xl mx-auto">
                <p className="text-base text-[#FBFCFF] leading-relaxed mb-4">
                  <strong>This is the value Distillery brings:</strong> the ability to interpret what the business needs, choose the right tools, configure them effectively, and build systems that turn AI into a multiplier — not a distraction.
                </p>
                <p className="text-sm text-[#AFB0B3] leading-relaxed">
                  That's why this site took 4 hours instead of 40+. And that's exactly the kind of acceleration you can unlock with the right framework and expertise behind it.
                </p>
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
          <Card className="bg-[#212225] border border-[#404044] rounded-[12px] shadow-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Sparkles className="w-10 h-10 text-[#EBD698] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#FBFCFF] mb-4 font-barlow uppercase tracking-wide">
                The Future of Development is Here
              </h4>
              <p className="text-[#AFB0B3] text-base leading-relaxed mb-4">
                What traditionally would take weeks of planning, design, and development was accomplished in just 4 hours by leveraging AI as a collaborative partner. This is not just a demo—it's proof that AI can accelerate your team's productivity while maintaining quality and precision.
              </p>
              <p className="text-[#88898C] text-sm leading-relaxed">
                Every aspect—from component architecture to styling choices—reflects industry best practices and enterprise-grade standards. The result is a scalable, maintainable, and production-ready application that demonstrates the transformative power of AI-assisted development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
