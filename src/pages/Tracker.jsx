import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, Scissors, Recycle, FlaskConical, Flower2, CheckCircle2, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import { trackerBatches } from '@/data/mockData';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const stageIcons = [Package, Scissors, Recycle, FlaskConical, Flower2, CheckCircle2];

export default function Tracker() {
  const { t, lang, isRTL } = useLanguage();
  const [searchId, setSearchId] = useState('');
  const [selectedBatch, setSelectedBatch] = useState(null);

  const filteredBatches = searchId
    ? trackerBatches.filter(b => b.id.toLowerCase().includes(searchId.toLowerCase()))
    : trackerBatches;

  return (
    <div>
      <section className="py-24 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t('tracker.title')} subtitle={t('tracker.subtitle')} />
          <div className="max-w-md mx-auto relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-muted-foreground`} />
            <Input
              placeholder={isRTL ? 'ابحث برقم الدفعة...' : 'Search by batch ID...'}
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className={`${isRTL ? 'pr-12 font-arabic' : 'pl-12'} h-12 rounded-full`}
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Batch List */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className={`font-bold text-lg mb-4 ${isRTL ? 'font-arabic' : 'font-heading'}`}>
                {isRTL ? 'الدفعات' : 'Batches'}
              </h3>
              {filteredBatches.map((batch, i) => (
                <motion.button
                  key={batch.id}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedBatch(batch)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedBatch?.id === batch.id ? 'border-primary bg-primary/5 shadow-md' : 'border-border bg-card hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-sm font-mono">{batch.id}</p>
                    <Badge variant="secondary" className={batch.currentStage >= 5 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}>
                      {batch.currentStage >= 5 ? (isRTL ? 'مكتمل' : 'Complete') : (isRTL ? 'قيد التنفيذ' : 'In Progress')}
                    </Badge>
                  </div>
                  <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {lang === 'ar' ? batch.sourceAr : batch.source}
                  </p>
                  <p className={`text-xs text-muted-foreground mt-1 ${isRTL ? 'font-arabic' : ''}`}>
                    {batch.quantityKg} kg · {lang === 'ar' ? batch.vegetableTypeAr : batch.vegetableType}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Batch Detail */}
            <div className="lg:col-span-2">
              {selectedBatch ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className={`font-bold text-xl ${isRTL ? 'font-arabic' : 'font-heading'}`}>{selectedBatch.id}</h3>
                      <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>
                        {lang === 'ar' ? selectedBatch.sourceAr : selectedBatch.source} · {selectedBatch.quantityKg} kg
                      </p>
                    </div>
                    {selectedBatch.output.compostKg > 0 && (
                      <div className={`text-right ${isRTL ? 'text-left' : ''}`}>
                        <p className={`text-xs text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>{isRTL ? 'المخرجات' : 'Output'}</p>
                        <p className="text-sm font-bold text-primary">{selectedBatch.output.compostKg}kg {isRTL ? 'سماد' : 'compost'}</p>
                        {selectedBatch.output.seedlings > 0 && (
                          <p className="text-sm font-bold text-primary">{selectedBatch.output.seedlings} {isRTL ? 'شتلة' : 'seedlings'}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Timeline */}
                  <div className="space-y-0">
                    {selectedBatch.stages.map((stage, i) => {
                      const StageIcon = stageIcons[i];
                      return (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              stage.complete ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                            }`}>
                              {stage.complete ? <StageIcon className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                            </div>
                            {i < selectedBatch.stages.length - 1 && (
                              <div className={`w-0.5 h-8 mt-1 ${stage.complete ? 'bg-primary/30' : 'bg-border'}`} />
                            )}
                          </div>
                          <div className="pb-6">
                            <p className={`font-bold text-sm ${stage.complete ? '' : 'text-muted-foreground'} ${isRTL ? 'font-arabic' : ''}`}>
                              {lang === 'ar' ? stage.nameAr : stage.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{stage.date || (isRTL ? 'في الانتظار' : 'Pending')}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[400px] rounded-2xl bg-card border border-border">
                  <div className="text-center">
                    <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {isRTL ? 'اختر دفعة لعرض التفاصيل' : 'Select a batch to view details'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export function createPageUrl(pageName: string) {
    return '/' + pageName.replace(/ /g, '-');
}
