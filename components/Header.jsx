import Link from "next/link"
import styled from "../styles/header.module.css"
import { BsCartCheck } from 'react-icons/bs';
import { BsCartDash } from 'react-icons/bs';
import { useTask } from "../context/AppContext"

export default function Header(props){

  const {
    cartSwitch,
    setCartSwitch
  } = useTask()

  function openCart(){
    setCartSwitch("on")
    props.container.current.style.transition = "2s"
    props.container.current.style.transitionDelay = "0.3s"
    props.container.current.style.top = "10.5%"
    props.background.current.style.transition = "2s"
    props.background.current.style.transitionDelay = "0.3s"
    props.background.current.style.top = "10.5%"
    props.blur.current.style.transition = "2s"
    props.blur.current.style.transitionDelay = "0.3s"
    props.blur.current.style.top = "10.5%"
  }

  function closeCart(){
    setCartSwitch("off")
    props.container.current.style.transition = "2s"
    props.container.current.style.transitionDelay = "0.3s"
    props.container.current.style.top = "-80%"
    props.background.current.style.transition = "2s"
    props.background.current.style.transitionDelay = "0.3s"
    props.background.current.style.top = "-80%"
    props.blur.current.style.transition = "2s"
    props.blur.current.style.transitionDelay = "0.3s"
    props.blur.current.style.top = "-80%"
  }

  return(
    <div className="scroll-smooth">
      <div className={styled.container}>
        {/*Logo*/}
        {props.home && 
        <div className={styled.linksContainer}>
          <Link href="/" className={styled.link}><p>Inicio</p></Link>
          <Link href="#products" className={styled.link}><p>Productos</p></Link>
          <Link href="#" className={styled.link}><p>Footer</p></Link>
        </div>
        }
        <div className={styled.cartContainer}>
          <button className={styled.cartButton}>
            {cartSwitch === "off"
              ? <BsCartCheck className={styled.cart} onClick={openCart}/>
              : <BsCartDash className={styled.cart} onClick={closeCart}/>
            }
          </button>
        </div>
      </div>
    </div>
  )
}