import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
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
    <section id="stages" className="py-24 bg-white">
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
            Three Stages to Become an AI-Ready Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to AI adoption, from quick wins to transformational systems
          </p>
        </motion.div>

        {/* Stage Cards with Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {stagesOverview.map((stage, index) => {
            const Icon = stageIcons[index];
            const colorGradient = stageColors[index];

            return (
              <div key={stage.id} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative z-10 w-full md:w-80"
                >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-uatp-teal bg-white">
                  {/* Stage Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${colorGradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {stage.number}
                  </div>

                  <CardHeader className="pt-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-uatp-navy" />
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${colorGradient} text-white text-xs font-semibold mb-3`}>
                      {stage.tagline}
                    </div>
                    <CardTitle className="text-xl text-uatp-navy text-center">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {stage.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="justify-center pb-6">
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection(`#${stage.id}`)}
                      className="group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
                </motion.div>

                {/* Arrow between stages (hidden on mobile, shown on desktop) */}
                {index < stagesOverview.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="hidden md:block mx-4"
                  >
                    <ArrowRight className="w-8 h-8 text-uatp-teal" strokeWidth={3} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Each stage builds on the previous, creating a comprehensive AI strategy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
