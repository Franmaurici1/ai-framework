import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Mail } from 'lucide-react';

export function Author() {
  return (
    <section className="py-24 bg-[#EEEFF2]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-8 text-center"
        >
          <p className="text-xl text-[#535457] mb-2 font-inter">
            This AI Framework site was built using AI by:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border border-[#D8D8DB] rounded-[12px] shadow-none bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-8 p-8">
                {/* Left: Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="https://ca.slack-edge.com/T03G61VPV-U01175Z2B8D-6b3b0b3619c0-512"
                    alt="Francisco Maurici"
                    className="w-40 h-40 rounded-[8px] object-cover border border-[#D8D8DB]"
                  />
                </motion.div>

                {/* Right: Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="md:col-span-2 flex flex-col justify-center"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#010205] mb-1 font-barlow uppercase tracking-wide">
                      Francisco Maurici
                    </h3>
                    <p className="text-sm font-semibold text-[#535457] mb-1 uppercase tracking-wide">
                      Head of Web Department at Distillery
                    </p>
                    <p className="text-xs text-[#88898C] mb-4 uppercase tracking-widest">
                      Framework Author
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.distillery.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-[#010205] text-[#FBFCFF] rounded-[4px] hover:bg-[#212225] transition-colors duration-250 text-sm font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Distillery</span>
                    </a>
                    <a
                      href="mailto:francisco.maurici@distillery.com"
                      className="flex items-center space-x-2 px-4 py-2 border border-[#D8D8DB] text-[#010205] rounded-[4px] hover:bg-[#EEEFF2] transition-colors duration-250 text-sm font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#0E0E12] text-white py-4 px-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold mb-0.5 uppercase tracking-widest text-[#FBFCFF]">About Distillery</p>
                    <p className="text-xs text-[#88898C]">
                      A leading technology consultancy specializing in AI integration, web development, and digital transformation
                    </p>
                  </div>
                  <a
                    href="https://distillery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EBD698] hover:text-[#FBFCFF] transition-colors text-sm font-medium ml-6 whitespace-nowrap"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
