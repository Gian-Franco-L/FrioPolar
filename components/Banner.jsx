import Image from "next/image"
import truck from "../img/truck.webp"

export default function Banner (){
  return(
    <div className="relative h-[88vh] mt-24">
      <Image src={truck} alt="asd" fill sizes="100vw" priority/>
    </div>
  )
}