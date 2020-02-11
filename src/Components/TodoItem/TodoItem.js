import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import {FaCheck, FaTimes} from 'react-icons/fa'
import './TodoItem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.item = props.item;
        this.setAsDone = this.setAsDone.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
    }

    setAsDone(){
        this.props.onChange('update',this.item);
    }
    removeFromList(){
        this.props.onChange('delete', this.item);
    }

    render() {
        let appliedClass = this.item.status === "todo" ? 'TodoItem' : 'DoneItem';

        return (
            
            <Container className={appliedClass} >

                <Row>
                    <Col xs={11}>{this.item.content}</Col>
                    {this.item.status === "todo" && <Col xs={1}><Button variant='success' onClick={this.setAsDone}><FaCheck/></Button></Col>}
                    {this.item.status === "done" && <Col xs={1}><Button variant='danger' onClick={this.removeFromList}><FaTimes/></Button></Col>}    
                </Row>                
            </Container>
        )
    }

}
export default TodoItem