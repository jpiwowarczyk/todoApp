import React, {Component} from 'react'
import TodoItem from 'Components/TodoItem/TodoItem'
import './TodoItemsList.css'

class TodoItemsList extends Component {

    //mockedTodoObject = [{'id':'1', 'status':'todo', 'content':'Sample Text'},{'id':'2', 'status':'done', 'content':'Sample Text 2'},{'id':'13', 'status':'todo', 'content':'Sample Text 3'},{'id':'4', 'status':'done', 'content':'Sample Text 4'}]
    constructor(props){
        super(props);

        this.onChildUpdate = this.onChildUpdate.bind(this);
    }

    onChildUpdate(action, item){
        this.props.onStateChange(action, item);
    }

    render(){
        let objList = [];
        this.props.itemsList.forEach(element => {objList.push(<TodoItem key={element.id} item={element} onChange={this.onChildUpdate}/>)});
        return ( 
            <div className='TodoItemsList'>
                        {objList}
            </div>
        )
    }
}

export default TodoItemsList