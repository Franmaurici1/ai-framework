import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  MessageSquare,
  Code,
  Brain,
  FileText,
  Terminal,
  Users,
  Briefcase,
  Shield,
  Zap,
  Sparkles,
  Mail,
  Video,
  Palette,
  Image,
  ExternalLink
} from 'lucide-react';

interface Department {
  name: string;
  color: string;
}

interface AITool {
  name: string;
  logoUrl: string;
  description: string;
  bestUsedFor: string;
  departments: Department[];
  enterprisePrice: string;
  features: string[];
  icon: React.ComponentType<any>;
  gradient: string;
  pricingUrl: string;
}

// Featured tools (larger display)
const featuredTools: AITool[] = [
  {
    name: 'ChatGPT Enterprise',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    description: 'OpenAI\'s enterprise-grade conversational AI platform with enhanced security, privacy controls, and dedicated workspace for organizations.',
    bestUsedFor: 'General-purpose reasoning, content creation, writing assistance, summarization, and cross-departmental AI assistance. Strong relevance for many departments at UATP.',
    departments: [
      { name: 'Marketing', color: 'bg-purple-100 text-purple-700' },
      { name: 'Development', color: 'bg-blue-100 text-blue-700' },
      { name: 'Customer Support', color: 'bg-green-100 text-green-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Sales', color: 'bg-pink-100 text-pink-700' },
      { name: 'Operations', color: 'bg-teal-100 text-teal-700' },
    ],
    enterprisePrice: '~$25-$30/user/month',
    features: [
      'Team tier starts at ~$25-$30/user/month',
      'Enterprise pricing is custom ($30+)',
      'Enhanced privacy & data controls',
      'Dedicated workspace & admin console',
      'SSO & domain verification',
    ],
    icon: MessageSquare,
    gradient: 'from-emerald-500 to-teal-600',
    pricingUrl: 'https://chatgpt.com/pricing/',
  },
  {
    name: 'Claude Code',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Claude_AI_logo.svg',
    description: 'Specialized AI coding assistant bundled with Claude Premium (It includes Claude!), tailored for development teams with advanced code generation and architecture capabilities.',
    bestUsedFor: 'Code generation, refactoring, architecture design, technical documentation, and development workflow automation. Very relevant for UATP\'s engineering teams.',
    departments: [
      { name: 'Engineering', color: 'bg-indigo-100 text-indigo-700' },
      { name: 'Development', color: 'bg-blue-100 text-blue-700' },
      { name: 'DevOps', color: 'bg-cyan-100 text-cyan-700' },
      { name: 'Architecture', color: 'bg-slate-100 text-slate-700' },
    ],
    enterprisePrice: '~$150/user/month',
    features: [
      'Bundled with Claude Premium seats',
      'Enterprise: Custom pricing',
      'Advanced code generation & refactoring',
      'Architecture and system design assistance',
      'Codebase analysis and optimization',
    ],
    icon: Terminal,
    gradient: 'from-orange-600 to-amber-700',
    pricingUrl: 'https://www.claude.com/pricing',
  },
];

// Regular tools
const aiTools: AITool[] = [
  {
    name: 'Microsoft 365 Copilot',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'AI-powered assistant deeply integrated across Microsoft 365 apps including Outlook, Teams, Excel, Word, and PowerPoint.',
    bestUsedFor: 'Email drafting, meeting summaries, Excel data analysis, document creation, and Teams collaboration. Perfect for UATP since they use Outlook, Teams, and the Microsoft ecosystem.',
    departments: [
      { name: 'All Departments', color: 'bg-slate-100 text-slate-700' },
      { name: 'Operations', color: 'bg-teal-100 text-teal-700' },
      { name: 'Finance', color: 'bg-emerald-100 text-emerald-700' },
      { name: 'HR', color: 'bg-rose-100 text-rose-700' },
      { name: 'Executive', color: 'bg-amber-100 text-amber-700' },
    ],
    enterprisePrice: '~$30/user/month',
    features: [
      'Enterprise add-on to M365 E3/E5 plans',
      'Deep Microsoft integration across all apps',
      'Email, calendar, and meeting assistance',
      'Excel data analysis and automation',
      'Good fit for existing Microsoft users',
    ],
    icon: Mail,
    gradient: 'from-blue-600 to-blue-800',
    pricingUrl: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing',
  },
  {
    name: 'Claude',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Claude_AI_logo.svg',
    description: 'Anthropic\'s advanced AI assistant with exceptional long-document reasoning, code assistance, and internal agent capabilities.',
    bestUsedFor: 'Long-document analysis, legal review, code assistance, research synthesis, and building internal AI agents. Excellent for development and documentation analysis at UATP.',
    departments: [
      { name: 'Legal', color: 'bg-red-100 text-red-700' },
      { name: 'Development', color: 'bg-blue-100 text-blue-700' },
      { name: 'Research', color: 'bg-yellow-100 text-yellow-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Compliance', color: 'bg-violet-100 text-violet-700' },
    ],
    enterprisePrice: '~$30-$60/user/month',
    features: [
      'Team: ~$30/user/month (annual)',
      'Premium: ~$150/user/month',
      'Enterprise: Custom (~$60/user/month+)',
      '500K+ token context window',
      'Strong code and document analysis',
    ],
    icon: Brain,
    gradient: 'from-orange-500 to-red-600',
    pricingUrl: 'https://www.claude.com/pricing',
  },
  {
    name: 'Zoom AI Companion',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
    description: 'AI-powered meeting assistant that automatically summarizes meetings, generates action items, and distributes key takeaways to stakeholders.',
    bestUsedFor: 'Meeting summaries and action points. Auto-summarizing meetings, creating action items, and distributing to stakeholders.',
    departments: [
      { name: 'All Departments', color: 'bg-slate-100 text-slate-700' },
      { name: 'Executive', color: 'bg-amber-100 text-amber-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Operations', color: 'bg-teal-100 text-teal-700' },
      { name: 'Sales', color: 'bg-pink-100 text-pink-700' },
    ],
    enterprisePrice: '~$10-$20/user/month',
    features: [
      'Typically included in Zoom Workplace/Enterprise licenses',
      'AI Companion Add-on: ~$10–$20/user/month (varies by region)',
      'Auto-generated meeting summaries',
      'Action items and next steps extraction',
      'Stakeholder distribution and follow-up',
    ],
    icon: Video,
    gradient: 'from-blue-500 to-blue-700',
    pricingUrl: 'https://zoom.us/pricing',
  },
  {
    name: 'Confluence Cloud + AI',
    logoUrl: 'https://wac-cdn.atlassian.com/misc-assets/confluence-logo.svg',
    description: 'Atlassian\'s knowledge base and documentation platform enhanced with AI features for intelligent content creation and organization.',
    bestUsedFor: 'Internal knowledge base, documentation platform, team collaboration, and content organization. Essential if UATP already uses Confluence for documentation.',
    departments: [
      { name: 'All Departments', color: 'bg-slate-100 text-slate-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Engineering', color: 'bg-indigo-100 text-indigo-700' },
      { name: 'Operations', color: 'bg-teal-100 text-teal-700' },
      { name: 'HR', color: 'bg-rose-100 text-rose-700' },
    ],
    enterprisePrice: '~$5-$12/user/month',
    features: [
      'Standard: ~$5.16/user/month',
      'Premium: ~$9.73/user/month',
      'Enterprise: Custom (starts ~$12/user/month)',
      'AI-powered content generation',
      'Knowledge management & documentation',
    ],
    icon: FileText,
    gradient: 'from-blue-600 to-indigo-700',
    pricingUrl: 'https://www.atlassian.com/software/confluence/pricing',
  },
  {
    name: 'Supademo',
    logoUrl: 'https://avatars.githubusercontent.com/u/95662801',
    description: 'AI-powered demo creation platform for building interactive product walkthroughs, tutorials, and onboarding experiences.',
    bestUsedFor: 'Demo creation, marketing materials, product onboarding, internal training, and customer education. Useful for selling UATP\'s products and internal training programs.',
    departments: [
      { name: 'Marketing', color: 'bg-purple-100 text-purple-700' },
      { name: 'Sales', color: 'bg-pink-100 text-pink-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Customer Success', color: 'bg-green-100 text-green-700' },
      { name: 'Training', color: 'bg-blue-100 text-blue-700' },
    ],
    enterprisePrice: '~$27-$38/user/month',
    features: [
      'Pro: ~$27/user/month',
      'Scale: ~$38/user/month',
      'Enterprise: Custom pricing',
      'Interactive demo creation',
      'Marketing and onboarding use cases',
    ],
    icon: Video,
    gradient: 'from-violet-500 to-purple-600',
    pricingUrl: 'https://supademo.com/pricing',
  },
  {
    name: 'Cursor',
    logoUrl: 'https://avatars.githubusercontent.com/u/142287834',
    description: 'Full AI-powered coding environment with multi-model support (GPT, Claude) designed for modern development teams and workflows.',
    bestUsedFor: 'Complete AI coding environment, multi-model development assistance, code generation, and team collaboration. Perfect for multi-vendor dev teams',
    departments: [
      { name: 'Engineering', color: 'bg-indigo-100 text-indigo-700' },
      { name: 'Development', color: 'bg-blue-100 text-blue-700' },
      { name: 'DevOps', color: 'bg-cyan-100 text-cyan-700' },
      { name: 'Architecture', color: 'bg-slate-100 text-slate-700' },
    ],
    enterprisePrice: '~$40/user/month',
    features: [
      'Teams: $40/user/month',
      'Enterprise: Custom pricing',
      'Multi-model support (GPT, Claude, etc.)',
      'Full IDE with AI integration',
      'Useful for diverse development teams',
    ],
    icon: Code,
    gradient: 'from-slate-700 to-gray-900',
    pricingUrl: 'https://cursor.com/pricing',
  },
  {
    name: 'Figma + Figma AI',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    description: 'Leading UI/UX design platform enhanced with AI-driven prototype generation, design suggestions, and rapid iteration capabilities.',
    bestUsedFor: 'UI/UX design, AI-driven prototype generation, design systems, and rapid prototyping. Essential for Stage 2 rapid prototyping of internal tools at UATP.',
    departments: [
      { name: 'Design', color: 'bg-fuchsia-100 text-fuchsia-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'UX Research', color: 'bg-purple-100 text-purple-700' },
      { name: 'Marketing', color: 'bg-pink-100 text-pink-700' },
    ],
    enterprisePrice: '~$15-$25/user/month',
    features: [
      'Team tier: ~$15-$25/user/month',
      'AI-powered design generation',
      'Rapid prototyping capabilities',
      'Collaboration and design systems',
      'Perfect for internal tool development',
    ],
    icon: Palette,
    gradient: 'from-pink-500 to-rose-600',
    pricingUrl: 'https://www.figma.com/pricing/',
  },
  {
    name: 'Midjourney',
    logoUrl: 'https://seeklogo.com/images/M/midjourney-logo-80B25EB563-seeklogo.com.png',
    description: 'Advanced AI-driven image generation platform for creating high-quality visuals, marketing materials, and presentation graphics.',
    bestUsedFor: 'AI image generation for marketing campaigns, presentations, internal dashboards, and visual content. Adds professional visual quality to UATP\'s internal and external materials.',
    departments: [
      { name: 'Marketing', color: 'bg-purple-100 text-purple-700' },
      { name: 'Design', color: 'bg-fuchsia-100 text-fuchsia-700' },
      { name: 'Product', color: 'bg-orange-100 text-orange-700' },
      { name: 'Communications', color: 'bg-blue-100 text-blue-700' },
      { name: 'Sales', color: 'bg-pink-100 text-pink-700' },
    ],
    enterprisePrice: '~$30-$50/user/month',
    features: [
      'Team tier: ~$30-$50/user/month',
      'Enterprise: Custom pricing',
      'High-quality image generation',
      'Marketing and presentation visuals',
      'Professional content creation',
    ],
    icon: Image,
    gradient: 'from-indigo-500 to-purple-600',
    pricingUrl: 'https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans',
  },
];

export function AIToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-uatp-navy via-uatp-navy-light to-uatp-teal pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTAgMjBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTIwIDRjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-12 h-12 text-uatp-teal" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                AI Tools
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-100 mb-4 leading-relaxed">
              Empower your teams with enterprise-grade AI solutions
            </p>
            <p className="text-lg text-gray-200">
              Discover the best AI tools for your organization, with detailed information about features, departments, and enterprise pricing.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-uatp-navy mb-6">
              Enterprise AI Tools Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features, pricing, and capabilities to choose the right tools for your organization.
            </p>
          </motion.div>

          {/* Featured Tools - Larger Display */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-full mx-auto">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-10 h-full hover:shadow-2xl transition-all duration-300 border-2 border-uatp-teal/30 hover:border-uatp-teal bg-gradient-to-br from-white to-gray-50 flex flex-col">
                  {/* Tool Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${tool.gradient} p-5 flex items-center justify-center shadow-xl`}>
                        <img
                          src={tool.logoUrl}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const icon = target.nextElementSibling as HTMLElement;
                            if (icon) icon.style.display = 'block';
                          }}
                        />
                        <tool.icon className="w-14 h-14 text-white hidden" />
                      </div>
                    </div>

                    {/* Tool Info */}
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-uatp-teal/10 text-uatp-teal rounded-full text-xs font-semibold mb-2">
                        FEATURED
                      </div>
                      <h3 className="text-3xl font-bold text-uatp-navy mb-2">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold text-uatp-teal text-lg">
                          {tool.enterprisePrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed text-base">
                    {tool.description}
                  </p>

                  {/* Best Used For */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Best Used For</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      {tool.bestUsedFor}
                    </p>
                  </div>

                  {/* Departments */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Departments</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {tool.departments.map((dept) => (
                        <span
                          key={dept.name}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${dept.color} border border-current/20`}
                        >
                          {dept.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Features */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Enterprise Features</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-uatp-teal mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-auto pt-4">
                    <a
                      href={tool.pricingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-uatp-teal text-uatp-teal hover:bg-uatp-teal/5 font-medium rounded-lg transition-all duration-200"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Regular Tools - 4 Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-uatp-teal flex flex-col">
                  {/* Tool Header */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} p-3 flex items-center justify-center shadow-lg`}>
                        <img
                          src={tool.logoUrl}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const icon = target.nextElementSibling as HTMLElement;
                            if (icon) icon.style.display = 'block';
                          }}
                        />
                        <tool.icon className="w-10 h-10 text-white hidden" />
                      </div>
                    </div>

                    {/* Tool Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-uatp-navy mb-2">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold text-uatp-teal">
                          {tool.enterprisePrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Best Used For */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Best Used For</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      {tool.bestUsedFor}
                    </p>
                  </div>

                  {/* Departments */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Departments</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {tool.departments.map((dept) => (
                        <span
                          key={dept.name}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${dept.color} border border-current/20`}
                        >
                          {dept.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Features */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-uatp-teal" />
                      <h4 className="font-semibold text-uatp-navy">Enterprise Features</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-uatp-teal mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-auto pt-4">
                    <a
                      href={tool.pricingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-uatp-teal text-uatp-teal hover:bg-uatp-teal/5 font-medium rounded-lg transition-all duration-200"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}