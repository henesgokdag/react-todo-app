import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props)=>{
    return (
        <div>
            <ul className="list-group"> {
                props.items.map((item, index) =>
                    <TodoItem deleteItem={props.deleteItem} item={item} key={index} />
                )
            }
            </ul>
            {
            props.items.length>0
            ?
            <p>
                <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={props.clear}>Clear Items</button>
            </p>
            : 
            <p className="alert alert-warning">
                Item ekleyin
            </p>
            }
            
        </div>
    );
}

export default TodoList;