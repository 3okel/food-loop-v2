import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator as CalcIcon, Leaf, Recycle, Wind, Sprout } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import GrowthButton from '@/components/ui-custom/GrowthButton';

const calculateImpact = (kgWaste) => ({
  compost: (kgWaste * 0.35).toFixed(1),
  seedlings: Math.floor(kgWaste / 2),
  co2Saved: (kgWaste * 2.5).toFixed(1),
  landfillAvoided: (kgWaste * 0.9).toFixed(1),
});

export default function CalculatorPage() {
  const { t, isRTL } = useLanguage();
  const [kgWaste, setKgWaste] = useState(100);
  const [showResults, setShowResults] = useState(false);

  const results = calculateImpact(kgWaste);

  const resultCards = [
    { icon: Leaf, label: t('calculator.compostOutput'), value: `${results.compost} kg`, color: 'bg-primary/10 text-primary' },
    { icon: Recycle, label: t('calculator.wasteAvoided'), value: `${results.landfillAvoided} kg`, color: 'bg-accent/10 text-accent' },
    { icon: Wind, label: t('calculator.co2Saved'), value: `${results.co2Saved} kg`, color: 'bg-emerald-500/10 text-emerald-600' },
    { icon: Sprout, label: t('calculator.seedlingsProduced'), value: `${results.seedlings}`, color: 'bg-lime-500/10 text-lime-600' },
  ];

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('calculator.title')} subtitle={t('calculator.subtitle')} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-10 rounded-3xl bg-card border border-border mb-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CalcIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`font-bold text-xl ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {t('calculator.inputLabel')}
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  value={kgWaste}
                  onChange={(e) => setKgWaste(Math.max(0, Number(e.target.value)))}
                  className="text-2xl font-bold text-center h-16 max-w-[200px]"
                  min="0"
                  max="10000"
                />
                <span className={`text-lg text-muted-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'كجم' : 'kg'}
                </span>
              </div>

              <Slider
                value={[kgWaste]}
                onValueChange={([val]) => setKgWaste(val)}
                max={5000}
                min={0}
                step={10}
                className="w-full"
              />

              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 kg</span>
                <span>1000 kg</span>
                <span>2500 kg</span>
                <span>5000 kg</span>
              </div>

              <GrowthButton onClick={() => setShowResults(true)} className="w-full justify-center">
                {t('calculator.calculate')}
              </GrowthButton>
            </div>
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {showResults && kgWaste > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <h3 className={`font-bold text-lg text-center mb-6 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                  {isRTL ? `تأثير تحويل ${kgWaste} كجم من الخضار والفواكه التالفة` : `Impact of converting ${kgWaste} kg of damaged produce`}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {resultCards.map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border text-center"
                    >
                      <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mx-auto mb-3`}>
                        <card.icon className="w-6 h-6" />
                      </div>
                      <p className={`text-2xl sm:text-3xl font-bold mb-1 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                        {card.value}
                      </p>
                      <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>
                        {card.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center mt-6"
                >
                  <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL
                      ? `بتحويل ${kgWaste} كجم من الخضار والفواكه التالفة، يمكنك إنتاج ${results.compost} كجم من السماد العضوي، وتوفير ${results.co2Saved} كجم من انبعاثات CO₂، وزراعة ${results.seedlings} شتلة جديدة.`
                      : `By converting ${kgWaste} kg of damaged produce, you can produce ${results.compost} kg of organic compost, save ${results.co2Saved} kg of CO₂ emissions, and grow ${results.seedlings} new seedlings.`}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
