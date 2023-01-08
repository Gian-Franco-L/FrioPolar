import Link from "next/link"
import styled from "../styles/header.module.css"

export default function Header(){
  return(
    <div>
      <div className={styled.container}>
        {/*Logo*/}
        <div className="absolute right-0 bottom-1 pr-20">
          <Link href="#" className="mr-10">Inicio</Link>
          <Link href="#" className="mr-10">Mercado</Link>
          <Link href="#" className="mr-10">Footer</Link>
        </div>
      </div>
    </div>
  )
}