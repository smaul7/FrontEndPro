import React, { Component } from 'react';
import { greenBtnStyle, redBtnStyle } from '../styles/emojiStyles';

export class ResultPanel extends Component {
  render() {
    const { onShow, onReset, winner } = this.props;

    return (
      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={onShow} style={greenBtnStyle}>
            Результат
          </button>
          <button onClick={onReset} style={redBtnStyle}>
            Очистити результати
          </button>
        </div>

        {winner && (
          <div style={{ marginTop: '15px', fontSize: '1.2rem' }}>
            Переможець: <strong>{winner}</strong>
          </div>
        )}
      </div>
    );
  }
}
