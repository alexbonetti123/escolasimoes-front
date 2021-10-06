import React, {useEffect} from "react"
import { useHistory } from "react-router"
import { validarToken } from "../api/api"

const Preload = () => {
    let history = useHistory()
    const verificarLogin = async() => {
        let token = localStorage.getItem("token")
        if(token){
            const json = await validarToken(token)
            if(json === "OK")
                history.push("Home")
            else
                history.push("Login")
        }else {
            history.push("Login")
        }
    }
    useEffect(verificarLogin, [])
    return (
        //Aqui pode ser uma imagem
        <div>
            <h1>Verificando seu login</h1>
        </div>
    )
}

export default Preload