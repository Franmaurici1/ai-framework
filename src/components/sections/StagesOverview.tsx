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
const stageColors = [
  'from-blue-500 to-blue-600',
  'from-teal-500 to-teal-600',
  'from-green-500 to-green-600',
];

export function StagesOverview() {
  return (
    <section id="stages" className="py-24 bg-gradient-to-br from-uatp-navy via-uatp-navy-light to-uatp-teal text-white relative overflow-hidden">
      {/* Background Pattern */}
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Three Stages to Become an AI-Ready Organization
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A structured approach to AI adoption, from quick wins to transformational systems
          </p>
        </motion.div>

        {/* Horizontal Glass Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stagesOverview.map((stage, index) => {
            const Icon = stageIcons[index];
            const colorGradient = stageColors[index];

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15">
                  {/* Tinted Glass Header */}
                  <div className="relative p-6 overflow-hidden">
                    {/* Glass background layer */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-30 backdrop-blur-xl`}></div>
                    <div className="absolute inset-0 backdrop-blur-md bg-white/5"></div>

                    {/* Content above glass */}
                    <div className="relative z-10">
                      {/* Stage Number Badge */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
                          <span className="text-5xl font-bold text-white">{stage.number}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white/40">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Tagline Badge */}
                      <div className="flex justify-center">
                        <div className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider border border-white/40">
                          {stage.tagline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <CardContent className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                      {stage.description}
                    </p>

                    {/* Button */}
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        onClick={() => scrollToSection(`#${stage.id}`)}
                        className="bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Connecting Arrow (Desktop only) */}
                {index < stagesOverview.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-uatp-teal opacity-50" strokeWidth={3} />
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
          <p className="text-gray-300 text-lg">
            Each stage builds on the previous, creating a comprehensive AI strategy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
