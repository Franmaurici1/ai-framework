import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap, Bot, MessageSquare, Sparkles, GitBranch } from 'lucide-react';
import { stage2Examples, stage2Tools } from '@/data/stages';

const toolIcons = [MessageSquare, Sparkles, GitBranch];

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
          className="mb-12"
        >
          <div className="inline-block px-3 py-1.5 border border-[#D8D8DB] bg-white text-[#535457] rounded-[4px] text-xs font-semibold mb-4 tracking-widest uppercase">
            Stage 2 — Acceleration
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
            Automate Simple, Time-Consuming Work
          </h2>
          <p className="text-lg text-[#535457] max-w-3xl">
            Focus on quick wins and simple automations that eliminate repetitive tasks. Build micro-applications tailored to specific workflows and use cases.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Automation Examples */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border border-[#D8D8DB] bg-white rounded-[12px] shadow-none">
              <CardHeader>
                <CardTitle className="text-xl text-[#010205] flex items-center font-barlow uppercase tracking-wide">
                  <Zap className="w-5 h-5 text-[#010205] mr-2" />
                  Quick-Win Automation Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {stage2Examples.map((example, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-l-2 border-[#D8D8DB] pl-4 py-2"
                    >
                      <h4 className="font-semibold text-[#010205] mb-1 text-sm">
                        {example.title}
                      </h4>
                      <p className="text-sm text-[#535457] leading-relaxed">{example.description}</p>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-[#EEEFF2] rounded-[4px] border border-[#D8D8DB]">
                  <p className="text-sm text-[#535457]">
                    <strong className="text-[#010205]">Assessment criteria:</strong> Prioritize processes based on time consumption, repetition frequency, and potential ROI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Demo Bot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-[#0E0E12] text-white border border-[#404044] rounded-[12px] shadow-none">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-[#FBFCFF] font-barlow uppercase tracking-wide">
                  <Bot className="w-5 h-5 mr-2 text-[#EBD698]" />
                  AFP Helper Bot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#212225] rounded-[8px] p-4 space-y-4 border border-[#404044]">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#292934] text-[#FBFCFF] rounded-[8px] rounded-tr-[2px] p-3 max-w-[85%] border border-[#404044]">
                      <p className="text-xs font-semibold mb-1 text-[#88898C] uppercase tracking-wide">User</p>
                      <p className="text-sm">What exactly counts as an AFP in the payment offering?</p>
                    </div>
                  </div>

                  {/* Bot message */}
                  <div className="flex justify-start">
                    <div className="bg-[#0E0E12] text-[#FBFCFF] rounded-[8px] rounded-tl-[2px] p-3 max-w-[85%] border border-[#EBD698]/20">
                      <p className="text-xs font-semibold mb-1 text-[#EBD698] uppercase tracking-wide">AFP Helper</p>
                      <p className="text-sm text-[#AFB0B3]">
                        AFP stands for Alternative Forms of Payment. This includes digital wallets, regional/local bank transfers, real-time payment methods, and other non-credit-card options that airlines can offer to increase global reach and conversion.
                      </p>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#292934] text-[#FBFCFF] rounded-[8px] rounded-tr-[2px] p-3 max-w-[85%] border border-[#404044]">
                      <p className="text-xs font-semibold mb-1 text-[#88898C] uppercase tracking-wide">User</p>
                      <p className="text-sm">And how does adding AFPs actually help an airline?</p>
                    </div>
                  </div>

                  {/* Bot message */}
                  <div className="flex justify-start">
                    <div className="bg-[#0E0E12] text-[#FBFCFF] rounded-[8px] rounded-tl-[2px] p-3 max-w-[85%] border border-[#EBD698]/20">
                      <p className="text-xs font-semibold mb-1 text-[#EBD698] uppercase tracking-wide">AFP Helper</p>
                      <p className="text-sm text-[#AFB0B3]">
                        AFPs boost conversion and market reach by letting airlines offer local, preferred payment methods—reducing checkout drop-off and capturing customers who don't use traditional cards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-[#88898C] uppercase tracking-widest">
                    Micro GPT for domain knowledge
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#010205] mb-6 text-center font-barlow uppercase tracking-wide">
            Stage 2 AI Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stage2Tools.map((tool, index) => {
              const Icon = toolIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-[#D8D8DB] bg-white rounded-[12px] shadow-none hover:bg-[#EEEFF2] transition-colors duration-250">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#010205] rounded-[8px] flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-[#FBFCFF]" />
                        </div>
                        <h4 className="font-bold text-base text-[#010205] mb-2 font-barlow uppercase tracking-wide">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-[#535457] leading-relaxed">{tool.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
