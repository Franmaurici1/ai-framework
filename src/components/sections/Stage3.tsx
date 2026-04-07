import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, MessageSquare, BarChart3, Database, ExternalLink } from 'lucide-react';
import { stage3Features } from '@/data/stages';

const featureIcons = [MessageSquare, BarChart3, Database];

export function Stage3() {

  return (
    <section id="stage-3" className="py-24 bg-[#0E0E12] text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#FBFCFF 1px, transparent 1px), linear-gradient(90deg, #FBFCFF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1.5 border border-[#EBD698]/40 text-[#EBD698] rounded-[4px] text-xs font-semibold mb-4 tracking-widest uppercase">
            Stage 3 — Transformation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-barlow uppercase tracking-wide text-[#FBFCFF]">
            Build Game-Changing AI Systems
          </h2>
          <p className="text-lg text-[#AFB0B3] max-w-3xl mx-auto">
            Deep analysis and significant investment to build tailored AI systems deeply integrated with your data, operations, and strategic goals.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stage3Features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex"
              >
                <Card className="w-full bg-[#212225] border border-[#404044] rounded-[12px] shadow-none hover:border-[#88898C] transition-colors duration-250 flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#292934] border border-[#404044] rounded-[8px] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#EBD698]" />
                    </div>
                    <CardTitle className="text-xl text-[#FBFCFF] font-barlow uppercase tracking-wide">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-[#88898C] mb-4 text-sm leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#EBD698] mr-2 font-bold">—</span>
                          <span className="text-sm text-[#AFB0B3]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent text-[#FBFCFF] border-[#404044] hover:bg-[rgba(148,149,152,0.12)] hover:text-[#FBFCFF] rounded-[4px] text-sm"
                      >
                        Let's build it together
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Requirements Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-[#212225] border border-[#404044] rounded-[8px] shadow-none">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <Rocket className="w-5 h-5 text-[#EBD698] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-[#FBFCFF] mb-2 font-barlow uppercase tracking-wide">
                    Stage 3 Requirements
                  </h4>
                  <p className="text-[#88898C] text-sm leading-relaxed">
                    This stage requires deeper governance frameworks, role-based access controls, PCI/PII data protections, comprehensive audit trails, and significant budget commitment. These are transformational systems that create lasting competitive advantages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
