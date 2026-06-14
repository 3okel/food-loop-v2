export default function GrowthButton({ children, variant = 'primary', ...props }) {
  return <button className={`btn ${variant === 'outline' ? 'btn-outline' : variant === 'soft' ? 'btn-soft' : 'btn-primary'}`} {...props}>{children}</button>
}
