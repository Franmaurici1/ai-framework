import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Zap, TrendingUp, Rocket } from 'lucide-react';

const stageBadges = [
  { label: 'Stage 1 – Market Tools' },
  { label: 'Stage 2 – Quick-Win Automations' },
  { label: 'Stage 3 – Tailored AI Systems' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0E12] pt-16"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#FBFCFF 1px, transparent 1px), linear-gradient(90deg, #FBFCFF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FBFCFF]"
          >
            {/* Stage Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {stageBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="px-3 py-1.5 border border-[#404044] text-[#AFB0B3] text-xs font-medium rounded-[4px] tracking-wide"
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-barlow uppercase tracking-wide">
              An AI Adoption Framework
              <br />
              <span className="text-[#EBD698]">Tailored for Porsche Design</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-[#AFB0B3] mb-10 leading-relaxed font-inter">
              Three stages to safely scale AI across products, vendors, and teams.
            </p>
          </motion.div>

          {/* Right Column: Framework Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-[#212225] border border-[#404044] p-8 rounded-[12px] shadow-none">
              <div className="flex flex-col items-center space-y-8">
                {/* Porsche Design Logo */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="bg-white px-8 py-4 rounded-[4px]"
                >
                  <img
                    src="/porsche-design-logo.png"
                    alt="Porsche Design Logo"
                    className="h-10 w-auto"
                  />
                </motion.div>

                {/* Three Stages Visual */}
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { icon: Zap, label: 'Foundation' },
                    { icon: TrendingUp, label: 'Acceleration' },
                    { icon: Rocket, label: 'Transformation' },
                  ].map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-14 h-14 rounded-[8px] flex items-center justify-center mb-3 border border-[#404044] ${
                        index === 1 ? 'bg-[#EBD698]/10 border-[#EBD698]/30' : 'bg-[#292934]'
                      }`}>
                        <stage.icon className={`w-6 h-6 ${index === 1 ? 'text-[#EBD698]' : 'text-[#AFB0B3]'}`} />
                      </div>
                      <span className="text-xs font-medium text-[#88898C] text-center tracking-wide">{stage.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="w-full h-px bg-[#404044]"
                />

                <p className="text-center text-sm text-[#88898C] font-inter">
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
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-[#404044] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#88898C] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
