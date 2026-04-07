import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, FileText, Rocket } from 'lucide-react';
import { challenges } from '@/data/stages';

const iconMap = {
  target: Target,
  'file-text': FileText,
  rocket: Rocket,
};

export function Challenge() {
  return (
    <section id="challenge" className="py-24 bg-[#EEEFF2]">
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
            The Three-Step Methodology Driving AI Success
          </h2>
          <p className="text-lg text-[#535457] max-w-3xl mx-auto">
            For each stage, we <span className="font-semibold text-[#010205]">Assess</span> high-impact opportunities, <span className="font-semibold text-[#010205]">Plan</span> strategic implementation paths, and <span className="font-semibold text-[#010205]">Execute</span> to deliver measurable ROI—ensuring every AI investment creates real business value
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = iconMap[challenge.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#D8D8DB] border-l-4 border-l-[#010205] bg-white shadow-none rounded-[8px] hover:bg-[#EEEFF2] transition-colors duration-250">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#010205] rounded-[4px] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#FBFCFF]" />
                    </div>
                    <CardTitle className="text-xl text-[#010205] font-barlow uppercase tracking-wide">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#535457] mb-4 text-sm leading-relaxed">{challenge.description}</p>
                    <ul className="space-y-2">
                      {challenge.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#EBD698] mr-2 mt-1 font-bold">—</span>
                          <span className="text-sm text-[#535457]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
