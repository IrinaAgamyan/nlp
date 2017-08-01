import React, { Component } from 'react';
import ModalEditor from './ModalEditor';
import { Link } from 'react-router';
import {inputTextToSpeech} from './MyFunctions';

class LetterDone extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			text: this.context.myObj.WS.text.Letter,
            title: "Cover Letter",
			number: 'modal-1',
			hidden: "",
			btn: inputTextToSpeech(this.context.myObj.CL.text),
            btnHome: '<input class="button btn-back btn-mrgn" type="button" value="Home" onClick="responsiveVoice.speak(\'\');"/>',
            btnBack: '<input class="button btn-back" type="button" value="Back" onClick="responsiveVoice.speak(\'\');"/>',
			edit: '<div onClick="stopAll();">Edit</div>',
            delete: '<div onClick="stopAll();">Delete</div>'
		};

		this.onClickEdit = this.onClickEdit.bind(this);
        this.editText = this.editText.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
	}

    onClickDel(){
        this.setState({hidden: "none"});
    }
	editText(num,item,tit){
		this.setState({text: item});
        this.setState({title: tit});
        this.setState({btn: inputTextToSpeech(item)})
        this.context.myObj.WS.text.Letter = item;
	}

	onClickEdit(e) {
		e.preventDefault();
		if (!document.getElementById(this.state.number).checked){
			document.getElementById(this.state.number).checked = true;}

	}

	render() {
		return (
			<div className="main">
				<div className="main-title-ts">
					<div className="main-headline-ts">
						Template Sample
					</div>
					<div className="main-clarifying-ts">
						You can view the generated template below
					</div>
				</div>
				<div className="content-ts">
					<div className="content-title-ts">Cover Letter</div>
					<div className={this.state.hidden}>
						<div className="text-edit-ts" >
							<div className="text-edit-button edit-button-ts" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
							<div className="text-edit-button delete-button-ts" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
							<h3>{this.state.title}</h3>
							<p dangerouslySetInnerHTML={{__html: this.state.text}}></p>
							<div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Letter,'Letter')}}></div>
						</div>
					</div>
					<ModalEditor prps={{text: "Letter", initId: this.state.number, title: this.state.title}}  onChangeText={this.editText} />

					<div className="for-btn-done">
						<Link to="/nlp" dangerouslySetInnerHTML={{__html: this.state.btnHome}}/>
						<Link to="/nlp/letter" dangerouslySetInnerHTML={{__html: this.state.btnBack}}/>
					</div>
				</div>
			</div>
		);
	}
}

LetterDone.contextTypes = {
	myObj: React.PropTypes.object
}

export default LetterDone;
