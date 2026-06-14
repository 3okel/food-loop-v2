import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Play } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
export default function BlogCard({ post }) {
  const { lang, isRTL, t } = useLanguage()
  return <article className="blog-card">
    <div className="blog-img" style={{backgroundImage:`url(${post.image})`}}><span className="badge">{post.category}</span>{post.video && <button className="play" aria-label="Play video"><Play fill="currentColor"/></button>}</div>
    <div className="blog-body"><div className="small-muted"><CalendarDays size={14}/> {post.date} · <Clock3 size={14}/> {post.minutes} {t('blog.minRead')}</div><h3>{lang === 'ar' ? post.titleAr : post.title}</h3><p>{lang === 'ar' ? post.excerptAr : post.excerpt}</p><a className="btn btn-soft" href="#">{t('blog.readMore')} {isRTL ? <ArrowLeft size={16}/> : <ArrowRight size={16}/>}</a></div>
  </article>
}
