import React, { Component } from "react";
import './AppHeader.css'


class AppHeader extends Component {
    constructor(props){
        super(props);
        this.state={value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    handleSubmit(event){
        this.props.onTaskAdd(this.state.value);
        this.setState({value:''});
        event.preventDefault();
    }

    render(){
    
        return(
            <div className='TodoListHeader'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nowe zadanie:
                        <input value={this.state.value} onChange={this.handleChange} style={{width:'60em'}}/>
                    </label>
                    <input type='submit' value='Dodaj' />
                </form>
            </div>
        )
    }
}

export default AppHeader;