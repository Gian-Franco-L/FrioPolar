import Link from "next/link"
import AnimatedScroll from "./AnimatedScroll"

export default function Header(){
  return(
    <div className="bg-slate-50">
      <div className="relative h-20 w-auto bg-slate-200">
        {/*Logo*/}
        <div className="absolute right-0 bottom-1">
          <Link href="#" className="mr-5">Inicio</Link>
          <Link href="#" className="mr-5">Mercado</Link>
          <Link href="#" className="mr-5">Footer</Link>
        </div>
      </div>
      <AnimatedScroll />
    </div>
  )
}