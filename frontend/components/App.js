import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: []
  }

  fetchTodos = () => {
    axios.get(URL)
    .then(res => {
      this.setState({todos: res.data.data})
    })
    .catch(err => console.log(err))
  }

  
  componentDidMount(){
    this.fetchTodos()
  }

  addNewTodo = todo => {
    axios.post(URL, {"name": todo})
  }
  
  toggleCompleted = id => {
    axios.patch(`${URL}/${id}`)
  }
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>
        <Form/>
        <button>Clear Completed</button>
      </div>
    )
  }
}
