import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      activeId: []
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onClickAdd = (event) => {
    event.preventDefault();
    this.setState({ ...this.state.data.push({ id: this.state.data.length + 1, value: this.state.value }) });
    this.setState({ value: '' });
  }

  toggleClass = (id) => {
    const index = this.state.activeId.indexOf(id);
    if (index > -1) {
      this.setState({ ...this.state.activeId.splice(index, 1) });
    } else {
      this.setState({ ...this.state.activeId.push(id) });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.onClickAdd}>
          <h2>
            Todo List with React JS
          </h2>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit"> Add </button>
          <p>remaining out {this.state.data.length - this.state.activeId.length} of {this.state.data.length} tasks</p>
        </form>
        <ul>
          {this.state.data.map(i =>
            <li
              key={i.id}
              className={this.state.activeId.indexOf(i.id) > -1 ? 'is-done' : null}
              onClick={() => this.toggleClass(i.id)} >
              {i.value}
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