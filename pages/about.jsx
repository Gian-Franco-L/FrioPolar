import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../components/Header"
import { useTask } from "../context/AppContext"
import styled from "../styles/about.module.css"
import harina from "../img/harina.jpeg"
import bagley from "../img/bagley.jpeg"
import biscuit from "../img/biscuit.jpeg"


export default function About(){
  const {
    selectedImg,
    setSelectedImg
  } = useTask()

  useEffect(() =>{
    const mainImage = document.getElementById("mainImg")
    if(selectedImg === "first"){
      mainImage.src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fharina.e0e38beb.jpeg&w=1920&q=75"
      mainImage.srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fharina.e0e38beb.jpeg&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fharina.e0e38beb.jpeg&w=1920&q=75 2x"
    }else if(selectedImg === "second"){
      mainImage.src = "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbagley.ccf7b9fc.jpeg&w=1920&q=75"
      mainImage.srcset = "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbagley.ccf7b9fc.jpeg&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbagley.ccf7b9fc.jpeg&w=1920&q=75 2x"
    }else if(selectedImg === "third"){
      mainImage.src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbiscuit.46310162.jpeg&w=1920&q=75"
      mainImage.srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbiscuit.46310162.jpeg&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbiscuit.46310162.jpeg&w=1920&q=75 2x"
    }
  }, [selectedImg])

  return(
    <div className="bg-slate-300 relative h-screen w-screen">
      <Header />
      <div className={styled.linkBar}><Link href="http://localhost:3000/" className={styled.backLink}>Volver al inicio</Link> | Articulo &gt; eleccion</div>
      <div className={styled.aboutContainer}>
        <div className={styled.mainImage}>
          <Image id="mainImg" src={biscuit} alt="selectedImg" />
        </div>
        <div className="absolute flex justify-between w-[300px] bottom-[2%] left-[6.6%]">
          <div className={styled.firstImage}>
            <Image src={harina} alt="harina" width="fill" height="fill" onMouseEnter={() => setSelectedImg("first")} />
          </div>
          <div className={styled.secondImage}>
            <Image src={bagley} alt="bagley" width="fill" height="fill" onMouseEnter={() => setSelectedImg("second")} />
          </div>
          <div className={styled.thirdImage}>
            <Image src={biscuit} alt="biscuit" width="fill" height="fill" onMouseEnter={() => setSelectedImg("third")} />
          </div>
        </div>
      </div>
    </div>
  )
}