import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      activeClass: false,
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onClickAdd = (event) => {
    event.preventDefault();
    this.setState({ ...this.state.data.push(this.state.value) });
    this.setState({ value: '' });
  }


  toggleClass = () => {
    const currentState = this.state.activeClass;
    this.setState({ activeClass: !currentState });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onClickAdd}>
          <h2>
            Todo List
          </h2>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit"> Add </button>
          <p>remaining out of {this.state.data.length} tasks</p>
        </form>
        <ul>
          {this.state.data.map(i =>
            <li
              key={i}
              className={this.state.activeClass ? 'is-done' : null}
              onClick={this.toggleClass} >
              {i}
            </li>

          )}
        </ul>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}