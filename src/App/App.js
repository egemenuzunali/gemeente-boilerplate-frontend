import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedPage from '../pages/ProtectedPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/login" component={Login} exact />
				<Route path="/protectedpage" component={ProtectedPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
