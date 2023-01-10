import Image from "next/image"
import styled from "../styles/cart.module.css"
import bagley from "../img/bagley.jpeg"
import {RxCross2} from 'react-icons/rx';

export default function CartComponent(){
  return(
    <div className={styled.cartContainer}>
      <div className={styled.cartBlur}>
        <h1>
          Carrito de compras
          <RxCross2 className="absolute top-[2.3%] right-3 text-blue-700 cursor-pointer" onclick={""}/>
        </h1>
        <div className="absolute flex h-24 w-full mt-7">
         
          <div className={styled.cartInfo}>
            <h2 className="mt-3">Articulo agregado al carrito</h2>
            <h2 className="mt-5">Ar$ 200</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
