import React from 'react'

interface TodoListProps {
    tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th className='capitalize font-bold'>Name</th>
                <th className='capitalize font-bold'>Favorite Color</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                <tr key={task.id}> 
                    <td>{task.text}</td>      
                    <td>Blue</td>
                </tr>   
                ))}
            </tbody>
        </table>
</div>
  )
}

export default TodoList
