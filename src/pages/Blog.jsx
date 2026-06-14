import { useState } from 'react'
import SectionHeader from '@/components/ui-custom/SectionHeader.jsx'
import BlogCard from '@/components/ui-custom/BlogCard.jsx'
import { blogPosts } from '@/data/mockData'
import { useLanguage } from '@/hooks/useLanguage'
export default function Blog(){const {t,isRTL}=useLanguage(); const [cat,setCat]=useState('all'); const cats=['all','sustainability','composting','agriculture','gardening']; const filtered=cat==='all'?blogPosts:blogPosts.filter(p=>p.category===cat); return <section className="section"><div className="container"><SectionHeader title={t('blog.title')} subtitle={t('blog.subtitle')} /><div className="filter-row">{cats.map(c=><button key={c} className={`tab ${cat===c?'active':''}`} onClick={()=>setCat(c)}>{c==='all'?(isRTL?'الكل':'All'):c}</button>)}</div><div className="grid grid-3">{filtered.map(p=><BlogCard key={p.id} post={p}/>)}</div></div></section>}
