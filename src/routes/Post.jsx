import React, {useState, useEffect} from "react"
import { useParams } from "react-router"
import { getPost } from "../api/api"

const Post = () => {
    const params = useParams()
    let [post, setPost] = useState([])
    const buscarPost = async() => {
        setPost([])
        let json = await getPost(params.id)
        setPost(json)
    }
    useEffect(buscarPost, [])
    return (
        <div>
            <h1>{post.titulo}</h1>
            <p>{post.descricao}</p>
            <legend>{post.autor}</legend>
        </div>
    )
}

export default Post