import React, { Component } from 'react';
import './TextArea.css';

class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordCount: 0,
    };
  }

  handleTextChange = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/); // Split the text by whitespace to count words
    const wordCount = words.length;
    this.setState({
      text,
      wordCount,
    });
  }

  render() {
    return (
      <div className='yy'>
        <h1>Responsive paragraph word counter </h1>
        <textarea rows={10}
          value={this.state.text}
          onChange={this.handleTextChange}
          placeholder="Type something..."
          className="styled-textarea"
        />
        <p>Word Count: {this.state.wordCount}</p>
      </div>
    );
  }
}

export default WordCount;
