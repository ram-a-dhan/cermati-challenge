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
import Notification from './components/Notification';
import Newsletter from './components/Newsletter';
import './App.css';

library.add(
	faComments,
	faPaintBrush,
	faCubes,
	faBullhorn,
	faSlidersH,
	faChartLine
);

// notification & newsletter go here so hypothetically
// they will apply to other pages

export default function App() { 
	return (
		<div className="App">
			<Notification />
			<Home />
			<Newsletter />
		</div>
	);
}
