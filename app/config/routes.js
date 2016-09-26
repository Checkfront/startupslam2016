import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'

import MainContainer from '../containers/MainContainer'

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={MainContainer} />

		</Route>
	</Router>
)