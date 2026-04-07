import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  MessageSquare,
  BarChart3,
  Mic,
  ExternalLink,
  Clock,
  Palette,
  Shield,
  Zap,
  Users,
  Building2,
  TrendingUp,
  Layers
} from 'lucide-react';

const keyFeatures = [
  {
    icon: MessageSquare,
    title: 'Natural Language Questions',
    description: 'Simply ask, get results. Transform everyday language into structured data answers.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Interactive Tables & Charts',
    description: 'Bring analytics directly into Slack where your team works.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Mic,
    title: 'Real-time Voice Answers',
    description: '"Hey DistillGenie…" and get data answers while you\'re in Google Meet.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: ExternalLink,
    title: 'Detailed Insights Interface',
    description: 'Dedicated web interface for deeper exploration beyond quick answers.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    title: 'Scheduled Reports',
    description: 'Automatically deliver periodic updates via Slack commands.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Palette,
    title: 'Customizable Formats',
    description: 'Tailor how results are visualized and delivered to your needs.',
    color: 'from-pink-500 to-pink-600',
  },
];

const whyFeatures = [
  {
    title: 'Ask in everyday language',
    description: 'DistillGenie translates your query into smart data logic.',
  },
  {
    title: 'Get governed, trusted answers',
    description: 'Delivered back to your team – whether typing in Slack or speaking in Google Meet.',
  },
  {
    title: 'Scale with confidence',
    description: 'Built to work with your stack, your data, your workflow.',
  },
];

const useCases = [
  {
    icon: Users,
    title: 'Executive & Business Teams',
    description: 'Real-time access to key metrics without waiting for BI.',
  },
  {
    icon: Building2,
    title: 'Data & Analytics Teams',
    description: 'Empower the broader organization without increasing support burden.',
  },
  {
    icon: TrendingUp,
    title: 'Modern Analytics Organizations',
    description: 'Move toward semantic layers and self-service architectures.',
  },
  {
    icon: Layers,
    title: 'Collaboration-First Teams',
    description: 'Drive analytics into the flow of work via Slack and Google Meet.',
  },
];

export function DistillGeniePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0E12] pt-20">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#FBFCFF 1px, transparent 1px), linear-gradient(90deg, #FBFCFF 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <img
                  src="/distillgenie-logo-horizontal.png"
                  alt="DistillGenie Logo"
                  className="h-12 w-auto"
                />
                <p className="text-lg text-gray-200 mt-3">
                  Powered by AtScale MCP
                </p>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your data.
                <br />
                <span className="text-[#EBD698]">One conversation away.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed">
                DistillGenie makes enterprise data truly self-service. No dashboards. No code. No friction.
                Now available across Slack and Google Meet.
              </p>
            </motion.div>

            {/* Right Column: Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden shadow-2xl p-4">
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://app.supademo.com/embed/cmfd6073i01rty00itbz1ze2f?embed_v=2&utm_source=embed"
                      loading="lazy"
                      title="DistillGenie by Distillery"
                      allow="clipboard-write"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                    />
                  </div>
                </Card>

                {/* AI Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-6"
                >
                  <div className="w-full px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-center">
                    <p
                      className="text-[#FBFCFF] text-xl font-semibold font-inter"
                    >
                      👆 ✨ This demo was done with AI too!
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border border-[#404044] rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-[#88898C] rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why DistillGenie Section */}
      <section className="py-20 bg-[#EEEFF2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
              Why DistillGenie?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Forget the BI backlog, the cumbersome dashboards, the need to write SQL.
              With DistillGenie:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-gray-50 to-white border border-[#D8D8DB] hover:border-[#010205] hover:shadow-none transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-[4px] bg-[#010205] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-[#010205] font-barlow uppercase tracking-wide">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-11">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/distillgenie-hero.png"
              alt="DistillGenie + AtScale Integration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
              Key Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-[8px] bg-[#010205] flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#010205] font-barlow uppercase tracking-wide mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineered for Scale Section */}
      <section className="py-20 bg-[#0E0E12] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineered for Scale. Designed for Simplicity.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 h-full bg-[#212225] border border-[#404044] shadow-none rounded-[12px]">
                <Shield className="w-12 h-12 text-[#EBD698] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Secure & Auditable</h3>
                <p className="text-gray-200">
                  Future-proof architecture built with security and compliance at its core.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-[#212225] border border-[#404044] shadow-none rounded-[12px]">
                <Zap className="w-12 h-12 text-[#EBD698] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Works on Your Stack</h3>
                <p className="text-gray-200">
                  Integrates with any LLM (OpenAI, Anthropic, Gemini…), any channel (Slack, Google Meet, Teams, Zoom…) and any data layer.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-[#212225] border border-[#404044] shadow-none rounded-[12px]">
                <Layers className="w-12 h-12 text-[#EBD698] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Modern Architecture</h3>
                <p className="text-gray-200">
                  Built with FastAPI backend on AWS Lambda, LangGraph/LangChain translation, AtScale MCP as semantic layer engine.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Mockup Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
              Seamless Integration Across Platforms
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <img
                src="/distillgenie-mockup.png"
                alt="DistillGenie Platform Integration"
                className="w-full h-auto"
              />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
              Who It's For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[8px] bg-[#010205] flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#010205] font-barlow uppercase tracking-wide mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Stack Section */}
      <section className="py-20 bg-[#0E0E12] relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#FBFCFF 1px, transparent 1px), linear-gradient(90deg, #FBFCFF 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative z-10"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-[#212225] border border-[#404044] rounded-[12px] p-12 text-white text-center shadow-none">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Stack. Your Workflow.
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Built your way. DistillGenie runs on Slack and Google Meet out of the box,
                and is flexible to extend to Microsoft Teams, Zoom, or integrate with Snowflake Cortex
                or any other data stack.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-[#292934] rounded-[4px] text-sm font-medium border border-[#404044]">
                  Slack
                </span>
                <span className="px-4 py-2 bg-[#292934] rounded-[4px] text-sm font-medium border border-[#404044]">
                  Google Meet
                </span>
                <span className="px-4 py-2 bg-[#292934] rounded-[4px] text-sm font-medium border border-[#404044]">
                  Microsoft Teams
                </span>
                <span className="px-4 py-2 bg-[#292934] rounded-[4px] text-sm font-medium border border-[#404044]">
                  Zoom
                </span>
                <span className="px-4 py-2 bg-[#292934] rounded-[4px] text-sm font-medium border border-[#404044]">
                  Snowflake Cortex
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
