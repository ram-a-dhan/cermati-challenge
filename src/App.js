import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faComments,
	faPaintBrush,
	faCubes,
	faBullhorn,
	faSlidersH,
	faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import Home from './views/Home';
import './App.css';

library.add(
	faComments,
	faPaintBrush,
	faCubes,
	faBullhorn,
	faSlidersH,
	faChartLine
);

export default function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}
