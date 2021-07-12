import React from 'react';
import {Route, Switch} from 'react-router';
import {Hero} from './Hero'
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Hero} />
				</Switch>
			</BrowserRouter>
		</>
	);
};
