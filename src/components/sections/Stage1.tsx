import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, Wrench, Bot, Code2 } from 'lucide-react';
import { stage1Objectives, stage1DepartmentTools, stage1Tools } from '@/data/stages';

const toolIcons = [Wrench, Bot, Code2];

export function Stage1() {
  return (
    <section id="stage-1" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1.5 border border-[#D8D8DB] text-[#535457] rounded-[4px] text-xs font-semibold mb-4 tracking-widest uppercase">
            Stage 1 — Foundation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-6 font-barlow uppercase tracking-wide">
            Use Market Tools, Maximize Impact, Stay in Control
          </h2>
          <p className="text-lg text-[#535457] max-w-3xl">
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
            <Card className="h-full border border-[#D8D8DB] rounded-[12px] shadow-none">
              <CardHeader>
                <CardTitle className="text-xl text-[#010205] font-barlow uppercase tracking-wide">
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
                      <CheckCircle2 className="w-5 h-5 text-[#010205] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#535457] text-sm leading-relaxed">{objective}</span>
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
            <Card className="h-full bg-[#0E0E12] text-white border border-[#404044] rounded-[12px] shadow-none">
              <CardHeader>
                <CardTitle className="text-xl text-[#FBFCFF] font-barlow uppercase tracking-wide">
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
                      className="border-l-2 border-[#EBD698] pl-4"
                    >
                      <h4 className="font-semibold mb-2 text-[#EBD698] text-sm tracking-wide uppercase">
                        {dept.department}
                      </h4>
                      <div className="space-y-2">
                        {dept.tools.map((tool, i) => (
                          <div key={i} className="text-sm">
                            <span className="font-medium text-[#FBFCFF]">{tool.name}</span>
                            <span className="text-[#88898C]"> — {tool.reason}</span>
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
          <h3 className="text-2xl font-bold text-[#010205] mb-6 text-center font-barlow uppercase tracking-wide">
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
                >
                  <Card className="h-full border border-[#D8D8DB] rounded-[12px] shadow-none hover:bg-[#EEEFF2] transition-colors duration-250">
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
