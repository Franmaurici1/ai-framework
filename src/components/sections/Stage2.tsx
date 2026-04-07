import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bot, MessageSquare, Sparkles, GitBranch, Zap, ArrowRight } from 'lucide-react';
import { stage2Examples, stage2Tools } from '@/data/stages';

const exampleIcons = [Sparkles, Bot, Zap, MessageSquare, Sparkles, GitBranch];

export function Stage2() {
  return (
    <section id="stage-2" className="py-24 bg-[#EEEFF2]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1.5 border border-[#D8D8DB] bg-white text-[#535457] rounded-[4px] text-xs font-semibold mb-4 tracking-widest uppercase">
            Stage 2 — Acceleration
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
                Automate Simple,<br />Time-Consuming Work
              </h2>
              <p className="text-lg text-[#535457] leading-relaxed">
                Deploy a cross-company AI framework that eliminates repetitive work and puts intelligence at the heart of every department — powered by <strong className="text-[#010205]">Claude Cowork</strong>.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {['Content', 'Onboarding', 'Decision Intel', 'Brand Voice', 'Meetings', 'Customer Signals'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-[#D8D8DB] bg-white text-[#535457] text-xs rounded-[4px] font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Automation Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {stage2Examples.map((example, index) => {
            const Icon = exampleIcons[index];
            const isHighlight = index === 0 || index === 1 || index === 2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className={`h-full border rounded-[12px] shadow-none transition-colors duration-250 ${
                  isHighlight
                    ? 'bg-white border-[#D8D8DB] hover:border-[#010205]'
                    : 'bg-white border-[#D8D8DB] hover:border-[#010205]'
                }`}>
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-[#EBD698]/15 border border-[#EBD698]/40' :
                      index === 1 ? 'bg-[#010205] ' :
                      'bg-[#EEEFF2] border border-[#D8D8DB]'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        index === 0 ? 'text-[#EBD698]' :
                        index === 1 ? 'text-[#FBFCFF]' :
                        'text-[#535457]'
                      }`} />
                    </div>
                    <h4 className="font-bold text-[#010205] mb-2 font-barlow uppercase tracking-wide text-sm leading-snug">
                      {example.title}
                    </h4>
                    <p className="text-sm text-[#535457] leading-relaxed">
                      {example.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Bot + Tools Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Demo Bot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-[#0E0E12] border border-[#404044] rounded-[12px] shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center text-[#FBFCFF] font-barlow uppercase tracking-wide">
                  <Bot className="w-4 h-4 mr-2 text-[#EBD698]" />
                  Porsche Design Internal Assistant
                </CardTitle>
                <p className="text-xs text-[#88898C] uppercase tracking-widest">Powered by Claude Cowork</p>
              </CardHeader>
              <CardContent>
                <div className="bg-[#212225] rounded-[8px] p-4 space-y-4 border border-[#404044]">

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#292934] text-[#FBFCFF] rounded-[8px] rounded-tr-[2px] p-3 max-w-[85%] border border-[#404044]">
                      <p className="text-xs font-semibold mb-1 text-[#88898C] uppercase tracking-wide">Marketing</p>
                      <p className="text-sm">We're launching the new Chronograph collection next week. Can you kick off the content pipeline?</p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex justify-start">
                    <div className="bg-[#0E0E12] text-[#FBFCFF] rounded-[8px] rounded-tl-[2px] p-3 max-w-[85%] border border-[#EBD698]/20">
                      <p className="text-xs font-semibold mb-2 text-[#EBD698] uppercase tracking-wide">Porsche Design AI</p>
                      <p className="text-sm text-[#AFB0B3] mb-2">On it. Generating for the Chronograph launch:</p>
                      <ul className="text-sm text-[#AFB0B3] space-y-1">
                        <li className="flex items-start gap-2"><span className="text-[#EBD698] mt-0.5">—</span>Product description (EN, DE, FR, JP)</li>
                        <li className="flex items-start gap-2"><span className="text-[#EBD698] mt-0.5">—</span>Press release draft</li>
                        <li className="flex items-start gap-2"><span className="text-[#EBD698] mt-0.5">—</span>Instagram + LinkedIn captions</li>
                        <li className="flex items-start gap-2"><span className="text-[#EBD698] mt-0.5">—</span>Retailer email campaign</li>
                      </ul>
                      <p className="text-xs text-[#88898C] mt-2">Ready for review in your shared workspace.</p>
                    </div>
                  </div>

                  {/* User follow-up */}
                  <div className="flex justify-end">
                    <div className="bg-[#292934] text-[#FBFCFF] rounded-[8px] rounded-tr-[2px] p-3 max-w-[85%] border border-[#404044]">
                      <p className="text-xs font-semibold mb-1 text-[#88898C] uppercase tracking-wide">Sales</p>
                      <p className="text-sm">What's our current pricing strategy for the Asia-Pacific region?</p>
                    </div>
                  </div>

                  {/* Bot response 2 */}
                  <div className="flex justify-start">
                    <div className="bg-[#0E0E12] text-[#FBFCFF] rounded-[8px] rounded-tl-[2px] p-3 max-w-[85%] border border-[#EBD698]/20">
                      <p className="text-xs font-semibold mb-2 text-[#EBD698] uppercase tracking-wide">Porsche Design AI</p>
                      <p className="text-sm text-[#AFB0B3]">Based on the latest pricing docs and regional sales data: APAC uses a 1.18× index vs. EUR base, with premium positioning in JP and CN. Q3 revision is pending board approval — I can surface the draft for you.</p>
                    </div>
                  </div>

                </div>
                <p className="text-xs text-[#88898C] uppercase tracking-widest text-center mt-4">
                  One AI. Every department. Zero friction.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Tools + Claude Cowork highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Claude Cowork feature highlight */}
            <Card className="bg-white border border-[#D8D8DB] rounded-[12px] shadow-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EBD698]/15 border border-[#EBD698]/40 rounded-[8px] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#EBD698]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#010205] mb-1 font-barlow uppercase tracking-wide text-sm">Why Claude Cowork?</h4>
                    <p className="text-sm text-[#535457] leading-relaxed">
                      A shared AI workspace where every team works from the same prompts, knowledge base, and automations. One platform — consistent outputs across Marketing, Sales, HR, and Product.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    'Shared prompt library',
                    'Multi-agent workflows',
                    'Team knowledge base',
                    'Audit & governance',
                    'CI/CD integrations',
                    'Custom AI personas',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-[#010205] flex-shrink-0" />
                      <span className="text-xs text-[#535457]">{feat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <div className="space-y-3">
              {stage2Tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-white border border-[#D8D8DB] rounded-[8px] shadow-none hover:border-[#010205] transition-colors duration-250">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h5 className="font-bold text-[#010205] text-sm font-barlow uppercase tracking-wide">{tool.name}</h5>
                        <p className="text-xs text-[#535457] mt-0.5">{tool.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#010205] bg-[#EEEFF2] px-2 py-1 rounded-[4px] whitespace-nowrap ml-4">
                        {tool.priceRange}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
