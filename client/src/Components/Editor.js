import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <textarea
          name="desc"
          cols="30"
          rows="5"
          placeholder="To-do description"
          value={this.props.descText}
          onChange={this.props.handleChange}>
        </textarea>
        <button type="submit">Create to-do</button>
      </form>
    );
  }
}

export default Editor;
