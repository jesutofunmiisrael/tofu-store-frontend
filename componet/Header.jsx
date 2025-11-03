import Button from "./button"
function Header(){

     const signup = () =>{
     alert ("signing")
    }
    return(
        <header>
            <h2>logo</h2>

            <div>
                <a href="#"> Home</a>
                 <a href="#"> Home</a>
                  <a href="#"> Home</a>
                   <a href="#"> Home</a>
            </div>
  <Button text= "sign up" backgroundColor ="red"
   onclick={signup}/>

        </header>
    )
}

export default Header