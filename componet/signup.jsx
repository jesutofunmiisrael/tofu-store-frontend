import { useState } from "react"




const Newsignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [submitting, setSubmitting] = useState(false)

    

    const user1 = { name: "kenny", age: 18 }
 


    const [showPassword, setShowPassword] = useState(false)


    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
   
    const handleSubmit = async () => {
        setSubmitting(true)
        const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
        try {
            const response = await fetch("http://localhost:4005/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({formData})
            })
            const data = await response.json()
            console.log(data)
            if(response.ok){
                alert("Signup Success")
            }
            else{
                alert("Sign Up Failed")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
   


    return (
        <form className="form"  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="name" id="name" onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div style={{ border: "1px solid", display: "flex", alignItems: "center", padding: ".5rem 1rem" }}>
                    <input style={{ padding: 0, border: "none", outline: "none", flex: 1 }} type={showPassword ? "text" : "password"} name="password" id="password" onChange={handleInput} />
                    <span onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</span>
                </div>
            </div>

            <button disabled={submitting} type="submit" className="click">Create Account</button>
        </form>
    )
}

export default Newsignup


