export default function SectionHeader({ title, subtitle, mini }) {
  return <div className="section-head">{mini && <div className="mini">{mini}</div>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
}
