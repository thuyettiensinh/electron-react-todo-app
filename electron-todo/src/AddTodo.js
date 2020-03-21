import React, { Component } from 'react';

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.changeContent = this.changeContent.bind(this)
    this.add = this.add.bind(this)
  }

  changeContent(e) {
    this.setState({ value: e.target.value })
  }

  add() {
    this.props.createTodo(this.state.value)
    
    this.setState({ value: '' })
  }

  render() {
    return (
      <div className="create-todo">
        <input type="text"
          value={this.state.value}
          onChange={(e) => this.changeContent(e)}
          placeholder="What should I do?"
        />
        <button onClick={this.add}>Save</button>
      </div>
    )
  }
}

export default AddTodo