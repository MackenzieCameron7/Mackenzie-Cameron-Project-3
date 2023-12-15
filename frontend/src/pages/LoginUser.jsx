import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"


export default function LoginUser(){
    
    // Use State
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [postResponse, setPostResponse] = useState("")
    const [jwtCookie, setJwtCookie] = useState("")

    // navigation
    const navigate = useNavigate()

    // frontend cookie
    const createCookie = (cookie) => {
        Cookies.set("jwt-cookie", cookie)
    }

    // Handlers
    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setFormData((prevData) => {
            return{
                ...prevData, 
                [name]:value
            }
        })
    }

    const handleLogin = (message) => {
        return message == "Successful Login" ? navigate("/main") : console.log("no")
    }

    // Post user
    const postUser = async(evt) => {
        evt.preventDefault()
        await axios.post("http://localhost:3000/login", formData)
        .then((response) => {setPostResponse(response.data.message)
            if(response.data.message == "Successful Login"){
                createCookie(response.data.token)
                setJwtCookie(jwtCookie)
            }})
        .then(setFormData({
            username:"",
            password:"",
        }))
    }

    // Login form
    return(
        <div action="" onSubmit={postUser}>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleOnChange} value={formData.username} required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleOnChange} value={formData.password} required />

                <button onClick={() => handleLogin(postResponse)}>Login</button>
            </form>
            {<p>{postResponse}</p>}
            {<p>{Cookies.get("jwt-cookie")}</p>}
        </div>
    )
}