import { useState } from "react"

const hookContext = () =>{
  const [asd, setAsd] = useState("hola")
  return{
    asd,
    setAsd
  }
}

export default hookContext