import React, { Component } from 'react';
import { EmojiButton } from './EmojiButton';

export class EmojiPanel extends Component {
  render() {
    const { counts, onEmojiClick } = this.props;

    return (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <EmojiButton emoji="😀" count={counts['😀']} onClick={onEmojiClick} />
        <EmojiButton emoji="😂" count={counts['😂']} onClick={onEmojiClick} />
        <EmojiButton emoji="😍" count={counts['😍']} onClick={onEmojiClick} />
        <EmojiButton emoji="😎" count={counts['😎']} onClick={onEmojiClick} />
        <EmojiButton emoji="🤯" count={counts['🤯']} onClick={onEmojiClick} />
      </div>
    );
  }
}
