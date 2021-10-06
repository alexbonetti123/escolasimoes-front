import React from "react"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import Preload from "./routes/Preload"
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Post from "./routes/Post"
import Postagens from "./routes/Postagens"

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Preload />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>
                <Route path="/contato">
                    <Contato />
                </Route>
                <Route path="/sobre">
                    <Sobre />
                </Route>
                <Route path="/post/:id">
                    <Post />
                </Route>
                <Route path="/postagens">
                    <Postagens />
                </Route>
            </Switch>
        </Router>
    ) 
}