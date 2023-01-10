import Link from "next/link"
import styled from "../styles/header.module.css"
import { FiShoppingCart } from 'react-icons/fi';

export default function Header(props){
  return(
    <div>
      <div className={styled.container}>
        {/*Logo*/}
        {props.home && 
        <div className={styled.linksContainer}>
          <Link href="#" className={styled.link}><p>Inicio</p></Link>
          <Link href="#" className={styled.link}><p>Mercado</p></Link>
          <Link href="#" className={styled.link}><p>Footer</p></Link>
        </div>
        }
        <div className={styled.cartContainer}>
          <button className={styled.cartButton}>
            <FiShoppingCart className={styled.cart}/>
          </button>
        </div>
      </div>
    </div>
  )
}