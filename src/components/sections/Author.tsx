import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Mail } from 'lucide-react';

export function Author() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Handwritten Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-8 text-center"
        >
          <p
            className="text-3xl md:text-4xl text-uatp-navy mb-2"
            style={{
              fontFamily: "'Caveat', cursive",
              fontWeight: 400,
              lineHeight: 1.4
            }}
          >
            This AI Framework site was done using AI by:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-uatp-teal to-uatp-green rounded-full blur-lg opacity-30"></div>
                    <img
                      src="https://ca.slack-edge.com/T03G61VPV-U01175Z2B8D-6b3b0b3619c0-512"
                      alt="Francisco Maurici"
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
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
                    <h3 className="text-3xl font-bold text-uatp-navy mb-2">
                      Francisco Maurici
                    </h3>
                    <p className="text-lg text-uatp-teal font-semibold mb-1">
                      Head of Web Department at Distillery
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Framework Author
                    </p>
                  </div>

                    

                    {/* Contact Links */}
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.distillery.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-uatp-navy text-white rounded-lg hover:bg-uatp-navy-dark transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                        <span className="text-sm font-medium">Distillery web site</span>
                      </a>
                      <a
                        href="mailto:francisco.maurici@distillery.com"
                        className="flex items-center space-x-2 px-4 py-2 border-2 border-uatp-teal text-uatp-teal rounded-lg hover:bg-uatp-teal hover:text-white transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                    </div>
                </motion.div>
              </div>

              {/* Bottom Bar - Distillery Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-uatp-navy to-uatp-navy-light text-white py-4 px-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold mb-1">About Distillery</p>
                    <p className="text-xs text-gray-300">
                      A leading technology consultancy specializing in AI integration, web development, and digital transformation
                    </p>
                  </div>
                  <a
                    href="https://distillery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uatp-teal hover:text-uatp-teal-light transition-colors text-sm font-medium"
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
