import React, { Component } from 'react'
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {

    constructor() {
        super();
        //Bài 10: đổi thành object
        this.todoItems = [   //Array todoItem
            { title: 'Component 5', isComplete: true },
            { title: 'Component 6', isComplete: true },
            { title: 'Component 7' }
        ];
    }

    render() {
        //Bài 11: Conditional Rendering
        if (this.todoItems.length > 0) {
            return (
                <div className="App" >
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
                        this.todoItems.map((item, index) =>
                            <TodoItem key={index} item={item} />
                        )
                    }
                </div>
            );
        } else {
            return (
                <div className="App" >
                    Notthing here!!!
                </div>
            );
        }
    }
}

export default App;