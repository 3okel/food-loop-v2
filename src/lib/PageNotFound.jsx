import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
export default function PageNotFound(){const {isRTL}=useLanguage(); return <div className="notfound"><div><h1>404</h1><p>{isRTL?'الصفحة غير موجودة':'Page not found'}</p><Link className="btn btn-primary" to="/">{isRTL?'العودة للرئيسية':'Go Home'}</Link></div></div>}
