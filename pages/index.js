import React, { useRef } from "react"
import Header from "../components/Header"
import CartComponent from "../components/CartComponent"
import Banner  from "../components/Banner"
import AnimatedScroll from "../components/AnimatedScroll"
import ProductTittle from "../components/ProductTittle"
import PurchaseChoice from "../components/PurchaseChoice"
import Footer from "../components/Footer"
import { useTask } from "../context/AppContext"


export default function Home() {

  const {} = useTask()

  const container = useRef(null)
  const background = useRef(null)
  const blur = useRef(null)

  return (
      <div className="bg-slate-200">
        <Header
          home={"home"}
          container={container}
          background={background}
          blur={blur}
        />
        <CartComponent 
          container={container}
          background={background}
          blur={blur}
        />
        <Banner />
        <AnimatedScroll />
        <ProductTittle />
        <PurchaseChoice />
        <Footer />
      </div>
  )
}