import React, {useState} from "react"
import {Link} from "react-router-dom"
import { login } from "../api/api"
import { useHistory } from "react-router"
import md5 from "md5"

const Login = () => {
    const history = useHistory()
    let [email, setEmail] = useState("")
    let [senha, setSenha] = useState("")
    const logar = async() => {
        const json = await login(email, senha)
        localStorage.setItem("token", json.token)
        localStorage.setItem("hash", md5(json.msg))
        history.push("Home")
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" name="senha" onChange={e => setSenha(e.target.value)}/> 
                <button type="button" onClick={logar}>Entrar</button>
                <br/>
                <span>Não possui uma conta?</span><Link to="Cadastro">Clique aqui</Link>
            </form>
        </div>
    )
}

export default Login