import React from 'react';

class List extends React.Component {
  render() {
    const rows = this.props.items.map( (x) => {
      return (
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid black 2px',
            padding: '0.5em',
          }}
          className="list-item"
          key={x._id}>
          {x.title}
          <button
            style={{
              border: 'none',
              background: 'transparent',
              fontWeight: 'bold',
              color: 'red',
              cursor: 'pointer',
            }}
            value={x._id}
            onClick={this.props.handleDeleteButton}
            className="delete-button">
            X
          </button>
        </li>);
    });
    return (
      <div
        style={{
          margin: '2rem',
          width: 650,
          padding: '1em',
          backgroundColor: '#ffeeaa',
        }}>
        <h1>To-do list:</h1>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
}

export default List;
