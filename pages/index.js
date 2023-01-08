import Header from "../components/Header"
import Banner  from "../components/Banner"
import AnimatedScroll from "../components/AnimatedScroll"
import ProductTittle from "../components/ProductTittle"
import PurchaseChoice from "../components/PurchaseChoice"
import { useTask } from "../context/AppContext"


export default function Home() {
  const { asd } = useTask()
  console.log(asd);
  return (
      <div className="">
        <Header />
        <Banner />
        <AnimatedScroll />
        <ProductTittle />
        <PurchaseChoice />
      </div>
  )
}