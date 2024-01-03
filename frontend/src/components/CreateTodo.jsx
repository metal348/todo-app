export function CreateTodo() {
    return <div>
        <input type="text" placeholder="title"
        style={{
            padding : 10,
            margin : 10
        }}
        ></input><br></br><br></br>
        <input type="text" placeholder="description"
        style={{
            padding : 10,
            margin : 10
        }}
        ></input><br></br><br></br>
        <button>Add todo</button>
    </div>
}