import { useState } from "react"

const hookContext = () =>{
  const [selectedImg, setSelectedImg] = useState("first")
  const [cartSwitch, setCartSwitch] = useState("off")
  const [logPassword, setLogPassword] = useState("")
  return{
    selectedImg,
    setSelectedImg,
    cartSwitch,
    setCartSwitch,
    logPassword,
    setLogPassword
  }
}

export default hookContext