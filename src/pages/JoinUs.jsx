import { Link } from 'react-router-dom'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import { useLanguage } from '@/hooks/useLanguage'
export default function JoinUs(){const {isRTL}=useLanguage(); return <section className="section"><div className="container"><SectionHeader title={isRTL?'انضم إلى FOOD LOOP':'Join FOOD LOOP'} subtitle={isRTL?'كن جزءاً من دورة غذائية مستدامة في الأردن.':'Be part of a sustainable food loop in Jordan.'}/><div className="card pad" style={{textAlign:'center'}}><p>{isRTL?'نرحب بالمزارعين والأسواق والمطاعم والمتطوعين.':'We welcome farmers, markets, restaurants, and volunteers.'}</p><Link className="btn btn-primary" to="/contact">{isRTL?'تواصل معنا':'Contact Us'}</Link></div></div></section>}
