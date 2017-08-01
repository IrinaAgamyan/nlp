import React, { Component } from 'react';
import ModalEditor from './ModalEditor';
import ModalSelectWord from './ModalSelectWord';
import { Link } from 'react-router';
import {replacementMyText, inputTextToSpeech} from './MyFunctions';
import $ from 'jquery';



class SpeechDone extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
                Introduction: this.context.myObj.WS.text.Introduction,
                Best_man_and_ushers: this.context.myObj.WS.text.Best_man_and_ushers,
                Bridesmaids: this.context.myObj.WS.text.Bridesmaids,
                Parents: this.context.myObj.WS.text.Parents,
                Wife: this.context.myObj.WS.text.Wife,
            tit1: "I) Introduction",
            tit2: "II) Best man and ushers",
            tit3: "III) Bridesmaids",
            tit4: "IV) Parents",
            tit5: "V) Wife",
            arrnum: ['modal-1', 'modal-2', 'modal-3', 'modal-4', 'modal-5'],
            d1: "", d2: "", d3: "", d4: "", d5: "",
            btn1: inputTextToSpeech(this.context.myObj.WS.text.Introduction),
            btn2: inputTextToSpeech(this.context.myObj.WS.text.Best_man_and_ushers),
            btn3: inputTextToSpeech(this.context.myObj.WS.text.Bridesmaids),
            btn4: inputTextToSpeech(this.context.myObj.WS.text.Parents),
            btn5: inputTextToSpeech(this.context.myObj.WS.text.Wife),
            array: {},
            word: "",
            k: "",
            btnHome: '<input class="button btn-back btn-mrgn" type="button" value="Home" onClick="responsiveVoice.speak(\'\');"/>',
            btnBack: '<input class="button btn-back" type="button" value="Back" onClick="responsiveVoice.speak(\'\');"/>',
            edit: '<div onClick="stopAll();">Edit</div>',
            delete: '<div onClick="stopAll();">Delete</div>'
		};
        this.onClickEdit = this.onClickEdit.bind(this);
        this.editText = this.editText.bind(this);
        this.editWordInText = this.editWordInText.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
        this.putTextDone = this.putTextDone.bind(this);
        this.putNewText = this.putNewText.bind(this);
        this.putText = this.putText.bind(this);
        this.replacementWord = this.replacementWord.bind(this);
	}
    replacementWord(text, name){
        let temp = text;
        let pos = this.context.myObj.arrayTextPosition.current;
        let obj = this.context.myObj.arrayPosition;
        let val = -1;
        let s;
        do {
            val++;
            text = temp;
            if (obj[(pos + val + 1)] !== undefined){
                s = "<b onClick='document.getElementById(\"ii\").value = \""+(pos + val + 1)+"\"; " +
                    "document.getElementById(\"ii\").click(); " +
                    "document.getElementById(\"selectWord\").checked = true;' >" +
                    "<font style='color: #"+(obj[(pos + val + 1)].color)+"'>"+
                    obj[(pos + val + 1)].word+
                    "</font></b>";}
            temp = temp.replace(name, s);
        } while (temp.localeCompare(text) !== 0);
        this.context.myObj.arrayTextPosition.current += val;
        return text;
    }

    putText(text, WS){
        text = this.replacementWord(text,"{Adverbs_1}");
        text = this.replacementWord(text,"{Adverbs_2}");
        text = this.replacementWord(text,"{Adverbs_3}");
        text = this.replacementWord(text,"{Adverbs_4}");
        text = this.replacementWord(text,"{Adverbs_5}");
        text = this.replacementWord(text,"{Adverbs_6}");
        text = this.replacementWord(text,"{Adverbs_7}");
        text = this.replacementWord(text,"{PersonalExperiences_1}");
        text = this.replacementWord(text,"{PersonalExperiences_2}");
        text = this.replacementWord(text,"{PersonalExperiences_3}");
        text = this.replacementWord(text,"{Adjectives_1}");
        text = this.replacementWord(text,"{Adjectives_2}");
        text = this.replacementWord(text,"{Adjectives_3}");
        text = this.replacementWord(text,"{Adjectives_4}");
        text = this.replacementWord(text,"{Adjectives_5}");
        text = this.replacementWord(text,"{Adjectives_6}");
        text = this.replacementWord(text,"{Adjectives_7}");
        text = this.replacementWord(text,"{Adjectives_8}");
        text = this.replacementWord(text,"{Adjectives_9}");
        text = this.replacementWord(text,"{Adjectives_10}");
        text = this.replacementWord(text,"{Adjectives_11}");
        text = this.replacementWord(text,"{Adjectives_12}");
        text = this.replacementWord(text,"{Adjectives_13}");
        text = this.replacementWord(text,"{Adjectives_14}");
        text = this.replacementWord(text,"{Adjectives_15}");
        text = this.replacementWord(text,"{Adjectives_16}");
        text = this.replacementWord(text,"{Adjectives_17}");
        text = this.replacementWord(text,"{Adjectives_18}");
        text = this.replacementWord(text,"{Adjectives_19}");
        text = this.replacementWord(text,"{Adjectives_20}");
        text = this.replacementWord(text,"{Adjectives_21}");
        text = this.replacementWord(text,"{Nouns_1}");
        text = this.replacementWord(text,"{Nouns_2}");
        text = this.replacementWord(text,"{Nouns_3}");
        text = this.replacementWord(text,"{Nouns_4}");
        text = this.replacementWord(text,"{Nouns_5}");
        text = this.replacementWord(text,"{Nouns_6}");
        text = this.replacementWord(text,"{Nouns_7}");
        text = this.replacementWord(text,"{Nouns_8}");
        text = this.replacementWord(text,"{Nouns_9}");
        text = this.replacementWord(text,"{Nouns_10}");
        text = this.replacementWord(text,"{Nouns_11}");
        text = this.replacementWord(text,"{Nouns_12}");
        text = this.replacementWord(text,"{Nouns_13}");
        text = this.replacementWord(text,"{Nouns_14}");
        text = this.replacementWord(text,"{Nouns_15}");
        text = this.replacementWord(text,"{Nouns_16}");
        text = this.replacementWord(text,"{Nouns_17}");
        text = this.replacementWord(text,"{Nouns_18}");
        text = this.replacementWord(text,"{Injections}");
        text = this.replacementWord(text,"{Verbs_1}");
        text = this.replacementWord(text,"{Verbs_2}");
        text = this.replacementWord(text,"{Verbs_3}");
        text = this.replacementWord(text,"{Verbs_4}");
        text = this.replacementWord(text,"{Verbs_5}");
        text = this.replacementWord(text,"{Verbs_6}");
        text = this.replacementWord(text,"{Verbs_7}");
        text = this.replacementWord(text,"{Verbs_8}");
        text = this.replacementWord(text,"{Verbs_9}");
        text = this.replacementWord(text,"{Verbs_10}");
        text = this.replacementWord(text,"{Verbs_11}");
        text = this.replacementWord(text,"{Verbs_12}");
        text = this.replacementWord(text,"{Verbs_13}");
        text = this.replacementWord(text,"{Verbs_14}");
        text = this.replacementWord(text,"{Verbs_15}");
        text = this.replacementWord(text,"{Verbs_16}");
        text = this.replacementWord(text,"{Verbs_17}");
        text = this.replacementWord(text,"{Verbs_18}");
        text = this.replacementWord(text,"{Verbs_19}");
        text = this.replacementWord(text,"{Verbs_20}");
        text = this.replacementWord(text,"{Verbs_21}");
        text = this.replacementWord(text,"{Verbs_22}");
        text = this.replacementWord(text,"{Verbs_23}");

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

    putTextDone(){
        let WS = this.context.myObj.WS;
        if (WS.word.length < 1) WS.word = this.context.myObj.word;
        let word = WS.word;
        let textSpeechArray = this.context.myObj.textSpeechArray;
        WS.text.Introduction = this.putText(textSpeechArray.Introduction, WS, word, "Introduction");
        WS.text.Best_man_and_ushers = this.putText(textSpeechArray.Best_man_and_ushers, WS, word, "Best_man_and_ushers");
        WS.text.Bridesmaids = this.putText(textSpeechArray.Bridesmaids, WS, word, "Bridesmaids");
        WS.text.Parents = this.putText(textSpeechArray.Parents, WS, word, "Parents");
        WS.text.Wife = this.putText(textSpeechArray.Wife, WS, word, "Parents");

        this.setState({Introduction: WS.text.Introduction});
        this.setState({Best_man_and_ushers: WS.text.Best_man_and_ushers});
        this.setState({Bridesmaids: WS.text.Bridesmaids});
        this.setState({Parents: WS.text.Parents});
        this.setState({Wife: WS.text.Wife});
    }

    editText(num,item,tit){
	    switch (num){
            case 'modal-1':
                this.setState({Introduction: item});
                this.setState({tit1: tit});
                this.setState({btn1: inputTextToSpeech(item)});
                break;
            case 'modal-2':
                this.setState({Best_man_and_ushers: item});
                this.setState({tit2: tit});
                this.setState({btn2: inputTextToSpeech(item)});
                break;
            case 'modal-3':
                this.setState({Bridesmaids: item});
                this.setState({tit3: tit});
                this.setState({btn3: inputTextToSpeech(item)});
                break;
            case 'modal-4':
                this.setState({Parents: item});
                this.setState({tit4: tit});
                this.setState({btn4: inputTextToSpeech(item)});
                break;
            case 'modal-5':
                this.setState({Wife: item});
                this.setState({tit5: tit});
                this.setState({btn5: inputTextToSpeech(item)});
                break;
            default: break;
        }
    }
    editWordInText(word){
        let mObj = this.context.myObj;
        mObj.arrayPosition[$("#ii").val()].word = word;
        let nameText = mObj.arrayPosition[$("#ii").val()].nameText;
        mObj.arrayTextPosition.current = Number(mObj.arrayTextPosition[nameText])-1;

        let text = this.putText(this.context.myObj.textSpeechArray[nameText], this.context.myObj.WS);
        this.context.myObj.WS.text[nameText] = text;
        switch (nameText){
            case 'Introduction':
                this.setState({Introduction: text});
                break;
            case 'Best_man_and_ushers':
                this.setState({Best_man_and_ushers: text});
                break;
            case 'Bridesmaids':
                this.setState({Bridesmaids: text});
                break;
            case 'Parents':
                this.setState({Parents: text});
                break;
            case 'Wife':
                this.setState({Wife: text});
                break;
            default: break;
        }
    }

    onClickDel(e){
        e.preventDefault();
        switch (e.target.id){
            case "d1":
                this.setState({d1: "none"});
                break;
            case "d2":
                this.setState({d2: "none"});
                break;
            case "d3":
                this.setState({d3: "none"});
                break;
            case "d4":
                this.setState({d4: "none"});
                break;
            default:
                this.setState({d5: "none"});
                break;
        }
    }
    onClickEdit(e) {
        switch (e.target.id){
            case "d1":
                if (!$('#modal-1').prop('checked')){
                    $('#modal-1').prop('checked', true)}
                break;
            case "d2":
                if (!$('#modal-2').prop('checked')){
                    $('#modal-2').prop('checked', true)}
                break;
            case "d3":
                if (!$('#modal-3').prop('checked')){
                    $('#modal-3').prop('checked', true)}
                break;
            case "d4":
                if (!$('#modal-4').prop('checked')){
                    $('#modal-4').prop('checked', true)}
                break;
            default:
                if (!$('#modal-5').prop('checked')){
                    $('#modal-5').prop('checked', true)}
                break;
        }
	}
	putNewText(e){
        let obj = this.context.myObj.arrayPosition[e.target.value];
        let words = this.context.myObj.word;
        let tet;
        if (obj.namePrice.indexOf('_') + 1) {
            tet = words[obj.namePrice.split('_')[0]][obj.namePrice];
        }
        else{
            tet = words[obj.namePrice];
        }
        let arr = [];
        for(let i = 0; i < tet.length; i++){
            arr[i] = { value: tet[i], label: tet[i] };
        }
        this.context.myObj.newWord.arrWord = arr;
        this.context.myObj.newWord.nameText = obj.nameText;
        this.setState({k: this.context.myObj.newWord.arrWord});
        if (!$('#selectWord').prop('checked')){
            $('#selectWord').prop('checked', true)}
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
					<div className="content-title-ts">First Speech—The Groom’s Wedding Speech</div>

                    <div className={this.state.d1}>
                        <div className="text-edit-ts">
                            <div className="text-edit-button edit-button-ts" id="d1" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
                            <div className="text-edit-button delete-button-ts" id="d1" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
                            <h3>{this.state.tit1}</h3>
                            <p dangerouslySetInnerHTML={{__html: this.state.Introduction}}></p>
                            <div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Introduction,'Introduction')}}></div>
                        </div>
                        <ModalEditor prps={{text: "Introduction", initId: this.state.arrnum[0], title: this.state.tit1}}  onChangeText={this.editText} />
                    </div>
                    <div className={this.state.d2}>
                        <div className="text-edit-ts">
                            <div className="text-edit-button edit-button-ts" id="d2" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
                            <div className="text-edit-button delete-button-ts" id="d2" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
                            <h3>{this.state.tit2}</h3>
                            <p dangerouslySetInnerHTML={{__html: this.state.Best_man_and_ushers}}></p>
                            <div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Best_man_and_ushers,'Best_man_and_ushers')}}></div>
                        </div>
                        <ModalEditor prps={{text: "Best_man_and_ushers", initId: this.state.arrnum[1], title: this.state.tit2}}  onChangeText={this.editText} />
                    </div>
                    <div className={this.state.d3}>
                        <div className="text-edit-ts">
                            <div className="text-edit-button edit-button-ts" id="d3" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
                            <div className="text-edit-button delete-button-ts" id="d3" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
                            <h3>{this.state.tit3}</h3>
                            <p dangerouslySetInnerHTML={{__html: this.state.Bridesmaids}}></p>
                            <div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Bridesmaids,'Bridesmaids')}}></div>
                        </div>
                        <ModalEditor prps={{text: "Bridesmaids", initId: this.state.arrnum[2], title: this.state.tit3}}  onChangeText={this.editText} />
                    </div>
                    <div className={this.state.d4}>
                        <div className="text-edit-ts">
                            <div className="text-edit-button edit-button-ts" id="d4" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
                            <div className="text-edit-button delete-button-ts" id="d4" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
                            <h3>{this.state.tit4}</h3>
                            <p dangerouslySetInnerHTML={{__html: this.state.Parents}}></p>
                            <div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Parents,'Parents')}}></div>
                        </div>
                        <ModalEditor prps={{text: "Parents", initId: this.state.arrnum[3], title: this.state.tit4}}  onChangeText={this.editText} />
                    </div>
                    <div className={this.state.d5}>
                        <div className="text-edit-ts">
                            <div className="text-edit-button edit-button-ts" id="d5" onClick={this.onClickEdit} dangerouslySetInnerHTML={{__html: this.state.edit}}></div>
                            <div className="text-edit-button delete-button-ts" id="d5" onClick={this.onClickDel} dangerouslySetInnerHTML={{__html: this.state.delete}}></div>
                            <h3>{this.state.tit5}</h3>
                            <p dangerouslySetInnerHTML={{__html: this.state.Wife}}></p>
                            <div className='contaner-btn' dangerouslySetInnerHTML={{__html: inputTextToSpeech(this.context.myObj.WS.text.Wife,'Wife')}}></div>
                        </div>
                        <ModalEditor prps={{text: "Wife", initId: this.state.arrnum[4], title: this.state.tit5}}  onChangeText={this.editText} />
                    </div>
                    <div className="for-btn-done">
                        <Link to="/nlp" dangerouslySetInnerHTML={{__html: this.state.btnHome}}/>
                        <Link to="/nlp/speech" dangerouslySetInnerHTML={{__html: this.state.btnBack}}/>
                    </div>
                    <ModalSelectWord save={this.editWordInText} />
                    <input type="text" id="ii" onClick={this.putNewText}/>

				</div>
			</div>
		);
	}
}

SpeechDone.contextTypes = {
	myObj: React.PropTypes.object
}

export default SpeechDone;
