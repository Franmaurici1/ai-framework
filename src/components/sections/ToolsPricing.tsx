import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { pricingSummaryData } from '@/data/stages';

export function ToolsPricing() {
  return (
    <section id="tools-pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#010205] mb-4 font-barlow uppercase tracking-wide">
            Tools & Pricing Overview
          </h2>
          <p className="text-lg text-[#535457] max-w-3xl mx-auto">
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
          <Card className="overflow-hidden border border-[#D8D8DB] rounded-[12px] shadow-none">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#010205] hover:bg-[#010205]">
                  <TableHead className="text-[#FBFCFF] font-semibold uppercase tracking-wide text-xs">Stage</TableHead>
                  <TableHead className="text-[#FBFCFF] font-semibold uppercase tracking-wide text-xs">Core Tools</TableHead>
                  <TableHead className="text-[#FBFCFF] font-semibold uppercase tracking-wide text-xs">Price Range</TableHead>
                  <TableHead className="text-[#FBFCFF] font-semibold uppercase tracking-wide text-xs">Why It's Recommended</TableHead>
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
                    className="hover:bg-[#EEEFF2] border-b border-[#D8D8DB] transition-colors duration-250"
                  >
                    <TableCell className="font-semibold text-[#010205] text-sm">
                      {row.stage}
                    </TableCell>
                    <TableCell>
                      <ul className="space-y-1">
                        {row.coreTools.map((tool, i) => (
                          <li key={i} className="text-sm text-[#535457]">
                            — {tool}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="font-semibold text-[#010205] text-sm">
                      {row.priceRange}
                    </TableCell>
                    <TableCell className="text-sm text-[#535457]">
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
              <Card className="p-6 border border-[#D8D8DB] rounded-[8px] shadow-none">
                <h3 className="text-lg font-bold text-[#010205] mb-4 border-b border-[#D8D8DB] pb-2 font-barlow uppercase tracking-wide">
                  {row.stage}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#010205] mb-2 text-xs uppercase tracking-wide">Core Tools:</h4>
                    <ul className="space-y-1">
                      {row.coreTools.map((tool, i) => (
                        <li key={i} className="text-sm text-[#535457]">
                          — {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#010205] mb-1 text-xs uppercase tracking-wide">Price Range:</h4>
                    <p className="text-lg font-bold text-[#010205]">{row.priceRange}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#010205] mb-1 text-xs uppercase tracking-wide">Why Recommended:</h4>
                    <p className="text-sm text-[#535457]">{row.whyRecommended}</p>
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
          <div className="inline-block px-8 py-4 bg-[#EEEFF2] border border-[#D8D8DB] rounded-[4px]">
            <p className="text-sm text-[#535457]">
              <strong className="text-[#010205]">Note:</strong> All pricing estimates are approximations based on current market rates. Actual costs may vary based on negotiated enterprise agreements and usage patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
