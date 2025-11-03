 function Button({text, background,onclick}){
    return(
     
            <button 
        onclick ={onclick}
        
        style={{
            backgroundColor: background,
            border: "none",
            color: "#fff",
            padding: ".5rem 1rem",
            borderRadius: "5px",
        }}>{text}</button>
      
    )
 }
 export default Button