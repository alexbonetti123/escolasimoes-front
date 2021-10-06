import React, {useState, useEffect} from "react"
import md5 from "md5"
import { useHistory } from "react-router"
import { validarToken } from "../api/api"
import Navbar from "../components/Navbar"

const Sobre = () => {
    let [privs, setPrivs] = useState(false)
    const history = useHistory()
    const verificarLogin = async() => {
        setPrivs(false)
        let token = localStorage.getItem("token")
        let hash = localStorage.getItem("hash")
        if(token){
            const json = await validarToken(token)
            if(json === "OK"){
                console.log("Token ok")
                if(hash === md5("OK"))
                    setPrivs(true)
            }
            else
                history.push("Login")
        }else {
            history.push("Login")
        }
    }
    useEffect(verificarLogin, [])
    return (
        <div>
            <Navbar privs={privs} abaAtual="Sobre"/>
            <h1>Sobre</h1>
        </div>
    )
}

export default Sobre