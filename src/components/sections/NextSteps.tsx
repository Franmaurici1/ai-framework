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
    <section id="next-steps" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-uatp-navy mb-4">
            Next Steps with UATP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-uatp-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
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
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-uatp-navy to-uatp-navy-light">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Three step visual */}
                  {[
                    { icon: Users, label: 'Discover', color: 'from-blue-500 to-blue-600', delay: 0.2 },
                    { icon: Target, label: 'Prioritize', color: 'from-teal-500 to-teal-600', delay: 0.4 },
                    { icon: Rocket, label: 'Implement', color: 'from-green-500 to-green-600', delay: 0.6 },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay + 0.2, duration: 0.8 }}
                            className={`h-full bg-gradient-to-r ${step.color}`}
                          />
                        </div>
                        <p className="text-white font-semibold mt-2">{step.label}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Bottom tagline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="pt-4 border-t border-white/10 text-center"
                  >
                    <p className="text-gray-300 text-sm">Your roadmap to AI transformation</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Stats/Badges */}
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
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold text-uatp-teal mb-2">{item.stat}</p>
              <p className="text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
