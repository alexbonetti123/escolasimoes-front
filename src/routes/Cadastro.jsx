import React, {useState} from "react"
import { novoUsuario } from "../api/api"

const Cadastro = () => {
    let [nome, setNome] = useState("")
    let [email, setEmail] = useState("")
    let [senha, setSenha] = useState("")
    const criarUsuario = async() => {
        const json = await novoUsuario(nome, email, senha)
        localStorage.setItem("token", json)
    }
    return (
        <div>
            <h1>Crie sua conta</h1>
            <form>
                <input type="text" name="nome" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />
                <button type="button" onClick={criarUsuario}>Criar conta</button>
            </form>
        </div>
    )
}

export default Cadastro