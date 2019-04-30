import React from 'react';
import List from './Components/List';
import Editor from './Components/Editor';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      descText: '',
    };

    this.updateList = this.updateList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }
  componentWillMount() {
    this.updateList();
  }
  updateList() {
    fetch('http://localhost:6200/api/list/todo')
        .then( (res) => {
          if (!res.ok) {
            throw new Error(`Error while fetching list: ${res.statusText}`);
          }
          return res.json();
        })
        .then( (data) => {
          this.setState({
            items: data.todos,
          });
        })
        .catch( (err) => {
          console.error(err);
        });
  }
  handleChange(event) {
    this.setState({
      descText: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('desc', this.state.descText);
    fetch('http://localhost:6200/api/add/todo',
        {
          method: 'post',
          body: params,
        })
        .then( (response) => {
          if (!response.ok) {
            throw new Error(`Error while fetching list: ${response.statusText}`);
          } else {
            this.setState({
              descText: '',
            });
            this.updateList();
          }
        })
        .catch( (err) => {
          console.error(err);
        });
  }
  handleDeleteButton(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('id', event.target.value);
    fetch('http://localhost:6200/api/del/todo',
        {
          method: 'post',
          body: params,
        })
        .then( (response) => {
          if (!response.ok) {
            throw new Error(`Error while deleting item: ${response.statusText}`);
          } else {
            this.updateList();
          }
        })
        .catch( (err) => {
          console.error(err);
        });
  }
  render() {
    return (
      <div>
        <List
          items={this.state.items}
          handleDeleteButton={this.handleDeleteButton}/>
        <Editor
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          descText={this.state.descText}/>
      </div>
    );
  }
};

export default App;