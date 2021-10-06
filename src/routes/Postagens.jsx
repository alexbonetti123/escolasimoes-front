import React, {useEffect, useState} from "react"
import Navbar from "../components/Navbar"
import md5 from "md5"
import { validarToken, postImage, novoPost } from "../api/api"
import { useHistory } from "react-router"

const Postagens = () => {
    let [privs, setPrivs] = useState(false)
    let [url, setUrl] = useState(undefined)
    let [titulo, setTitulo] = useState("")
    let [descricao, setDescricao] = useState("")
    let [dataPost, setDataPost] = useState("")
    let [autor, setAutor] = useState("")
    const history = useHistory()
    const verificarLogin = async() => {
        setPrivs(false)
        let token = localStorage.getItem("token")
        let hash = localStorage.getItem("hash")
        if(token){
            const json = await validarToken(token)
            if(json === "OK")
                if(hash === md5("OK"))
                    setPrivs(true)
            else
                history.push("Login")
        }else {
            history.push("Login")
        }
    }
    const mudarImagem = (event) => {
        let uri = event.target.files[0]
        let blob = new Blob([uri], {type:"image/jpeg"})
        setUrl(blob)
    }
    const enviarImagem = async() => {
        const json = await postImage(1, new Date().getTime + ".jpeg", url)
        console.log(json)
    }
    const fazerPost = async () => {
        const json = await novoPost(titulo, descricao, dataPost, autor, 0)
        console.log(json)
    }
    useEffect(verificarLogin, [])
    return (
        <div>
            <Navbar privs={privs} abaAtual="Postagens" />
            <form>
                <label htmlFor="titulo">Informe o título do post</label>
                <input type="text" name="titulo" onChange={e => setTitulo(e.target.value)}/><br/>
                <label htmlFor="descricao">Informe a descrição do post</label>
                <input type="text" name="descricao" onChange={e => setDescricao(e.target.value)} /><br />
                <label htmlFor="data">Informe a data do post</label>
                <input type="text" name="data" onChange={e => setDataPost(e.target.value)} /><br/>
                <label htmlFor="autor">Digite o nome do autor</label>
                <input type="text" name="autor" onChange={e => setAutor(e.target.value)}/>
            </form>
            <input type="file" onChange={(event) => mudarImagem(event)}/>
            <button type="button" onClick={enviarImagem}>Enviar post</button>
        </div>
    )
}

export default Postagens