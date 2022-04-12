import React from 'react'

export default class Form extends React.Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="what do you need to do?"></input>
        <button>Add</button>
      </form>
    )
  }
}
