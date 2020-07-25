import React from 'react';
import './Highlights.css';

export default function HighlightTile({ tile, ...props }) {
  return (
    <div className="HighlightTile">
      <h2>{tile.title}</h2>
      <p>{tile.description}</p>
    </div>
  )
}
