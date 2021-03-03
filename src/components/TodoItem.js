import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {
    render() {
        const { item } = this.props;    //  const item = this.props.item;
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete';
        }

        return (
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }

}

export default TodoItem;