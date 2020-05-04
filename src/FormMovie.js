import React, { Component } from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }


onChange(e) 
    {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  
submitForm(e) 
    {
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    e.preventDefault();
    axios.post(url, this.state)
  .then(res => res.data)
  .then(res => {
    alert(`Your movie has been added with the ID ${res.id} !`);
  })
  .catch(e => {
    console.error(e);
    alert(`Error during recording your movie : ${e.message}`);
  });
  }

  render() {
    return (
<div className="FormMovie">
  <h1>Add your favourite movie</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Informations</legend>
      <div className="form-data">
        <label htmlFor="title">Name</label>
        <input
          type="text" required
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="poster">Poster</label>
        <input
          type="text" required
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">Comment</label>
        <input
          type="textarea" required
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Send" />
      </div>
    </fieldset>
  </form>
</div>
    );
  }
}

export default FormMovie