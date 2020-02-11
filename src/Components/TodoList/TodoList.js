import React, {Component} from 'react'
import TodoItemList from 'Components/TodoItemsList/TodoItemsList'
import AppHeader from 'Components/AppHeader/AppHeader'
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {itemsList:[]};
        console.log(this.state);
        this.setTaskAsDone = this.setTaskAsDone.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    setTaskAsDone(action,task){
        if(action === 'update'){
            let updatedTask = task;
            updatedTask.status = 'done';
            let tempItemsList = this.state.itemsList.map(element => {if(element === task){return updatedTask}else{return element}});
            this.setState({itemsList:tempItemsList});
        }else if(action === 'delete'){
            let tempItemsList = [];
            this.state.itemsList.forEach(element => {if(element !== task) tempItemsList.push(element)});
            this.setState({itemsList:tempItemsList});
        }
    }

    addNewTask(content){
        let taskToAdd = {
            'id':(this.state.itemsList.length.toString() + Date.now().toString()),
            'status':'todo',
            'content':content
        };

        let tempItemsList = this.state.itemsList;
        tempItemsList.push(taskToAdd);
        this.setState({itemsList:tempItemsList});
    }
    
    render(

    ) {
        return (
            <div className='TodoListMainWindow'>
                <AppHeader onTaskAdd={this.addNewTask}/>
                
                <TodoItemList itemsList={this.state.itemsList} onStateChange={this.setTaskAsDone}/>
            </div>
        )
    }
}

export default TodoList