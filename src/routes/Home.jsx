import React, {useEffect, useState} from "react"
import Navbar from "../components/Navbar"
import { getPosts, validarToken, getImages } from "../api/api"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import {v4} from "uuid"
import md5 from "md5"

export default () => {
    let [posts, setPosts] = useState([])
    let [privs, setPrivs] = useState(false)
    let [imagens, setImagens] = useState([])
    const history = useHistory()
    const verificarLogin = async() => {
        setPrivs(false)
        let token = localStorage.getItem("token")
        let hash = localStorage.getItem("hash")
        if(token){
            const json = await validarToken(token)
            if(json === "OK")
                if(hash === md5("OK")){
                    setPrivs(true)
                    buscarPosts()
                }else {
                    buscarPosts()
                }
            else
                history.push("Login")
        }else {
            history.push("Login")
        }
    }
    const buscarPosts = async() => {
        setPosts([])
        const json = await getPosts()
        setPosts(json)
        buscarImagens()
    }
    const buscarImagens = async() => {
        setImagens([])
        const json = await getImages()
        console.log(json)
    }
    useEffect(verificarLogin, [])
    return (
        <div>
            <Navbar privs={privs} abaAtual="Home"/>
            {posts.map((post, i) => {
                return (
                    <>
                        <Link to={"Post/"+post.id}><h2 key={v4()}>{post.titulo}</h2></Link>
                        
                    </>
                )
            })}
        </div>
    ) 
}
