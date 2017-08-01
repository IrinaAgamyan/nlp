import React, { Component } from 'react';
import { Link } from 'react-router';
import {replacementMyText} from './MyFunctions';

const textLetter = "{Your name} <br/> {address} <br/> {phone} <br/> {e-mail} <br/> {date} <br/> {name of potential boss} <br/> Humanities Director <br/> {organization} <br/> Dear {name of potential boss} <br/> As a {Title} with {HowLong}  of experience at {Plase}, I believe I would be a perfect fit for the role of Online Adjunct Faculty-Communications (Public Speaking) at {organization}, the job position I discovered on higheredjobs.com. <br/> The following list of my experience is what I could bring to the proverbial table at your {organization}, a list that closely correlates to the skills posted in the job description: <br/>•        {HowLong1} {Title1} {Plase1}<br/>•        {HowLong2} {Title2} {Plase2}<br/>•        {HowLong3} {Title3} {Plase3} <br/> {work style} <br/> Thank you for taking the time to consider this application, and I look forward to hearing from you in future. {Notes} <br/> Please find my CV attached. <br/> Sincerely,<br/> {Your name}";

const putText = (text, CL) => {
    let options = {
                    "day": "numeric",
                    "month": "short",
                    "year": "numeric"
    };
	let date = new Date();
	text = replacementMyText(text,"{work style}", CL.workStyle? CL.workStyle : "");
	text = replacementMyText(text,"{Plase}", CL.Plase? CL.Plase : "");
	text = replacementMyText(text,"{Title}", CL.Title? CL.Title : "");
	text = replacementMyText(text,"{HowLong}", CL.HowLong? CL.HowLong : "");
	text = replacementMyText(text,"{Plase1}", CL.Plase1? " from " + CL.Plase1 : "");
	text = replacementMyText(text,"{Title1}", CL.Title1? " of " + CL.Title1 : "");
	text = replacementMyText(text,"{HowLong1}", CL.HowLong1? CL.HowLong1 : "");
	text = replacementMyText(text,"{Plase2}", CL.Plase2? " from " + CL.Plase2 : "");
	text = replacementMyText(text,"{Title2}", CL.Title2? " of " + CL.Title2 : "");
	text = replacementMyText(text,"{HowLong2}", CL.HowLong2? CL.HowLong2 : "");
	text = replacementMyText(text,"{Plase3}", CL.Plase3? " from " + CL.Plase3 : "");
	text = replacementMyText(text,"{Title3}", CL.Title3? " of " + CL.Title3 : "");
	text = replacementMyText(text,"{HowLong3}", CL.HowLong3? CL.HowLong3 : "");
    text = replacementMyText(text,"{Your name}", CL.Name? CL.Name : "");
    text = replacementMyText(text,"{address}", CL.Address? CL.Address : "");
    text = replacementMyText(text,"{phone}", CL.Phone? CL.Phone : "");
    text = replacementMyText(text,"{e-mail}", CL.Email? CL.Email : "");
    text = replacementMyText(text,"{date}", date.toLocaleString('en-US', options));
    text = replacementMyText(text,"{name of potential boss}", CL.Boss? CL.Boss : "");
    text = replacementMyText(text,"{organization}", CL.Organization? CL.Organization : "");
    text = replacementMyText(text,"{Notes}", CL.Notes? CL.Notes : "");
	return text;
};

class Letter extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {		
			workStyle: this.context.myObj.CL.workStyle,
			HowLong: this.context.myObj.CL.HowLong,
			Title: this.context.myObj.CL.Title,
			Plase: this.context.myObj.CL.Plase,
			HowLong1: this.context.myObj.CL.HowLong1,
			Title1: this.context.myObj.CL.Title1,
			Plase1: this.context.myObj.CL.Plase1,
			HowLong2: this.context.myObj.CL.HowLong2,
			Title2: this.context.myObj.CL.Title2,
			Plase2: this.context.myObj.CL.Plase2,
			HowLong3: this.context.myObj.CL.HowLong3,
			Title3: this.context.myObj.CL.Title3,
			Plase3: this.context.myObj.CL.Plase3,
			Name: this.context.myObj.CL.Name,
			Address: this.context.myObj.CL.Address,
            Phone: this.context.myObj.CL.Phone,
			Email: this.context.myObj.CL.Email,
            Boss: this.context.myObj.CL.Boss,
            Organization: this.context.myObj.CL.Organization,
            Notes: this.context.myObj.CL.Notes
		};
		this.changeWorkStyle = this.changeWorkStyle.bind(this);
		this.changeHowLong = this.changeHowLong.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changePlase = this.changePlase.bind(this);
		this.changeHowLong1 = this.changeHowLong1.bind(this);
		this.changeTitle1 = this.changeTitle1.bind(this);
		this.changePlase1 = this.changePlase1.bind(this);
		this.changeHowLong2 = this.changeHowLong2.bind(this);
		this.changeTitle2 = this.changeTitle2.bind(this);
		this.changePlase2 = this.changePlase2.bind(this);
		this.changeHowLong3 = this.changeHowLong3.bind(this);
		this.changeTitle3 = this.changeTitle3.bind(this);
		this.changePlase3 = this.changePlase3.bind(this);
		this.putTextDone = this.putTextDone.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeAddres = this.changeAddres.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeBoss = this.changeBoss.bind(this);
        this.changeOrganization = this.changeOrganization.bind(this);
        this.changeNotes = this.changeNotes.bind(this);
	}

    changeName(e){
        this.setState({Name: e.target.value});
        this.context.myObj.CL.Name = e.target.value;
    }
    changeAddres(e){
        this.setState({Address: e.target.value});
        this.context.myObj.CL.Address = e.target.value;
    }
    changePhone(e){
        this.setState({Phone: e.target.value});
        this.context.myObj.CL.Phone = e.target.value;
    }
    changeEmail(e){
        this.setState({Email: e.target.value});
        this.context.myObj.CL.Email = e.target.value;
    }
    changeBoss(e){
        this.setState({Boss: e.target.value});
        this.context.myObj.CL.Boss = e.target.value;
    }
    changeOrganization(e){
        this.setState({Organization: e.target.value});
        this.context.myObj.CL.Organization = e.target.value;
    }
    changeNotes(e){
        this.setState({Notes: e.target.value});
        this.context.myObj.CL.Notes = e.target.value;
    }
	changeWorkStyle(e){
		this.setState({workStyle: e.target.value});
		this.context.myObj.CL.workStyle = e.target.value;
	}
	changeHowLong(e){
		this.setState({HowLong: e.target.value});
		this.context.myObj.CL.HowLong = e.target.value;
	}
	changeTitle(e){
		this.setState({Title: e.target.value});
		this.context.myObj.CL.Title = e.target.value;
	}
	changePlase(e){
		this.setState({Plase: e.target.value});
		this.context.myObj.CL.Plase = e.target.value;
	}
	changeHowLong1(e){
		this.setState({HowLong1: e.target.value});
		this.context.myObj.CL.HowLong1 = e.target.value;
	}
	changeTitle1(e){
		this.setState({Title1: e.target.value});
		this.context.myObj.CL.Title1 = e.target.value;
	}
	changePlase1(e){
		this.setState({Plase1: e.target.value});
		this.context.myObj.CL.Plase1 = e.target.value;
	}
	changeHowLong2(e){
		this.setState({HowLong2: e.target.value});
		this.context.myObj.CL.HowLong2 = e.target.value;
	}
	changeTitle2(e){
		this.setState({Title2: e.target.value});
		this.context.myObj.CL.Title2 = e.target.value;
	}
	changePlase2(e){
		this.setState({Plase2: e.target.value});
		this.context.myObj.CL.Plase2 = e.target.value;
	}
	changeHowLong3(e){
		this.setState({HowLong3: e.target.value});
		this.context.myObj.CL.HowLong3 = e.target.value;
	}
	changeTitle3(e){
		this.setState({Title3: e.target.value});
		this.context.myObj.CL.Title3 = e.target.value;
	}
	changePlase3(e){
		this.setState({Plase3: e.target.value});
		this.context.myObj.CL.Plase3 = e.target.value;
	}
	
	putTextDone(){
		this.context.myObj.CL.text = putText(textLetter, this.context.myObj.CL);
        this.context.myObj.WS.text.Letter = putText(textLetter, this.context.myObj.CL);
	}
	
	
	render() {
		return (
			<div className="main">
				<div className="title">
					<div className="headline">
						Cover Letter
					</div>
					<div className="clarifying">
						Please provide some details on your work history
					</div>
				</div>
				<div className="content">
					<p>Your data<br/>
						<input className="edit edit-data" placeholder="Name" type="text"
							   value={this.state.Name}
							   onChange={this.changeName}/><br/>
						<input className="edit edit-data" placeholder="Address" type="text"
							   value={this.state.Address}
							   onChange={this.changeAddres}/><br/>
						<input className="edit edit-data" placeholder="Phone" type="text"
							   value={this.state.Phone}
							   onChange={this.changePhone}/><br/>
						<input className="edit edit-data" placeholder="Email" type="text"
							   value={this.state.Email}
							   onChange={this.changeEmail}/>
					</p>
					<p>Data of Potential Boss<br/>
						<input className="edit edit-data" placeholder="Name of Potential Boss" type="text"
							   value={this.state.Boss}
							   onChange={this.changeBoss}/><br/>
						<input className="edit edit-data" placeholder="Organization" type="text"
							   value={this.state.Organization}
							   onChange={this.changeOrganization}/>
					</p>
					<p>What qualities best describe your work style<br/>
						<textarea placeholder="Write here..." 
										value={this.state.workStyle}
										onChange={this.changeWorkStyle}/>
					</p>
					<p>Where do you currently work?<br/>
						<input className="edit edit-work" placeholder="Title" type="text"
										value={this.state.Title}
										onChange={this.changeTitle}/>
						<input className="edit edit-work" placeholder="Place" type="text"
										value={this.state.Plase}
										onChange={this.changePlase}/>
						<input className="edit edit-work" placeholder="How long" type="text"
										value={this.state.HowLong}
										onChange={this.changeHowLong}/>
					</p>
					<p>Where were the last X amount of places that you’ve worked at?<br/>
						<input className="edit edit-work" placeholder="Title" type="text"
										value={this.state.Title1}
										onChange={this.changeTitle1}/>
						<input className="edit edit-work" placeholder="Place" type="text"
										value={this.state.Plase1}
										onChange={this.changePlase1}/>
						<input className="edit edit-work" placeholder="How long" type="text"
										value={this.state.HowLong1}
										onChange={this.changeHowLong1}/>
						<br/>
						<input className="edit edit-work" placeholder="Title" type="text"
										value={this.state.Title2}
										onChange={this.changeTitle2}/>
						<input className="edit edit-work" placeholder="Place" type="text"
										value={this.state.Plase2}
										onChange={this.changePlase2}/>
						<input className="edit edit-work" placeholder="How long" type="text"
										value={this.state.HowLong2}
										onChange={this.changeHowLong2}/>
						<br/>
						<input className="edit edit-work" placeholder="Title" type="text"
										value={this.state.Title3}
										onChange={this.changeTitle3}/>
						<input className="edit edit-work" placeholder="Place" type="text"
										value={this.state.Plase3}
										onChange={this.changePlase3}/>
						<input className="edit edit-work" placeholder="How long" type="text"
										value={this.state.HowLong3}
										onChange={this.changeHowLong3}/>
					</p>
                    <p>Notes<br/>
                        <textarea placeholder="Some information your potential employer would like to know, f.e.: _I will be visiting my brother-in-law who lives just outside Harrisburg next week, from 26 – 30 Nov.  I could easily swing by your office if you have time to discuss the position._"
                                  value={this.state.Notes}
                                  onChange={this.changeNotes}/>
                    </p>
					<div className="for-btn">
						<Link to="/nlp/letter/done">
							<input className="button" type="button" value="Generate" onClick={this.putTextDone}/>
						</Link>
						<Link to="/nlp">
							<input className="button btn-back" type="button" value="Back" />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

Letter.contextTypes = {
	myObj: React.PropTypes.object
}

export default Letter;
