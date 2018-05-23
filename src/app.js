//react
import React from 'react';
//libraries
import { connect } from 'react-redux';

import './styles/site.css';

class App extends React.Component {
	componentDidMount = () => {};

	render() {
		return <div>RUNNING!!</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
