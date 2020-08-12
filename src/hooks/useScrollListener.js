import { useState, useEffect } from "react";

const useScrollListener = () => {
	const [scrollPos, setScrollPos] = useState(0); // scroll position indicator
	const [docHeight, setDocHeight] = useState(0); // page total height indicator

	useEffect(() => {
		// watcher for changes in scoll position and page total height
		const handleDocHeight = () => {
			setDocHeight(
				Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight,
					document.body.clientHeight,
					document.documentElement.clientHeight
				)
			);
		};
    // window.addEventListener('load', handleDocHeight);
    handleDocHeight();
		window.addEventListener('scroll', handleDocHeight);
		window.addEventListener('resize', handleDocHeight);

		const handleScrollPos = () => {
			setScrollPos(Math.round(window.pageYOffset));
		};
    // window.addEventListener('load', handleScrollPos);
    handleScrollPos();
		window.addEventListener('scroll', handleScrollPos);
    window.addEventListener('resize', handleScrollPos);

		return () => {
			// window.removeEventListener('load', handleDocHeight);
			window.removeEventListener('scroll', handleDocHeight);
			window.removeEventListener('resize', handleDocHeight);
			// window.removeEventListener('load', handleScrollPos);
			window.removeEventListener('scroll', handleScrollPos);
			window.removeEventListener('resize', handleScrollPos);
		};
	}, []);

	return { scrollPos, docHeight };
};

export default useScrollListener;