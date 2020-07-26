import React, { useState } from 'react';
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

export default function App() {
  const [hideNotif, setHideNotif] = useState(false);
  const [hideNews, setHideNews] = useState(false);

	return (
		<div className="App">
			<Notification hideNotif={hideNotif} setHideNotif={setHideNotif} />
			<Home />
			<Newsletter hideNews={hideNews} setHideNews={setHideNews} />
		</div>
	);
}
