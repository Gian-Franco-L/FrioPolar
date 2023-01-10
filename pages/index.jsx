import Header from "../components/Header"
import Banner  from "../components/Banner"
import AnimatedScroll from "../components/AnimatedScroll"
import ProductTittle from "../components/ProductTittle"
import PurchaseChoice from "../components/PurchaseChoice"
import CartComponent from "../components/CartComponent"
import { useTask } from "../context/AppContext"


export default function Home() {
  const {} = useTask()
  return (
      <div className="bg-slate-200">
        <Header home={"home"} />
        <CartComponent />
        <Banner />
        <AnimatedScroll />
        <ProductTittle />
        <PurchaseChoice />
      </div>
  )
}