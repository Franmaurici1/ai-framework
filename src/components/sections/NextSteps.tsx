import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Target, Rocket } from 'lucide-react';

const nextStepItems = [
  {
    title: 'Stakeholder Discovery Sessions',
    description: 'Conduct comprehensive discovery sessions with stakeholders across all departments to identify the most critical pain points and operational challenges',
  },
  {
    title: 'Pain Point Prioritization',
    description: 'Categorize and prioritize identified pain points based on potential return on investment and implementation effort to identify high-value, low-effort opportunities',
  },
  {
    title: 'Market Tool Implementation',
    description: 'Deploy proven, market-ready AI tools strategically selected to address prioritized pain points and deliver immediate value',
  },
];

export function NextSteps() {
  return (
    <section id="next-steps" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-4 font-barlow uppercase tracking-wide">
            Next Steps
          </h2>
          <p className="text-lg text-[#535457] max-w-3xl mx-auto">
            Let's collaborate to create a customized AI adoption roadmap tailored to your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Next Steps List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {nextStepItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#010205] rounded-[4px] flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-5 h-5 text-[#FBFCFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#010205] mb-1 font-barlow uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[#535457] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Process Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden bg-[#0E0E12] border border-[#404044] rounded-[12px] shadow-none">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    { icon: Users, label: 'Discover', delay: 0.2 },
                    { icon: Target, label: 'Prioritize', delay: 0.4, isHighlight: true },
                    { icon: Rocket, label: 'Implement', delay: 0.6 },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay, duration: 0.4 }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-[8px] flex items-center justify-center border ${
                        step.isHighlight
                          ? 'bg-[#EBD698]/10 border-[#EBD698]/40'
                          : 'bg-[#212225] border-[#404044]'
                      }`}>
                        <step.icon className={`w-6 h-6 ${step.isHighlight ? 'text-[#EBD698]' : 'text-[#AFB0B3]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="h-px bg-[#404044] overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay + 0.2, duration: 0.8 }}
                            className={`h-full ${step.isHighlight ? 'bg-[#EBD698]' : 'bg-[#FBFCFF]'}`}
                          />
                        </div>
                        <p className={`font-semibold text-sm font-barlow uppercase tracking-widest ${
                          step.isHighlight ? 'text-[#EBD698]' : 'text-[#FBFCFF]'
                        }`}>{step.label}</p>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="pt-4 border-t border-[#404044] text-center"
                  >
                    <p className="text-[#88898C] text-xs uppercase tracking-widest">Your roadmap to AI transformation</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { stat: '3 Stages', label: 'Structured Framework' },
            { stat: '20+', label: 'AI Tools Evaluated' },
            { stat: 'ROI-Driven', label: 'Measurable Outcomes' },
          ].map((item, index) => (
            <Card key={index} className="text-center p-6 border border-[#D8D8DB] bg-white rounded-[8px] shadow-none hover:bg-[#EEEFF2] transition-colors duration-250">
              <p className="text-3xl font-bold text-[#010205] mb-2 font-barlow uppercase">{item.stat}</p>
              <p className="text-[#535457] text-sm">{item.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
