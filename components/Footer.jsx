import styled from "../styles/footer.module.css"
import { useTask } from "../context/AppContext"
import nextConfig from "../next.config";



export default function Footer(){
  const {
    logPassword,
    setLogPassword
  } = useTask()

  function signIn(event){
    event.preventDefault()
    if(logPassword === nextConfig.env.password){
      console.log("si");
    }
  }


  return(
    <div className={styled.container}>
      <div className={styled.adminSection}>
        <label htmlFor="password" />
        <input
          className={styled.input}
          name="password"
          type="password"
          id="password"
          placeholder="Contraseña"
          onChange={({target}) => setLogPassword(target.value)}
          required
        />
        <button className={styled.button} onClick={(event) => signIn(event)}>Acceder</button>
      </div>
    </div>
  )
}