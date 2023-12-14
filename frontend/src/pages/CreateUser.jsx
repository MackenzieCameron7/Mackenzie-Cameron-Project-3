import axios from "axios"
import { useState } from "react"

export default function CreateUser(){
    
    // Use State
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [postResponse, setPostResponse] = useState("")

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

    // Post
    const postUser = async(evt) => {
        evt.preventDefault()
        await axios.post("http://localhost:3000/register", formData)
        .then((response) => setPostResponse(<p>{response}</p>))
        .then(setFormData({
            username:"",
            password:"",
        }))
    }

    // Register form
    return(
        <div action="" onSubmit={postUser}>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleOnChange} value={formData.username} required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleOnChange} value={formData.password} required />

                <button>Submit</button>
            </form>
            {postResponse}
        </div>
    )
}