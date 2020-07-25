import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Highlights.css';

export default function HighlightTile({ tile, ...props }) {
  return (
    <div className="HighlightTile">
      <div className="TileIcon"><FontAwesomeIcon icon={tile.icon} size="2x" color="grey"  /></div>
      <h2>{tile.title}</h2>
      <p>{tile.description}</p>
    </div>
  )
}
