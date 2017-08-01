import React, { Component } from 'react';
import { Link } from 'react-router';
import Dropdown from 'react-dropdown';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			label: ''
		};
        this._onSelect = this._onSelect.bind(this);
	}

    _onSelect(event) {
        this.setState({url: event.value});
        this.setState({label: event.label});
    }
	render() {
		return (
		  <div className="main">
					<div className="title">
						<div className="headline">
							Quickly generate Speeches, Cover Letter, and other documents
						</div>
						<div className="clarifying">
							
						</div>
					</div>
					<div className="content-login">
						<h2>Help us personalize your document</h2>
						<div className="fb-btn"></div>
						<div className="in-btn"></div>
						<h2>Choose your Speech/Document type</h2>
						<Dropdown
								  options={[
                                      { value: '/nlp/speech', label: 'Wedding Speech' },
                                      { value: '/nlp/letter', label: 'Cover Letter' }
                                  ]}
								  placeholder="Select..."
								  value={this.state.label}
								  onChange={this._onSelect}
						/><br/>
						<Link to={this.state.url}>
							<input className="button" type="button" value="Next"/>
						</Link>
					</div>
				</div>
		);
	}
}

export default App;