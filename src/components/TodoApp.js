import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['item1', 'item2', 'item3', 'item4']
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('items');
        console.log(json);
        const items = JSON.parse(json);
        if (items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }
    }

    componentWillUnmount() {
        console.log('component silindi');
    }

    clear() {
        this.setState({
            items: []
        });
    }
    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items: arr
            }
        })
    }

    addItem(item) {
        if (!item) {
            return 'eklemek istediğiniz elemanı girin'
        }
        else if (this.state.items.indexOf(item) > -1) {
            return 'bu eleman listede var'
        }
        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        })
    }

    render() {
        const app = {
            title: "TODO APP",
            description: "Lorem ipsum dolor."
        };
        return (
            <div className="container my-5">
                <div className="card">
                    <div className="card-header">
                        <Header title={app.title} description={app.description} />
                    </div>
                    <div className="card-body">
                        <TodoList items={this.state.items} clear={this.clear} deleteItem={this.deleteItem} />
                    </div>
                    <div className="card-footer">
                        <Action addItem={this.addItem} />
                    </div>
                </div>
            </div>
        );
    }
}

