import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import md5 from 'md5'
import { useHistory } from 'react-router'
import { validarToken } from '../api/api'

const Contato = () => {
    let [privs, setPrivs] = useState(false)
    const history = useHistory()
    const verificarLogin = async() => {
        setPrivs(false)
        let token = localStorage.getItem("token")
        let hash = localStorage.getItem("hash")
        if(token){
            const json = await validarToken(token)
            if(json === "OK"){
                console.log("token ok")
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
    return(
        <div>
            <Navbar privs={privs} abaAtual="Contato"/>
            <h1>Contato</h1>
        </div>
    )
}

export default Contato