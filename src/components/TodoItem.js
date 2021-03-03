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

// echo "# coderx-reactjs" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/phanvankhai1998/coderx-reactjs.git
// git push -u origin main