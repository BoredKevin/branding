import React from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer.ts';
import { ChamferFrame } from '../common/ChamferFrame.tsx';
import './AudioPlayer.css';

export interface AudioPlayerProps {
  trackTitle?: string;
  totalSeconds?: number;
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  trackTitle = 'VOID-FM // TRACK 01',
  totalSeconds = 284,
  className = '',
}) => {
  const { isPlaying, togglePlay, progressPercent, timeString } = useAudioPlayer(totalSeconds);

  return (
    <ChamferFrame cut="md" className={`player-bar ${className}`.trim()}>
      <button
        type="button"
        className="play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause track' : 'Play track'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>

      <div className="player-bar-content">
        <div className="player-bar-header">
          <span className="player-track-title">{trackTitle}</span>
          <span className="player-time-display">{timeString}</span>
        </div>

        <div className="player-bar-bottom">
          <div className="player-progress-track">
            <div
              className="player-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={`freq-bars ${isPlaying ? 'active' : ''}`}>
            <div className="freq-bar" />
            <div className="freq-bar" />
            <div className="freq-bar" />
            <div className="freq-bar" />
            <div className="freq-bar" />
          </div>
        </div>
      </div>
    </ChamferFrame>
  );
};
