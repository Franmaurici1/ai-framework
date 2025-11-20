import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, MessageSquare, BarChart3, Database, Cloud, Bot, ExternalLink } from 'lucide-react';
import { stage3Features, stage3Tools } from '@/data/stages';

const featureIcons = [MessageSquare, BarChart3, Database];
const toolIcons = [Database, Cloud, Bot];

export function Stage3() {
  return (
    <section id="stage-3" className="py-24 bg-gradient-to-br from-uatp-navy via-uatp-navy-dark to-uatp-navy-light text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTAgMjBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTIwIDRjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold mb-4 border border-green-500/30">
            Stage 3 – Transformation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Build Game-Changing AI Systems for UATP
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep analysis and significant investment to build tailored AI systems deeply integrated with UATP's data, operations, and strategic goals.
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="flex"
              >
                <Card className="w-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-uatp-teal mr-2">•</span>
                          <span className="text-sm text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      Check it out
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Governance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <Rocket className="w-6 h-6 text-uatp-teal mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Stage 3 Requirements
                  </h4>
                  <p className="text-gray-300">
                    This stage requires deeper governance frameworks, role-based access controls, PCI/PII data protections, comprehensive audit trails, and significant budget commitment. These are transformational systems that create lasting competitive advantages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enterprise AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Stage 3 Enterprise AI Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stage3Tools.map((tool, index) => {
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
                  <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:shadow-xl hover:bg-white/15 transition-all">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-white mb-2">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-gray-300">{tool.description}</p>
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
