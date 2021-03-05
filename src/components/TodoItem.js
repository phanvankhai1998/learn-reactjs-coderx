import React from 'react';
import './TodoItem.css';
import classnames from 'classnames'
import checked from '../img/checked.svg'
import checkmark from '../img/check-mark.svg'

class TodoItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick() {
    //     console.log('this.props.item');
    //     //props: UI ko thay đổi //Chỉ đọc. //component truyền vào thì không được thay đổi giá trị đó
    //     this.props.item.isComplete = !this.props.item.isComplete;
    // }
    render() {
        const { item, onClick } = this.props;
        //const item = this.props.item;

        //let className = 'TodoItem';
        // if (item.isComplete) {
        //     className += ' TodoItem-complete';
        // }

        let url = checked;
        if (item.isComplete) {
            url = checkmark;
        }

        return (
            <div
                className={classnames('TodoItem', {
                    'TodoItem-complete': item.isComplete
                })}
            >
                <img
                    onClick={onClick}
                    src={url}
                    width={32}
                    height={32}
                />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;