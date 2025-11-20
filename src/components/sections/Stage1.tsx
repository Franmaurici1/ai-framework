import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, Wrench, Bot, Code2 } from 'lucide-react';
import { stage1Objectives, stage1DepartmentTools, stage1Tools } from '@/data/stages';

const toolIcons = [Wrench, Bot, Code2];

export function Stage1() {
  return (
    <section id="stage-1" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Stage 1 – Foundation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-uatp-navy mb-6">
            Use Market Tools, Maximize Impact, Stay in Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Identify your highest-cost processes, improve them with best-in-class AI tools, and introduce governance to ensure security, compliance, and ROI measurement.
          </p>
        </motion.div>

        {/* Two-Column Layout: Objectives & Tool Matrix */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Objectives */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-uatp-navy">
                  Key Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {stage1Objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="w-6 h-6 text-uatp-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Tool Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-uatp-navy to-uatp-navy-light text-white">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Tool Matrix by Department
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {stage1DepartmentTools.map((dept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-l-4 border-uatp-teal pl-4"
                    >
                      <h4 className="font-semibold mb-2 text-uatp-teal">
                        {dept.department}
                      </h4>
                      <div className="space-y-2">
                        {dept.tools.map((tool, i) => (
                          <div key={i} className="text-sm">
                            <span className="font-medium">{tool.name}</span>
                            <span className="text-gray-300"> – {tool.reason}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
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
            Stage 1 AI Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stage1Tools.map((tool, index) => {
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
