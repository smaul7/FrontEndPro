import React, { Component } from 'react';
import { EmojiPanel } from './EmojiPanel';
import { ResultPanel } from './ResultPanel';
import { loadVotes, saveVotes, resetVotes } from '../utils/emojiStorage';

export class EmojiCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: loadVotes() || {
        '😀': 0,
        '😂': 0,
        '😍': 0,
        '😎': 0,
        '🤯': 0,
      },
      winner: null,
    };
  }

  handleEmojiClick = (emoji) => {
    this.setState(
      (prevState) => {
        const updated = {
          ...prevState.counts,
          [emoji]: prevState.counts[emoji] + 1,
        };
        return { counts: updated };
      },
      () => saveVotes(this.state.counts)
    );
  };

  handleShowResults = () => {
    const { counts } = this.state;
    const max = Math.max(...Object.values(counts));
    const top = Object.keys(counts).filter((e) => counts[e] === max);
    this.setState({ winner: top.join(' ') });
  };

  handleReset = () => {
    resetVotes();
    this.setState({
      counts: {
        '😀': 0,
        '😂': 0,
        '😍': 0,
        '😎': 0,
        '🤯': 0,
      },
      winner: null,
    });
  };

  render() {
    const { counts, winner } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h2>Натисни на смайлик:</h2>
        <EmojiPanel counts={counts} onEmojiClick={this.handleEmojiClick} />
        <ResultPanel
          onShow={this.handleShowResults}
          onReset={this.handleReset}
          winner={winner}
        />
      </div>
    );
  }
}
