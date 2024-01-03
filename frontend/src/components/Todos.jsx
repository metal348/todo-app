export function Todos({todos}) {
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button>{todo.completed == true ? "completed" :"Mark as completed"}</button>
            </div>
        })}
    </div>
}

