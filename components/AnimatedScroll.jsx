import Image from "next/image"
import firstImg from "../img/grande.webp"
import secondImg from "../img/calleoscura.webp"
import thirdImg from "../img/españa.webp"
import fourthImg from "../img/hielo.webp"
import fifthImg from "../img/jugo.webp"
import sixthImg from "../img/6.jpg"
import styled from "../styles/aos.module.css"
import { useContext } from "react"


export default function AnimatedScroll(){
  return(
    <>
      <div className={styled.hero}>
        <div className={styled.container}>
          <div className={styled.evento}>
            <div className={styled.foto} data-aos="fade-right">
              <Image src={firstImg} alt="1" width="fill" height="fill" />
            </div>
            <h3 className={styled.fecha} data-aos="fade-top">Frío Polar es una empresa joven y familiar dedicándonos a la fabricación y distribución de hielo en distintas formas  Seco- Cilíndrico - Partido - Escamas y Barras. Distribuidor oficial de las mejores marcas de jugos naturales en bidones de 5Lts de varios sabores.</h3>
          </div>
          <div className={styled.evento}>
            <div className={styled.foto} data-aos="fade-left">
              <Image src={secondImg} alt="2" width="fill" height="fill" />
            </div>
            <h3 className={styled.fecha} data-aos="fade-top">La mayoría de nuestros clientes utiliza este servicio, que contribuye a nuestro éxito. Con nuestros servicios buscamos cubrir todas sus necesidades. Nos enorgullece nuestro servicio al cliente y sabemos que nuestro equipo le atenderá con eficiencia. ¿En qué podemos ayudarle?</h3>
          </div>
          <div className={styled.evento}>
            <div className={styled.foto} data-aos="fade-right">
              <Image src={thirdImg} alt="3" width="fill" height="fill" />
            </div>
            <h3 className={styled.fecha} data-aos="fade-top">Queremos que todos nuestros clientes puedan experimentar nuestro nivel de profesionalismo al trabajar con Hielo Frío Polar y ver cómo se diferencia de otros. Tenemos los mejores productos y nuestra atención al cliente es incomparable.</h3>
          </div>
          <div className={styled.evento}>
            <div className={styled.foto} data-aos="fade-left">
              <Image src={fourthImg} alt="4" width="fill" height="fill" />
            </div>
            <h3 className={styled.fecha} data-aos="fade-top">Bolsa Hielo Cilíndrico 15Kg. La Favorita De Nuestros Clientes. Especial Fiestas,comercios y boliches. Descuentos por cantidad</h3>
          </div>
          <div className={styled.evento}>
            <div className={styled.foto} data-aos="fade-right">
              <Image src={fifthImg} alt="5" width="fill" height="fill" />
            </div>
            <h3 className={styled.fecha} data-aos="fade-top">Jugo de naranja 100% exprimido. Este es un Jugo de Naranjas Exprimidas 100% Natural sin agregados conservantes y endulzantes Bidon de 5Lts. Descartable.</h3>
          </div>
        </div>
      </div>
    </>
  )
}