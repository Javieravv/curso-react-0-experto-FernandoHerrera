/**Componente todos  */
import { useTodos } from "../hooks"
import { TodoAdd, TodoList } from "./"

export const TodoApp = () => {
    // Se crea un hook personalizado para manejar los todos, para deesa manera hacermás sencillo
    // el componente

    const {todos, todosCount, pendingTodosCount, hadleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos()
    
    return (
        <>
            <h1> Tareas <small>(Todos)</small></h1>
            <h2>Total Todos: <small>{ todosCount }</small>. Todos Pendientes: <small>{ pendingTodosCount }</small></h2>
            <hr />
            <div className="row"> 
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        onDeleteTodo = { hadleDeleteTodo }
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                </div>
            </div>
        </>
    )
}
