import React from "react"
import { useHistory } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { logout } from "../api/api"


const NavBar = (props) => {
    const history = useHistory()
    const sair = () => {
        logout()
        history.push("Login")
    }
    return (
        <ul>
            <Link to="Home"><li style={{color:props.abaAtual === "Home" ? "red" : "black"}}>Home</li></Link>
            {props.privs === true && 
                <Link to="Postagens"><li style={{color:props.abaAtual === "Postagens" ? "red" : "black"}}>Postagens</li></Link>
            }
            <Link to="Sobre"><li style={{color:props.abaAtual === "Sobre" ? "red" : "black"}}>Sobre</li></Link>
            <Link to="Contato"><li style={{color:props.abaAtual === "Contato" ? "red" : "black"}}>Contato</li></Link>
            <li><button onClick={sair}>Sair</button></li>
        </ul>
    )
}

export default NavBar