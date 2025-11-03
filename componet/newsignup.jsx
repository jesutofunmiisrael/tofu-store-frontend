import React, { useState } from 'react'

const Login = () => {
    const [submit, setsubmit] = useState(false)
    const [fill, setfill] = useState({
        Fullname: "",
        Email: "",
        Password: ""
    })

    const typehere = (e) => {
        const { name, value } = e.target
        setfill(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        setsubmit(true)
        try {
            if (!fill.Fullname || !fill.Email || !fill.Password) {
                alert(" input text");

            } else {
                alert("good");
            }
        } catch (error) {
            console.log(error);

        } finally {
            setsubmit(false)
        }
    }
    const [showPassword, setshowPassword] = useState(false)
    const hide = () => {
        setshowPassword(prev => (!prev))
    }

    return (
        <div>
            <div>
                <label htmlFor="Fullname">Full name</label>
                <input type="text" name="Fullname" id='Fullname' onChange={typehere} />
            </div>

            <div>
                <label htmlFor="Email">Email</label>
                <input type="Email" name="Email" id='Email' onChange={typehere} />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input type={showPassword ? "text" : "password"} name="Password" id='Password' onChange={typehere} />
                <span onClick={hide}>show</span>
            </div>

            <div>
                <button disabled={submit} onClick={handleSubmit} style={{}}>create account</button>
            </div>
        </div>
    )
}

export default Login
