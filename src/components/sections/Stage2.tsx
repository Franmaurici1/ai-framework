import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap, Bot, MessageSquare, Sparkles, GitBranch } from 'lucide-react';
import { stage2Examples, stage2Tools } from '@/data/stages';

const toolIcons = [MessageSquare, Sparkles, GitBranch];

export function Stage2() {
  return (
    <section id="stage-2" className="py-24 bg-gradient-to-br from-white via-teal-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Stage 2 – Acceleration
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-uatp-navy mb-6">
            Automate Simple, Time-Consuming Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Focus on quick wins and simple automations that eliminate repetitive tasks. Build micro-applications tailored to UATP's specific workflows and use cases.
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
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-uatp-navy flex items-center">
                  <Zap className="w-6 h-6 text-uatp-teal mr-2" />
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
                      className="border-l-4 border-uatp-teal pl-4 py-2"
                    >
                      <h4 className="font-semibold text-uatp-navy mb-1">
                        {example.title}
                      </h4>
                      <p className="text-sm text-gray-600">{example.description}</p>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Assessment criteria:</strong> Prioritize processes based on time consumption, repetition frequency, and potential ROI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Micro-App Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-uatp-teal to-uatp-green text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Bot className="w-6 h-6 mr-2" />
                  UATP AFP Helper Bot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-4">
                  {/* Mock chat interface with message bubbles */}

                  {/* User message - aligned right */}
                  <div className="flex justify-end">
                    <div className="relative bg-gray-100 text-gray-800 rounded-2xl p-3 max-w-[85%] shadow-sm after:content-[''] after:absolute after:top-3 after:-right-2 after:w-0 after:h-0 after:border-t-[8px] after:border-t-transparent after:border-l-[10px] after:border-l-gray-100 after:border-b-[8px] after:border-b-transparent">
                      <p className="text-sm font-medium mb-1">User</p>
                      <p className="text-sm">What exactly counts as an AFP in UATP's payment offering?</p>
                    </div>
                  </div>

                  {/* Bot message - aligned left */}
                  <div className="flex justify-start">
                    <div className="relative bg-white text-gray-800 rounded-2xl p-3 max-w-[85%] shadow-md before:content-[''] before:absolute before:top-3 before:-left-2 before:w-0 before:h-0 before:border-t-[8px] before:border-t-transparent before:border-r-[10px] before:border-r-white before:border-b-[8px] before:border-b-transparent">
                      <p className="text-sm font-medium mb-1 text-uatp-teal">AFP Helper</p>
                      <p className="text-sm">
                        AFP stands for Alternative Forms of Payment. For UATP, this includes digital wallets, regional/local bank transfers, real-time payment methods, and other non-credit-card options that airlines can offer to increase global reach and conversion.
                      </p>
                    </div>
                  </div>

                  {/* User message - aligned right */}
                  <div className="flex justify-end">
                    <div className="relative bg-gray-100 text-gray-800 rounded-2xl p-3 max-w-[85%] shadow-sm after:content-[''] after:absolute after:top-3 after:-right-2 after:w-0 after:h-0 after:border-t-[8px] after:border-t-transparent after:border-l-[10px] after:border-l-gray-100 after:border-b-[8px] after:border-b-transparent">
                      <p className="text-sm font-medium mb-1">User</p>
                      <p className="text-sm">And how does adding AFPs actually help an airline?</p>
                    </div>
                  </div>

                  {/* Bot message - aligned left */}
                  <div className="flex justify-start">
                    <div className="relative bg-white text-gray-800 rounded-2xl p-3 max-w-[85%] shadow-md before:content-[''] before:absolute before:top-3 before:-left-2 before:w-0 before:h-0 before:border-t-[8px] before:border-t-transparent before:border-r-[10px] before:border-r-white before:border-b-[8px] before:border-b-transparent">
                      <p className="text-sm font-medium mb-1 text-uatp-teal">AFP Helper</p>
                      <p className="text-sm">
                      AFPs boost conversion and market reach by letting airlines offer local, preferred payment methods—reducing checkout drop-off and capturing customers who don’t use traditional cards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm opacity-90">
                    Micro GPT for UATP domain knowledge
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
          <h3 className="text-2xl font-bold text-uatp-navy mb-6 text-center">
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
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-uatp-navy mb-2">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-gray-600">{tool.description}</p>
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
