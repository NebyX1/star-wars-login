import React, {useContext, useState} from 'react';
import {Context} from "../store/appContext";
import {Navigate} from "react-router-dom"

export const Register = () => {

    const[email,setEmail]=useState("")
    const[user_name,setUser_Name]=useState("")
    const[password,setPassword]=useState("")
    const {store, actions}=useContext(Context)

    function enviarDatos(e) {
        e.preventDefault()
        actions.register(email, user_name, password)
        setEmail("")
        setUser_Name("")
        setPassword("")
        console.log(email, user_name, password)
    }

    return (<> {store.auth === true ? <Navigate to="/"/>:
            <form className='container w-25 text-center' onSubmit={enviarDatos}>
                <h4 className='m-5'>Creación de nuevo usuario</h4>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Dirección de email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
        <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie más</div>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputUserName" className="form-label">Nombe de usuario</label>
        <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="userNameHelp" value={user_name} 
        onChange={(e)=>setUser_Name(e.target.value)}/>
        <div id="userNameHelp" className="form-text">Elija un nombre de usuario</div>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
        <div id="passwordHelp" className="form-text">Elija una clave segura</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>}
    </>)
}
