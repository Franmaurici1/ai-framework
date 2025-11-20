import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { pricingSummaryData } from '@/data/stages';

export function ToolsPricing() {
  return (
    <section id="tools-pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-uatp-navy mb-4">
            Tools & Pricing Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive view of recommended tools and estimated costs across all three stages
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-uatp-navy hover:bg-uatp-navy">
                  <TableHead className="text-white font-bold">Stage</TableHead>
                  <TableHead className="text-white font-bold">Core Tools</TableHead>
                  <TableHead className="text-white font-bold">Price Range</TableHead>
                  <TableHead className="text-white font-bold">Why It's Recommended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingSummaryData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <TableCell className="font-semibold text-uatp-navy">
                      {row.stage}
                    </TableCell>
                    <TableCell>
                      <ul className="space-y-1">
                        {row.coreTools.map((tool, i) => (
                          <li key={i} className="text-sm text-gray-700">
                            • {tool}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="font-semibold text-uatp-teal">
                      {row.priceRange}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {row.whyRecommended}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {pricingSummaryData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-uatp-navy mb-4 border-b border-gray-200 pb-2">
                  {row.stage}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Core Tools:</h4>
                    <ul className="space-y-1">
                      {row.coreTools.map((tool, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Price Range:</h4>
                    <p className="text-lg font-bold text-uatp-teal">{row.priceRange}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Why Recommended:</h4>
                    <p className="text-sm text-gray-600">{row.whyRecommended}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-uatp-teal/10 to-uatp-green/10 border-uatp-teal/30">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> All pricing estimates are approximations based on current market rates. Actual costs may vary based on negotiated enterprise agreements and usage patterns.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
