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
    id: 'many-projects',
    title: 'Too Many Projects & Vendors',
    description: 'Multiple AI initiatives across departments without coordination',
    bullets: [
      'Redundant AI tools and overlapping vendor contracts',
      'No centralized visibility into what AI is being used where',
      'Budget inefficiencies from duplicate investments',
    ],
    icon: 'layers',
  },
  {
    id: 'fragmented-tools',
    title: 'Fragmented Tools & Data',
    description: 'Disconnected systems leading to information silos',
    bullets: [
      'AI tools not integrated with core systems (Jira, Confluence, Slack)',
      'Data scattered across platforms without governance',
      'Manual work bridging gaps between systems',
    ],
    icon: 'puzzle',
  },
  {
    id: 'unstructured-ai',
    title: 'Unstructured AI Experimentation',
    description: 'Ad-hoc AI adoption without strategic framework',
    bullets: [
      'Teams experimenting without security or compliance review',
      'No clear ROI measurement or success criteria',
      'Risk of data leaks and regulatory issues',
    ],
    icon: 'alert-triangle',
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
    title: 'Quick-Win Automations & Micro-Apps',
    tagline: 'Acceleration',
    description:
      'Automate repetitive, time-consuming tasks with simple AI workflows and micro-applications for specific UATP use cases.',
    objectives: [],
    tools: [],
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Tailored AI Systems for UATP',
    tagline: 'Transformation',
    description:
      'Build game-changing AI systems deeply integrated with UATP data, operations, and products. Requires significant investment and governance.',
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
      { name: 'GPT-4.1 (ChatGPT Team)', reason: 'Best for strategic analysis, document drafting, meeting prep' },
      { name: 'Claude Sonnet', reason: 'Superior for long-form analysis, research synthesis' },
    ],
  },
  {
    department: 'Operations & Finance',
    tools: [
      { name: 'Copilot for M365', reason: 'Native integration with Excel, Outlook, Teams, PowerPoint' },
      { name: 'GPT-4.1', reason: 'Financial modeling, data interpretation, report generation' },
    ],
  },
  {
    department: 'Product & Design',
    tools: [
      { name: 'Claude Code', reason: 'Best for product requirements, technical documentation' },
      { name: 'GPT-4.1', reason: 'User research analysis, copywriting, content strategy' },
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
    name: 'GPT-4.1 (Team)',
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
    title: 'Email → Confluence Auto-Summarizer',
    description: 'Automatically summarize important emails and push summaries to Confluence pages',
  },
  {
    title: 'Slack → Jira Ticket Creator',
    description: 'Convert Slack threads into structured Jira tickets with AI extraction',
  },
  {
    title: 'Meeting Transcript → Summary + Tasks',
    description: 'Generate meeting summaries and action items from transcripts, auto-assign in Jira',
  },
  {
    title: 'Micro GPTs for UATP Domains',
    description: 'Custom GPTs for Charge Accounts, AFPs, DataStream/DataMine documentation Q&A',
  },
];

export const stage2Tools: Tool[] = [
  {
    name: 'Slack AI',
    priceRange: '$10-$15/user/month',
    description: 'Native AI capabilities for Slack-based workflows',
  },
  {
    name: 'OpenAI/Claude Assistants',
    priceRange: 'Usage-based ($0.01-$0.10 per query)',
    description: 'Perfect for building micro-apps and custom GPTs',
  },
  {
    name: 'LangGraph + LangChain',
    priceRange: 'Infrastructure cost only',
    description: 'Open-source framework for reusable agent workflows',
  },
];

// Stage 3 Details
export const stage3Features: Stage3Feature[] = [
  {
    title: 'Enterprise AI Assistant (DistillGenie++)',
    description: 'Intelligent Slack bot with live access to UATP systems',
    bullets: [
      'Natural language interface to query project status, vendor data, financial metrics',
      'Proactive alerts for project risks, budget overruns, timeline delays',
      'Integrated with Jira, Confluence, financial systems, and data warehouse',
    ],
    imagePlaceholder: 'Dashboard showing AI assistant conversations and insights',
  },
  {
    title: 'Project & Vendor Health Dashboard',
    description: 'Real-time AI-powered visibility across all projects and vendors',
    bullets: [
      'Multi-vendor project tracking with anomaly detection',
      'Predictive alerts for schedule slips, scope creep, or resource constraints',
      'Executive dashboard with drill-down to individual projects',
    ],
    imagePlaceholder: 'Project health dashboard with charts and status indicators',
  },
  {
    title: 'Product & Revenue Intelligence',
    description: 'AI-driven analytics over governed UATP data',
    bullets: [
      'Natural language queries over AtScale/Databricks data models',
      'Automated anomaly detection and root cause analysis',
      'Role-based access with PCI/PII protection and audit trails',
    ],
    imagePlaceholder: 'Revenue analytics dashboard with AI-generated insights',
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
    coreTools: ['GPT-4.1 Team', 'Claude Sonnet', 'Copilot M365', 'GitHub Copilot/Cursor'],
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
      'Strategic competitive advantage, deeply integrated with UATP operations, requires governance investment',
  },
];
