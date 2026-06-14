export function Button(props){return <button {...props} />}
export function Input(props){return <input {...props} />}
export function Textarea(props){return <textarea {...props} />}
export function Badge(props){return <span {...props} />}
export default function Component({children,...props}){return <div {...props}>{children}</div>}
