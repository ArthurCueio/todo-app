import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="To-do title"
          value={this.props.titleText}
          onChange={this.props.handleChange}/>
        <textarea
          name="desc"
          cols="30"
          rows="5"
          placeholder="To-do description (optional)"
          value={this.props.descText}
          onChange={this.props.handleChange}>
        </textarea>
        <button type="submit">Create to-do</button>
      </form>
    );
  }
}

export default Editor;
