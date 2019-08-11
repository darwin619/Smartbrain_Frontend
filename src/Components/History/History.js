import React from 'react';
import './History.css';
import HistoryCard from '../HistoryCard/HistoryCard';
import SearchBox from '../SearchBox/SearchBox';

class History extends React.Component  {
constructor(props) {
	super(props);
	this.state = {
		history: [],
		searchfield: ''
	};
}

componentDidMount() {
	fetch('https://shrouded-basin-70412.herokuapp.com/history', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.userId
      })})
		.then(response => response.json())
		.then(historyData => this.setState({history: historyData}))
		.catch(err => console.log(err))
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}

	render() {
		const { history,searchfield} = this.state
		const filteredHistory = history.filter(historyItem => {
			return historyItem.celebname.toLowerCase().includes(searchfield.toLowerCase())
		})
		


		const { userName } = this.props;
		return (
			<div className="History">
			<h1 className="user tc f4 pv2 br3 shadow-5 white mb4">{`${userName}, here is your search history`}</h1>
			<SearchBox SearchChange={this.onSearchChange} />
			{console.log(this.state.searchfield)}
			<div className="history-container">
			{
				filteredHistory.map(historyItem => <HistoryCard key={historyItem.id} imageurl={historyItem.imageurl} celebname={historyItem.celebname} />)
			}
			</div>
			</div>
			);
	}
	}

export default History;


 