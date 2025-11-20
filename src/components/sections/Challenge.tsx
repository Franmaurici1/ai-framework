import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Layers, Puzzle, AlertTriangle } from 'lucide-react';
import { challenges } from '@/data/stages';

const iconMap = {
  layers: Layers,
  puzzle: Puzzle,
  'alert-triangle': AlertTriangle,
};

export function Challenge() {
  return (
    <section id="challenge" className="py-24 bg-gray-50">
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
            Why UATP Needs a Structured AI Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Without a clear framework, AI adoption becomes fragmented, costly, and risky
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-uatp-teal">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-uatp-navy">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    <ul className="space-y-2">
                      {challenge.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-uatp-teal mr-2 mt-1">•</span>
                          <span className="text-sm text-gray-700">{bullet}</span>
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
