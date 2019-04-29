import React from 'react';

class List extends React.Component {
  render() {
    const rows = this.props.items.map( (x) => {
      return (
        <li className="list-item" key={x._id}>
          {x.desc}
          <button
            value={x._id}
            onClick={this.props.handleDeleteButton}
            className="delete-button">
            X
          </button>
        </li>);
    });
    return (
      <div>
        <h1>To-do list:</h1>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
}

export default List;
