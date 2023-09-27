import React from 'react'

const TodoList = () => {
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
            {/* row 1 */}
            <tr> 
                <td>Cy Ganderton</td>      
                <td>Blue</td>
            </tr>
            </tbody>
        </table>
</div>
  )
}

export default TodoList
