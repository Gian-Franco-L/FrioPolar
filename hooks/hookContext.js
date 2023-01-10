import { useState } from "react"

const hookContext = () =>{
  const [selectedImg, setSelectedImg] = useState("first")
  return{
    selectedImg,
    setSelectedImg
  }
}

export default hookContext