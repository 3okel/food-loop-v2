import { useLanguage } from '@/hooks/useLanguage'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import ProcessStep from '@/components/ui-custom/ProcessStep.jsx'
import { processSteps } from '@/data/mockData'
export default function HowItWorks(){const {t,lang}=useLanguage();return <section className="section"><div className="container"><SectionHeader title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} /><div className="grid">{processSteps.map((s,i)=><ProcessStep key={s.title} index={i+1} title={lang==='ar'?s.titleAr:s.title} desc={lang==='ar'?s.descAr:s.desc}/>)}</div></div></section>}
