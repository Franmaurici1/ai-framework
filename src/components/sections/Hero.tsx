import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Zap, TrendingUp, Rocket } from 'lucide-react';

const stageBadges = [
  { label: 'Stage 1 – Market Tools', color: 'from-blue-500 to-blue-600' },
  { label: 'Stage 2 – Quick-Win Automations', color: 'from-teal-500 to-teal-600' },
  { label: 'Stage 3 – Tailored AI Systems', color: 'from-green-500 to-green-600' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-uatp-navy via-uatp-navy-light to-uatp-teal pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTAgMjBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTIwIDRjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Stage Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {stageBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm font-medium shadow-lg`}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              An AI Adoption Framework
              <br />
              <span className="text-uatp-teal">Tailored for UATP</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Three stages to safely scale AI across products, vendors, and teams.
            </p>
          </motion.div>

          {/* Right Column: Framework Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center space-y-6">
                {/* UATP Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <img
                    src="/uatplogo.png"
                    alt="UATP Logo"
                    className="h-16 w-auto"
                  />
                </motion.div>

                {/* Three Stages Visual */}
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { icon: Zap, label: 'Foundation', color: 'from-blue-500 to-blue-600' },
                    { icon: TrendingUp, label: 'Acceleration', color: 'from-teal-500 to-teal-600' },
                    { icon: Rocket, label: 'Transformation', color: 'from-green-500 to-green-600' },
                  ].map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-2 shadow-lg`}>
                        <stage.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-medium text-white text-center">{stage.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Connecting Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="w-full h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full"
                />

                <p className="text-center text-sm text-gray-300">
                  A structured path to AI excellence
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
