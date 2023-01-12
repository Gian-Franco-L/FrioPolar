import styled from "../styles/cart.module.css"

export default function CartComponent(props){
  return(
    <div className={styled.cartContainer} ref={props.container}>
      <div className={styled.backgroundOpacity} ref={props.background}/>
      <div className={styled.cartBlur} ref={props.blur}>
        <h1>
          Carrito de compras
        </h1>
        <div className="absolute flex h-24 w-full mt-7">
          <div className={styled.cartInfo}>
            <h2>Articulo agregado al carrito</h2>
            <h2>Ar$ 200</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
