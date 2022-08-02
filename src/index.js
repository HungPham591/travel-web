import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "swiper/css";
// import './Atomic/_settings/base.css';
import Page from './containers';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Page />
		</BrowserRouter>
	</React.StrictMode>
);

// reportWebVitals();
