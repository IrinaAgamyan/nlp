import React, { Component } from 'react';
import { Link } from 'react-router';
import {replacementMyText, getRandomInt, randomColor } from './MyFunctions';
import Dropdown from 'react-dropdown';


class Speech extends Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			selectBestMan: "none",
			selectMaidOfHonor: "none",
			selectBrideGroom: "none",
			selectGroomsmen: "none",
			selectBridesmaids: "none",
			
			storyGroomsmen: this.context.myObj.WS.storyGroomsmen,
			storyBridesmaids: this.context.myObj.WS.storyBridesmaids,
			anecdote: this.context.myObj.WS.anecdote,
			storyMeet: this.context.myObj.WS.storyMeet,
			storyParents: this.context.myObj.WS.storyParents,
			nameGroom: this.context.myObj.WS.nameGroom,
			nameBride: this.context.myObj.WS.nameBride,
			lastNameMaidOfHonor: this.context.myObj.WS.lastNameMaidOfHonor,
			firstNameMaidOfHonor: this.context.myObj.WS.firstNameMaidOfHonor,
			lastNameBestMan: this.context.myObj.WS.lastNameBestMan,
			firstNameBestMan: this.context.myObj.WS.firstNameBestMan
		};
		this.selectWho = this.selectWho.bind(this);
		this.selectStoryFriend = this.selectStoryFriend.bind(this);
		this.changeFirstNameBestMan = this.changeFirstNameBestMan.bind(this);
		this.changeLastNameBestMan = this.changeLastNameBestMan.bind(this);
		this.changeFirstNameMaidOfHonor = this.changeFirstNameMaidOfHonor.bind(this);
		this.changeLastNameMaidOfHonor = this.changeLastNameMaidOfHonor.bind(this);
		this.changeNameBride = this.changeNameBride.bind(this);
		this.changeNameGroom = this.changeNameGroom.bind(this);
		this.changeStoryParents = this.changeStoryParents.bind(this);
		this.changeStoryMeet = this.changeStoryMeet.bind(this);
		this.handleAnecdoteChange = this.handleAnecdoteChange.bind(this);
		this.changeStoryGroomsmen = this.changeStoryGroomsmen.bind(this);
		this.changeStoryBridesmaids = this.changeStoryBridesmaids.bind(this);
		this.putTextDone = this.putTextDone.bind(this);
	}
    replacementWordRandom(text, name, array, nameText){
        let temp = text;
        let color = randomColor();
        let obj;
        let val = -1;
        do {
            if (val > -1){
                this.context.myObj.arrayPosition[this.context.myObj.p + val + 1] = obj;
            }
            val++;
            text = temp;
            obj = {
                color: color,
                word: array[getRandomInt(0,array.length-1)],
                namePrice: name.replace(/\{|\}/g,''),
                nameText: nameText
            };
            let s = "<b onClick=' document.getElementById(\"ii\").value = \""+ (this.context.myObj.p + val +1) +"\";  " +
                                    "document.getElementById(\"ii\").click(); " +
                                    "document.getElementById(\"selectWord\").checked = true;' >" +
                "<font style='color: #"+color+"'>"+
                obj.word+
                "</font></b>";

            temp = temp.replace(name, s);
        } while (temp.localeCompare(text) !== 0);
        this.context.myObj.p += val;
        return text;
    }

    putText(text, WS, word, nameText){
        text = this.replacementWordRandom(text,"{Adverbs_1}", word.Adverbs.Adverbs_1, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_2}", word.Adverbs.Adverbs_2, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_3}", word.Adverbs.Adverbs_3, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_4}", word.Adverbs.Adverbs_4, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_5}", word.Adverbs.Adverbs_5, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_6}", word.Adverbs.Adverbs_6, nameText);
        text = this.replacementWordRandom(text,"{Adverbs_7}", word.Adverbs.Adverbs_7, nameText);
        text = this.replacementWordRandom(text,"{PersonalExperiences_1}", word.PersonalExperiences.PersonalExperiences_1, nameText);
        text = this.replacementWordRandom(text,"{PersonalExperiences_2}", word.PersonalExperiences.PersonalExperiences_2, nameText);
        text = this.replacementWordRandom(text,"{PersonalExperiences_3}", word.PersonalExperiences.PersonalExperiences_3, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_1}", word.Adjectives.Adjectives_1, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_2}", word.Adjectives.Adjectives_2, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_3}", word.Adjectives.Adjectives_3, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_4}", word.Adjectives.Adjectives_4, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_5}", word.Adjectives.Adjectives_5, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_6}", word.Adjectives.Adjectives_6, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_7}", word.Adjectives.Adjectives_7, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_8}", word.Adjectives.Adjectives_8, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_9}", word.Adjectives.Adjectives_9, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_10}", word.Adjectives.Adjectives_10, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_11}", word.Adjectives.Adjectives_11, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_12}", word.Adjectives.Adjectives_12, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_13}", word.Adjectives.Adjectives_13, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_14}", word.Adjectives.Adjectives_14, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_15}", word.Adjectives.Adjectives_15, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_16}", word.Adjectives.Adjectives_16, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_17}", word.Adjectives.Adjectives_16, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_18}", word.Adjectives.Adjectives_18, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_19}", word.Adjectives.Adjectives_19, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_20}", word.Adjectives.Adjectives_20, nameText);
        text = this.replacementWordRandom(text,"{Adjectives_21}", word.Adjectives.Adjectives_21, nameText);
        text = this.replacementWordRandom(text,"{Nouns_1}", word.Nouns.Nouns_1, nameText);
        text = this.replacementWordRandom(text,"{Nouns_2}", word.Nouns.Nouns_2, nameText);
        text = this.replacementWordRandom(text,"{Nouns_3}", word.Nouns.Nouns_3, nameText);
        text = this.replacementWordRandom(text,"{Nouns_4}", word.Nouns.Nouns_4, nameText);
        text = this.replacementWordRandom(text,"{Nouns_5}", word.Nouns.Nouns_5, nameText);
        text = this.replacementWordRandom(text,"{Nouns_6}", word.Nouns.Nouns_6, nameText);
        text = this.replacementWordRandom(text,"{Nouns_7}", word.Nouns.Nouns_7, nameText);
        text = this.replacementWordRandom(text,"{Nouns_8}", word.Nouns.Nouns_8, nameText);
        text = this.replacementWordRandom(text,"{Nouns_9}", word.Nouns.Nouns_9, nameText);
        text = this.replacementWordRandom(text,"{Nouns_10}", word.Nouns.Nouns_10, nameText);
        text = this.replacementWordRandom(text,"{Nouns_11}", word.Nouns.Nouns_11, nameText);
        text = this.replacementWordRandom(text,"{Nouns_12}", word.Nouns.Nouns_12, nameText);
        text = this.replacementWordRandom(text,"{Nouns_13}", word.Nouns.Nouns_13, nameText);
        text = this.replacementWordRandom(text,"{Nouns_14}", word.Nouns.Nouns_14, nameText);
        text = this.replacementWordRandom(text,"{Nouns_15}", word.Nouns.Nouns_15, nameText);
        text = this.replacementWordRandom(text,"{Nouns_16}", word.Nouns.Nouns_16, nameText);
        text = this.replacementWordRandom(text,"{Nouns_17}", word.Nouns.Nouns_17, nameText);
        text = this.replacementWordRandom(text,"{Nouns_18}", word.Nouns.Nouns_18, nameText);
        text = this.replacementWordRandom(text,"{Injections}", word.Injections, nameText);
        text = this.replacementWordRandom(text,"{Verbs_1}", word.Verbs.Verbs_1, nameText);
        text = this.replacementWordRandom(text,"{Verbs_2}", word.Verbs.Verbs_2, nameText);
        text = this.replacementWordRandom(text,"{Verbs_3}", word.Verbs.Verbs_3, nameText);
        text = this.replacementWordRandom(text,"{Verbs_4}", word.Verbs.Verbs_4, nameText);
        text = this.replacementWordRandom(text,"{Verbs_5}", word.Verbs.Verbs_5, nameText);
        text = this.replacementWordRandom(text,"{Verbs_6}", word.Verbs.Verbs_6, nameText);
        text = this.replacementWordRandom(text,"{Verbs_7}", word.Verbs.Verbs_7, nameText);
        text = this.replacementWordRandom(text,"{Verbs_8}", word.Verbs.Verbs_8, nameText);
        text = this.replacementWordRandom(text,"{Verbs_9}", word.Verbs.Verbs_9, nameText);
        text = this.replacementWordRandom(text,"{Verbs_10}", word.Verbs.Verbs_10, nameText);
        text = this.replacementWordRandom(text,"{Verbs_11}", word.Verbs.Verbs_11, nameText);
        text = this.replacementWordRandom(text,"{Verbs_12}", word.Verbs.Verbs_12, nameText);
        text = this.replacementWordRandom(text,"{Verbs_13}", word.Verbs.Verbs_13, nameText);
        text = this.replacementWordRandom(text,"{Verbs_14}", word.Verbs.Verbs_14, nameText);
        text = this.replacementWordRandom(text,"{Verbs_15}", word.Verbs.Verbs_15, nameText);
        text = this.replacementWordRandom(text,"{Verbs_16}", word.Verbs.Verbs_16, nameText);
        text = this.replacementWordRandom(text,"{Verbs_17}", word.Verbs.Verbs_17, nameText);
        text = this.replacementWordRandom(text,"{Verbs_18}", word.Verbs.Verbs_18, nameText);
        text = this.replacementWordRandom(text,"{Verbs_19}", word.Verbs.Verbs_19, nameText);
        text = this.replacementWordRandom(text,"{Verbs_20}", word.Verbs.Verbs_20, nameText);
        text = this.replacementWordRandom(text,"{Verbs_21}", word.Verbs.Verbs_21, nameText);
        text = this.replacementWordRandom(text,"{Verbs_22}", word.Verbs.Verbs_22, nameText);
        text = this.replacementWordRandom(text,"{Verbs_23}", word.Verbs.Verbs_23, nameText);

        text = replacementMyText(text,"{Anecdote}", WS.anecdote? WS.anecdote : "");
        text = replacementMyText(text,"{Best man and ushers}", WS.storyGroomsmen? WS.storyGroomsmen : "");
        text = replacementMyText(text,"{History meet}", WS.storyMeet? WS.storyMeet : "");
        text = replacementMyText(text,"{Parents story}", WS.storyParents? WS.storyParents : "");
        text = replacementMyText(text,"{Best man}", WS.firstNameBestMan? WS.firstNameBestMan : "");
        text = replacementMyText(text,"{First Name BM}", WS.lastNameBestMan? WS.lastNameBestMan : "");
        text = replacementMyText(text,"{Bride}", WS.nameBride? WS.nameBride : "");
        text = replacementMyText(text,"{Groom}", WS.nameGroom? WS.nameGroom : "");
        text = replacementMyText(text,"{Maid of Honor}", WS.lastNameMaidOfHonor? WS.lastNameMaidOfHonor : "");
        text = replacementMyText(text,"{First Name MOH}", WS.firstNameMaidOfHonor? WS.firstNameMaidOfHonor : "");
        return text;
    }
	/*___________________input___________________________*/
	changeFirstNameBestMan(e) {
		this.setState({firstNameBestMan: e.target.value});
		this.context.myObj.WS.firstNameBestMan = e.target.value;
	}
	changeLastNameBestMan(e) {
		this.setState({lastNameBestMan: e.target.value});
		this.context.myObj.WS.lastNameBestMan = e.target.value;
	}
	changeFirstNameMaidOfHonor(e) {
		this.setState({firstNameMaidOfHonor: e.target.value});
		this.context.myObj.WS.firstNameMaidOfHonor = e.target.value;
	}
	changeLastNameMaidOfHonor(e) {
		this.setState({lastNameMaidOfHonor: e.target.value});
		this.context.myObj.WS.lastNameMaidOfHonor = e.target.value;
	}
	changeNameBride(e) {
		this.setState({nameBride: e.target.value});
		this.context.myObj.WS.nameBride = e.target.value;
	}
	changeNameGroom(e) {
		this.setState({nameGroom: e.target.value});
		this.context.myObj.WS.nameGroom = e.target.value;
	}
	/*____________________textarea_______________________*/
	changeStoryParents(e) {
		this.setState({storyParents: e.target.value});
		this.context.myObj.WS.storyParents = e.target.value;
	}
	changeStoryMeet(e) {
		this.setState({storyMeet: e.target.value});
		this.context.myObj.WS.storyMeet = e.target.value;
	}
	handleAnecdoteChange(e) {
		this.setState({anecdote: e.target.value});
		this.context.myObj.WS.anecdote = e.target.value;
	}
	changeStoryGroomsmen(e){
		this.setState({storyGroomsmen: e.target.value});
		this.context.myObj.WS.storyGroomsmen = e.target.value;
	}
	changeStoryBridesmaids(e){
		this.setState({storyBridesmaids: e.target.value});
		this.context.myObj.WS.storyBridesmaids = e.target.value;
	}

	putTextDone(){
		let WS = this.context.myObj.WS;
		if (WS.word.length < 1) WS.word = this.context.myObj.word;
        let word = WS.word;
		let textSpeechArray = this.context.myObj.textSpeechArray;
        let mObj = this.context.myObj;
        mObj.arrayTextPosition["Introduction"] = this.context.myObj.p + 1;
		WS.text.Introduction = this.putText(textSpeechArray.Introduction, WS, word, "Introduction");
        mObj.arrayTextPosition["Best_man_and_ushers"] = this.context.myObj.p + 1;
		WS.text.Best_man_and_ushers = this.putText(textSpeechArray.Best_man_and_ushers, WS, word, "Best_man_and_ushers");
        mObj.arrayTextPosition["Bridesmaids"] = this.context.myObj.p + 1;
		WS.text.Bridesmaids = this.putText(textSpeechArray.Bridesmaids, WS, word, "Bridesmaids");
        mObj.arrayTextPosition["Parents"] = this.context.myObj.p + 1;
		WS.text.Parents = this.putText(textSpeechArray.Parents, WS, word, "Parents");
        mObj.arrayTextPosition["Wife"] = this.context.myObj.p + 1;
		WS.text.Wife = this.putText(textSpeechArray.Wife, WS, word, "Wife");
	}

	selectWho(e){
        this.context.myObj.who = e.value;
        switch (e.value){
            case  "Best Man":
                this.setState({selectBestMan: ""});
                this.setState({selectMaidOfHonor: "none"});
                this.setState({selectBrideGroom: "none"});
                break;
            case "Maid of Honor":
                this.setState({selectBestMan: "none"});
                this.setState({selectMaidOfHonor: ""});
                this.setState({selectBrideGroom: "none"});
                break;
            case "Bride":
            case "Groom":
                this.setState({selectBestMan: "none"});
                this.setState({selectMaidOfHonor: "none"});
                this.setState({selectBrideGroom: ""});
                break;
            default:
                this.setState({selectBestMan: "none"});
                this.setState({selectMaidOfHonor: "none"});
                this.setState({selectBrideGroom: "none"});
        };
	}
    selectStoryFriend(e){
		this.context.myObj.storyFriend = e.value;
		switch (e.value){
			case  "groomsmen":
				this.setState({selectGroomsmen: ""});
				this.setState({selectBridesmaids: "none"});
			break;
			case "bridesmaids":
				this.setState({selectGroomsmen: "none"});
				this.setState({selectBridesmaids: ""});
			break;
			case "groomsmen/bridesmaids":
				this.setState({selectGroomsmen: ""});
				this.setState({selectBridesmaids: ""});
			break;
			default:
				this.setState({selectBridesmaids: "none"});
				this.setState({selectGroomsmen: "none"});
		};
	}
	
	render() {
		return (
		  <div className="main">
				<div className="title">
					<div className="headline">
						Wedding Speech
					</div>
					<div className="clarifying">
						Please provide details on your speech
					</div>
				</div>
				<div className="content">
				
					<p>Who is the speech for:<br/>
						<Dropdown
							options={[
                                { value: 'Bride', label: 'Bride' },
                                { value: 'Groom', label: 'Groom' },
                                { value: 'Maid of Honor', label: 'Maid of Honor' },
                                { value: 'Best Man', label: 'Best Man' }
                            ]}
							placeholder="Select (Bride / Groom / Maid of Honor / Best Man)"
							value={this.state.label}
							onChange={this.selectWho}
						/>
					</p>
					
					<div className={this.state.selectBestMan}>
						<p>Enter Name of Best Man<br/>
							<input className="edit" placeholder="First Name" type="text"
										value={this.state.firstNameBestMan}
										onChange={this.changeFirstNameBestMan}/>
							<input className="edit" placeholder="Last Name" type="text"
										value={this.state.lastNameBestMan}
										onChange={this.changeLastNameBestMan}/>
						</p>
					</div>
					<div className={this.state.selectMaidOfHonor}>
						<p>Enter Name of Maid of Honor<br/>
							<input className="edit" placeholder="First Name" type="text"
										value={this.state.firstNameMaidOfHonor}
										onChange={this.changeFirstNameMaidOfHonor}/>
							<input className="edit" placeholder="Last Name" type="text"
										value={this.state.lastNameMaidOfHonor}
										onChange={this.changeLastNameMaidOfHonor}/>
						</p>
					</div>
					<div className={this.state.selectBrideGroom}>
						<p>Enter Name of Bride & Groom<br/>
							<input className="edit" placeholder="Bride Name here..." type="text"
										value={this.state.nameBride}
										onChange={this.changeNameBride}/>
							<input className="edit" placeholder="Groom Name here..." type="text"
										value={this.state.nameGroom}
										onChange={this.changeNameGroom}/>
						</p>
					</div>
					
					<p>Add a personal anecdote about the [Bride/Groom]<br/>
						<textarea placeholder="Write here..." 
										value={this.state.anecdote}
										onChange={this.handleAnecdoteChange}/>
					</p>
					<p>Do you have a story about the [groomsmen/bridesmaids]:<br/>
						<Dropdown
							options={[
                                { value: 'groomsmen', label: 'groomsmen' },
                                { value: 'bridesmaids', label: 'bridesmaids' },
                                { value: 'groomsmen/bridesmaids', label: 'groomsmen/bridesmaids' }
                            ]}
							placeholder="Select one or both groups"
							value={this.state.label}
							onChange={this.selectStoryFriend}
						/>
					</p>
					<div className={this.state.selectGroomsmen}>
						<p>Story about the groomsmen<br/>
							<textarea placeholder="Groomsmen Story here..." 
										value={this.state.storyGroomsmen}
										onChange={this.changeStoryGroomsmen}/>
						</p>
					</div>
					<div className={this.state.selectBridesmaids}>
						<p>Story about the bridesmaids<br/>
							<textarea placeholder="Bridesmaids Story here..." 
										value={this.state.storyBridesmaids}
										onChange={this.changeStoryBridesmaids}/>
						</p>
					</div>
					<p><br/>Do you have a story about the parents?<br/>
						<textarea placeholder="Parents Story here..." 
										value={this.state.storyParents}
										onChange={this.changeStoryParents}/>
					</p>
					<p>How did [Bride/Groom] meet?<br/>
						<textarea placeholder="(example: The Bride/Groom met 4 years ago, at the Metropolitan Museum, when I was with Corey for a work-related event.)"
										value={this.state.storyMeet}
										onChange={this.changeStoryMeet}/>
					</p>
					<p>Please choose a tone of the speech<br/>
						<Dropdown
							options={[
                                { value: 'Excitement', label: 'Excitement' },
                                { value: 'Poignant', label: 'Poignant' },
                                { value: 'Humorous', label: 'Humorous' }
                            ]}
							placeholder="Select (Excitement / Poignant / Humorous)"
						/>
					</p>
					<div className="for-btn">
						<Link to="/nlp/speech/done">
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

Speech.contextTypes = {
	myObj: React.PropTypes.object
}

export default Speech;
