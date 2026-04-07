export interface Challenge {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface Tool {
  name: string;
  priceRange: string;
  description: string;
  category?: string;
}

export interface Stage {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  objectives: string[];
  tools: Tool[];
}

export interface DepartmentTool {
  department: string;
  tools: Array<{
    name: string;
    reason: string;
  }>;
}

export interface AutomationExample {
  title: string;
  description: string;
}

export interface Stage3Feature {
  title: string;
  description: string;
  bullets: string[];
  imagePlaceholder: string;
}

// Challenges data
export const challenges: Challenge[] = [
  {
    id: 'assess',
    title: 'Assess',
    description: 'Identify high-impact opportunities that maximize ROI with minimal effort',
    bullets: [
      'Evaluate current processes to find time-consuming, repetitive tasks',
      'Prioritize initiatives based on business value and implementation complexity',
      'Measure baseline metrics to establish clear success criteria',
    ],
    icon: 'target',
  },
  {
    id: 'plan',
    title: 'Plan',
    description: 'Design strategic implementation paths with clear roadmaps and resource allocation',
    bullets: [
      'Create detailed action plans with defined milestones and deliverables',
      'Allocate resources effectively across people, tools, and timeline',
      'Identify potential risks and develop mitigation strategies',
    ],
    icon: 'file-text',
  },
  {
    id: 'execute',
    title: 'Execute',
    description: 'Deliver measurable results through systematic implementation and continuous improvement',
    bullets: [
      'Implement solutions with precision following the established plan',
      'Monitor progress with real-time metrics and KPIs',
      'Iterate and optimize based on feedback and performance data',
    ],
    icon: 'rocket',
  },
];

// Stages overview
export const stagesOverview: Stage[] = [
  {
    id: 'stage-1',
    number: 1,
    title: 'Market Tools with Governance',
    tagline: 'Foundation',
    description:
      'Identify highest-cost processes, improve them with existing market tools, and introduce governance for security and compliance.',
    objectives: [],
    tools: [],
  },
  {
    id: 'stage-2',
    number: 2,
    title: 'Quick-Win Autos & Micro-Apps',
    tagline: 'Acceleration',
    description:
      'Automate repetitive, time-consuming tasks with simple AI workflows and micro-applications for specific Porsche Design use cases.',
    objectives: [],
    tools: [],
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Tailored AI Systems for Porsche Design',
    tagline: 'Transformation',
    description:
      'Build game-changing AI systems deeply integrated with Porsche Design data, operations, and products. Requires significant investment and governance.',
    objectives: [],
    tools: [],
  },
];

// Stage 1 Details
export const stage1Objectives = [
  'Map and prioritize high-cost, time-intensive processes across departments',
  'Select best-in-class AI tools per team (GPT, Claude, Copilot, Cursor, etc.)',
  'Define governance framework: security policies, access levels, usage guidelines',
  'Establish baseline metrics to measure ROI and productivity gains',
];

export const stage1DepartmentTools: DepartmentTool[] = [
  {
    department: 'Leadership & Strategy',
    tools: [
      { name: 'GPT-5.1 (ChatGPT Team)', reason: 'Best for strategic analysis, document drafting, meeting prep' },
      { name: 'Claude Sonnet', reason: 'Superior for long-form analysis, research synthesis' },
    ],
  },
  {
    department: 'Operations & Finance',
    tools: [
      { name: 'Copilot for M365', reason: 'Native integration with Excel, Outlook, Teams, PowerPoint' },
      { name: 'GPT-5.1', reason: 'Financial modeling, data interpretation, report generation' },
    ],
  },
  {
    department: 'Product & Design',
    tools: [
      { name: 'Claude Code', reason: 'Best for product requirements, technical documentation' },
      { name: 'GPT-5.1', reason: 'User research analysis, copywriting, content strategy' },
    ],
  },
  {
    department: 'Engineering',
    tools: [
      { name: 'GitHub Copilot / Cursor', reason: 'AI-powered code completion and generation' },
      { name: 'Claude Code', reason: 'Complex refactoring, debugging, architecture design' },
    ],
  },
];

export const stage1Tools: Tool[] = [
  {
    name: 'Copilot for M365',
    priceRange: '$30-$57/user/month',
    description: 'Best for Outlook/Teams/Excel workflows',
  },
  {
    name: 'GPT-5.1 (Team)',
    priceRange: '$20-$30/user/month',
    description: 'Best general reasoning & writing',
  },
  {
    name: 'Claude Sonnet / Claude Code',
    priceRange: '$30-$45/user/month',
    description: 'Best for long docs & coding tasks',
  },
];

// Stage 2 Details
export const stage2Examples: AutomationExample[] = [
  {
    title: 'Product Launch Content Engine',
    description: 'The moment a new product is registered, AI automatically generates on-brand product descriptions, press releases, social copy, and email campaigns — across every language and channel — ready to publish.',
  },
  {
    title: 'Company Intelligence Chatbot',
    description: 'A chatbot connected to all internal systems — brand guidelines, product catalog, pricing, processes, and market data — giving every department instant, governed answers to fuel faster decision-making.',
  },
  {
    title: 'Zero-Effort Employee Onboarding',
    description: 'New hires are automatically guided through a personalized onboarding journey: brand values, product knowledge, team processes, and role-specific resources — all delivered without any manual coordination.',
  },
  {
    title: 'Meeting Intelligence Pipeline',
    description: 'Every meeting is automatically transcribed, summarized, and turned into structured action items distributed to the right people — nothing falls through the cracks, zero manual effort.',
  },
  {
    title: 'Brand Voice Generator',
    description: 'AI trained on Porsche Design\'s unique aesthetic and tone produces on-brand copy for any use case — campaigns, product pages, internal comms — in seconds, consistent at scale.',
  },
  {
    title: 'Market & Customer Feedback Loop',
    description: 'AI continuously aggregates reviews, social signals, and customer feedback into weekly decision-ready intelligence reports delivered straight to leadership via Slack or email.',
  },
];

export const stage2Tools: Tool[] = [
  {
    name: 'Claude Cowork',
    priceRange: '$25–$200/user/month',
    description: 'Shared AI workspace for cross-company automations, multi-agent workflows, and team-wide prompt libraries',
  },
  {
    name: 'Claude API + Agents',
    priceRange: 'Usage-based',
    description: 'Powers micro-apps, chatbots, and automated pipelines deeply integrated with internal systems',
  },
  {
    name: 'Slack AI + Zapier/Make',
    priceRange: '$10–$30/user/month',
    description: 'Connects AI automations to the tools teams already use — no new platforms to learn',
  },
];

// Stage 3 Details
export const stage3Features: Stage3Feature[] = [
  {
    title: 'Autonomous Product Launch System',
    description: 'A fully integrated AI engine that orchestrates the entire go-to-market lifecycle — from product registration to global content deployment — with zero manual handoffs.',
    bullets: [
      'Detects new product entries and triggers a full content generation pipeline automatically',
      'Produces on-brand descriptions, press releases, campaign copy and retailer assets in every language',
      'Distributes finished assets to the right teams, channels and markets without human coordination',
      'Learns from past launch performance to continuously improve output quality and relevance',
    ],
    imagePlaceholder: 'Product launch AI pipeline dashboard',
  },
  {
    title: 'Company-Wide Intelligence Brain',
    description: 'A deeply integrated AI layer connected to every Porsche Design system — brand, pricing, product catalog, market data, and processes — giving every department governed access to the intelligence it needs.',
    bullets: [
      'Single conversational interface across Marketing, Sales, HR, Operations, and Product',
      'Answers complex questions by synthesizing data from multiple internal sources in real time',
      'Surfaces proactive insights: pricing anomalies, market shifts, competitive signals, and risk flags',
      'Role-based access ensures each team only sees what they are authorised to see',
    ],
    imagePlaceholder: 'Company intelligence brain dashboard',
  },
  {
    title: 'Intelligent Workforce Onboarding Platform',
    description: 'An end-to-end AI system that delivers a fully personalised onboarding experience to every new hire — brand values, product knowledge, processes, and role-specific training — with zero coordination effort from HR.',
    bullets: [
      'Onboarding journey auto-generated and personalised based on role, department, and location',
      'AI answers every question the new hire has using live internal documentation and knowledge bases',
      'Tracks progress, flags gaps, and adapts the programme in real time',
      'Reduces time-to-productivity from weeks to days while freeing HR entirely from repetitive tasks',
    ],
    imagePlaceholder: 'Intelligent onboarding platform dashboard',
  },
];

export const stage3Tools: Tool[] = [
  {
    name: 'AtScale + Databricks',
    priceRange: 'Enterprise contract (governed data access)',
    description: 'Semantic layer for secure, governed data queries',
  },
  {
    name: 'OpenAI / Azure OpenAI Enterprise',
    priceRange: 'Usage-based with enterprise SLA',
    description: 'Secured LLM gateway with compliance features',
  },
  {
    name: 'Claude Enterprise',
    priceRange: '$60-$80/user/month',
    description: 'Advanced reasoning, code generation, and long context',
  },
];

// Tools & Pricing Summary Table
export interface PricingSummary {
  stage: string;
  coreTools: string[];
  priceRange: string;
  whyRecommended: string;
}

export const pricingSummaryData: PricingSummary[] = [
  {
    stage: 'Stage 1: Market Tools',
    coreTools: ['GPT-5.1 Team', 'Claude Sonnet', 'Copilot M365', 'GitHub Copilot/Cursor'],
    priceRange: '$20-$60/user/month',
    whyRecommended:
      'Fastest ROI, minimal implementation risk, immediate productivity gains across all departments',
  },
  {
    stage: 'Stage 2: Quick-Win Automations',
    coreTools: ['Slack AI', 'OpenAI/Claude Assistants', 'LangGraph/LangChain', 'Custom Micro-Apps'],
    priceRange: '$10-$30/user/month + infra costs',
    whyRecommended:
      'Eliminate repetitive tasks, bridge system gaps, high ROI with low technical risk',
  },
  {
    stage: 'Stage 3: Tailored AI Systems',
    coreTools: ['AtScale+Databricks', 'Azure OpenAI Enterprise', 'Claude Enterprise', 'Custom Dashboards'],
    priceRange: 'Enterprise contracts + dev investment',
    whyRecommended:
      'Strategic competitive advantage, deeply integrated with Porsche Design operations, requires governance investment',
  },
];
