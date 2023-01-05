import Image from "next/image"
import harina from "../img/harina.jpeg"
import bagley from "../img/bagley.jpeg"
import biscuit from "../img/biscuit.jpeg"
import styled from "../styles/choice.module.css"

export default function PurchaseChoice (){
  return(
    <div className={styled.container}>
      <div className={styled.card}>
        <div className={styled.poster}>
          <Image src={harina} alt="harina" />
        </div>
        <div className={styled.details}>
          <h1>Harina</h1>
          <h3>Harina de trigo tipo 000</h3>
          <h5>Enriquecida segun ley n° 25.630. Elaborado y envasado por Hj NAVAS. Ruta Nac n° 3km 297.5 azul - PCIA de Buenos Aires Argentina.</h5>
        </div>
      </div>
      <div className={styled.card}>
        <div className={styled.poster}>
          <Image src={bagley} alt="harina" />
        </div>
        <div className={styled.details}>
          <h1>Bagley</h1>
          <h3>Con salvado de trigo</h3>
          <h5>Horneamos nuestras galletitas con ingredientes seleccionados para que disfrutes una propuesta con sabores y texturas unicos.</h5>
        </div>
      </div>
      <div className={styled.card}>
        <div className={styled.poster}>
          <Image src={biscuit} alt="harina" />
        </div>
        <div className={styled.details}>
          <h1>Biscuits</h1>
          <h3>Desayunos y meriendas</h3>
          <h5>Bizcochos dulces. Sabor limon. 0% grasas trans. 130g, contiene 10 unidades. Industria Argentina.</h5>
        </div>
      </div>
    </div>
  )
}