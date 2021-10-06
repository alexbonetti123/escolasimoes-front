import getToken from "../service/getToken"
import firebase from "../service/firebase"
const baseURL = "http://localhost:8080"
//Definindo os headers
const headers = new Headers()
headers.set("Accept", "application/json")
headers.set("Content-Type", "application/json")

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("hash")
}

export const novoPost = async (titulo, descricao, dataPost, autor, likes) => {
    headers.set("Authorization", "Bearer " + getToken())
    const req = await fetch(baseURL + "/post", {
        method:"POST",
        headers,
        body:JSON.stringify({titulo, descricao, dataPost, autor, likes})
    })
    return req.json()
}

export const novoUsuario = async(nome, email, senha) => {
    const req = await fetch(baseURL + "/user", {
        method:"POST", 
        headers:headers,
        body:JSON.stringify({nome, email, senha})
    })
    return req.json()
}

export const login = async(email, senha) => {
    const req = await fetch(baseURL + "/user/login", {
        method:"POST",
        headers,
        body:JSON.stringify({email, senha})
    })
    return req.json()
}

export const validarToken = async(token) => {
    const req = await fetch(baseURL + "/token/validar", {
        method:"POST",
        headers,
        body:JSON.stringify({token:"Bearer " + token})
    })
    return req.json()
}

export const getPosts = async() => {
    headers.set("Authorization", "Bearer " + getToken())
    const req = await fetch(baseURL + "/posts", {
        method:"GET",
        headers
    })
    return req.json()
}

export const getPost = async(id) => {
    headers.set("Authorization", "Bearer " + getToken())
    const req = await fetch(baseURL + "/post/" + id, {
        method:"GET",
        headers
    })
    return req.json()
}

export const getImages = async() => {
    headers.set("Authorization", "Bearer " + getToken())
    const req = await fetch(baseURL + "/images", {
        method:"GET",
        headers
    })
    return req.json()
}

export const postImage = async (idPost, nome, data) => {
    headers.set("Authorization", "Bearer " + getToken())
    const req = await fetch(baseURL + "/image", {
        method:"POST", 
        headers,
        body:JSON.stringify({idPost, nome, data})
    })
    return req.json()
}

