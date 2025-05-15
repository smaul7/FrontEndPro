import React, { Component } from 'react';
import { btnStyle, counterStyle } from '../styles/emojiStyles';

export class EmojiButton extends Component {
  render() {
    const { emoji, count, onClick } = this.props;

    return (
      <button onClick={() => onClick(emoji)} style={btnStyle}>
        {emoji}
        <div style={counterStyle}>Кліків: {count}</div>
      </button>
    );
  }
}
