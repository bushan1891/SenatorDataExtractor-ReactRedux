import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/index'
export default class SearchBar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			value: '',
			offset: 0
		}
		this.onchangeEvent = this
			.onchangeEvent
			.bind(this);
		this.onFormSubmit = this
			.onFormSubmit
			.bind(this);
	}
	onchangeEvent(event)
	{
		console.log(event.target.value);
		this.setState({value: event.target.value})
	}

	onFormSubmit(event) {

		event.preventDefault();
		// fetch weather data here
		// all this should be binded
		this
			.props
			.fetchData(this.state);
		this.setState({
			offset: this.state.offset + 1
		})
		this.setState({value: ''});

	}

	render()
	{
		return (
			<div >
				<form onSubmit={this.onFormSubmit}>
					<input type="text" value={this.state.value} className="input-group" onChange={this.onchangeEvent}/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">GetMoreData
						</button>
					</span>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchData
	}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
