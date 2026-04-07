import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Rocket } from 'lucide-react';
import { stagesOverview } from '@/data/stages';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const stageIcons = [Zap, TrendingUp, Rocket];

export function StagesOverview() {
  return (
    <section id="stages" className="py-24 bg-[#0E0E12] text-white relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FBFCFF] mb-6 font-barlow uppercase tracking-wide">
            Three Stages to Become an AI-Ready Organization
          </h2>
          <p className="text-lg text-[#AFB0B3] max-w-3xl mx-auto">
            A structured approach to AI adoption, from quick wins to transformational systems
          </p>
        </motion.div>

        {/* Stage Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stagesOverview.map((stage, index) => {
            const Icon = stageIcons[index];
            const isMiddle = index === 1;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <Card className={`h-full overflow-hidden transition-all duration-400 shadow-none rounded-[12px] ${
                  isMiddle
                    ? 'bg-[#292934] border border-[#EBD698]/30'
                    : 'bg-[#212225] border border-[#404044]'
                } hover:border-[#88898C]`}>
                  {/* Header */}
                  <div className="p-6 border-b border-[#404044]">
                    {/* Stage Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-semibold tracking-widest uppercase ${isMiddle ? 'text-[#EBD698]' : 'text-[#88898C]'}`}>
                        Stage {stage.number}
                      </span>
                      <div className={`px-2 py-0.5 rounded-[4px] text-xs font-medium border ${
                        isMiddle ? 'border-[#EBD698]/40 text-[#EBD698] bg-[#EBD698]/10' : 'border-[#404044] text-[#88898C]'
                      }`}>
                        {stage.tagline}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-[8px] flex items-center justify-center mb-4 ${
                      isMiddle ? 'bg-[#EBD698]/10 border border-[#EBD698]/30' : 'bg-[#292934] border border-[#404044]'
                    }`}>
                      <Icon className={`w-6 h-6 ${isMiddle ? 'text-[#EBD698]' : 'text-[#AFB0B3]'}`} />
                    </div>
                  </div>

                  {/* Content Area */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#FBFCFF] mb-3 font-barlow uppercase leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-[#88898C] text-sm leading-relaxed mb-6">
                      {stage.description}
                    </p>

                    <Button
                      variant="outline"
                      onClick={() => scrollToSection(`#${stage.id}`)}
                      className={`w-full rounded-[4px] text-sm font-medium transition-colors duration-250 ${
                        isMiddle
                          ? 'bg-transparent text-[#EBD698] border-[#EBD698]/40 hover:bg-[#EBD698]/10 hover:text-[#EBD698]'
                          : 'bg-transparent text-[#AFB0B3] border-[#404044] hover:bg-[rgba(148,149,152,0.12)] hover:text-[#FBFCFF]'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Connecting Arrow */}
                {index < stagesOverview.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#404044]" strokeWidth={2} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#88898C] text-sm">
            Each stage builds on the previous, creating a comprehensive AI strategy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
