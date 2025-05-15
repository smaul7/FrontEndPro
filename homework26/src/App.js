import React, { Component } from 'react';
import { EmojiCounter } from './components/EmojiCounter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Лічильник смайлів</h1>
        <EmojiCounter />
      </div>
    );
  }
}

export default App;
