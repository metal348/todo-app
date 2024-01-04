import { useRef } from "react";
export function CreateTodo() {
    const titRef = useRef();
    const desRef = useRef();
    let titValue,desValue;
        const handleSubmit = (event)=>{
            titValue = titRef.current.value;
            desValue = desRef.current.value;
            console.log(titValue+" "+desValue);
        }
    
    return <div>
        <input type="text" placeholder="title" ref={titRef}
        style={{
            padding : 10,
            margin : 10
        }}
        ></input>

        <br></br><br></br>

        <input type="text" placeholder="description" ref={desRef}
        style={{
            padding : 10,
            margin : 10
        }}
        ></input>

        <br></br><br></br>

        <button style={{
            padding : 10,
            margin : 10
        }} onClick={async () => {
             handleSubmit();
            let a =fetch("http://localhost:3030/todos",{
                method: "POST",
                body :JSON.stringify( {
                    title: titValue,
                    description : desValue
                }) ,
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo alert");
            })
            console.log(a);
            // const res = await fetch("http://localhost:3030/todos");
            // const json = await res.json();
            
        }}
        >Add todo</button>
    </div>
}