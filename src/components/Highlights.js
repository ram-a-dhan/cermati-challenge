import React from 'react';
import HighlightTile from './HighlightTile';
import tiles from '../data/HighlightsData';
import './Highlights.css';

export default function Highlights() {
  return (
    <div className="Highlights">
      <div className="Pretext">
        <h1>
          How Can I Help You?
        </h1>
        <p>
          Our work then targeted, best practices outcomes social innovation synergy.
          Venture philanthropy, revolutionary inclusive policymaker relief.
          User-centered program areas scale.
        </p>
      </div>
      <div className="TilesContainer">
        {
          tiles.map(tile => { return (
            <HighlightTile key={tile.id} tile={tile} />
          )})
        }
      </div>
    </div>
  )
}
