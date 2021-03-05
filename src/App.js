import React, { Component } from 'react'
import './App.css';
import TodoItem from './components/TodoItem'
import tick from './img/tick.svg'

class App extends Component {

    constructor() {
        super();
        // this.todoItems = [   //Array todoItem //Bài 10: đổi thành object
        //     { title: 'Component 5', isComplete: true },
        //     { title: 'Component 6', isComplete: true },
        //     { title: 'Component 7' }
        // ];

        this.state = {
            newItem: '',
            todoItems: [   //Array todoItem
                { title: 'Component 5', isComplete: true },
                { title: 'Component 6', isComplete: true },
                { title: 'Component 7' }
            ]
        }
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onItemClicked(item) {
        //console.log('item clicked', item);
        return (event) => {
            const isComplete = item.isComplete;
            const { todoItems } = this.state;
            const index = todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index + 1)
                ]
            });
        };
    }

    onKeyUp(event) {
        if (event.keyCode === 13) { //enter Key
            let text = event.target.value;
            if (!text) {
                return;
            }

            text = text.trim();
            if (!text) {
                return;
            }

            this.setState({
                newItem: '',
                todoItems: [
                    { titile: text, isComplete: true },
                    ...this.state.todoItems
                ]
            });
        }
    }

    onChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }

    render() {
        //Bài 11: Conditional Rendering
        const { todoItems, newItem } = this.state;
        if (todoItems.length) {
            return (
                <div className="App" >
                    <div className="Header">
                        <img src={tick} width={32} height={32} />
                        <input type="text"
                            placeholder="Add a new item"
                            value={newItem}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                        />
                    </div>
                    {/* <TodoItem /> */}
                    {/* <TodoItem title="Component 2" />
                <TodoItem title="Component 3" />
                <TodoItem title="Component 4" /> */}

                    {/* Chuyển danh sách todoItem thành 3 phần tử (Component 2 3 4) thì dùng hàm map() */}
                    {/* JavaScript */}
                    {/*  */}
                    {/* this.todoItem.map((item, index) => <TodoItem key={index} title={item} />)  */}

                    {/* Bài 8: Truy cập vào object */}
                    {
                        //Bài 11: Conditional
                        // toán tử && trả về giá trị một trong 2 bên
                        todoItems.length && todoItems.map((item, index) =>
                            <TodoItem
                                key={index}
                                item={item}
                                onClick={this.onItemClicked(item)}
                            />
                        )
                    }
                    {/* {this.todoItems.length === 0 && 'Nothing here'} */}
                </div>
            );
        } else {
            return (
                <div className="App">Nothing here.</div>
            )
        }
    }
}

export default App;
