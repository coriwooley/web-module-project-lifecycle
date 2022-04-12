import React from 'react'

export default class Form extends React.Component {
  state = {
    inputText: ""
  }

  handleChange = e => {
    this.setState({inputText: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewTodo(this.state.inputText)
    this.setState({inputText: ""})
  }

  handle
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="what do you need to do?"value={this.state.inputText}></input>
        <button>Add</button>
      </form>
    )
  }
}
