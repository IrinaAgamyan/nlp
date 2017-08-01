import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import $ from 'jquery';


class ModalSelectWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ""
        };
        this.closeWindow = this.closeWindow.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.selectWord = this.selectWord.bind(this);
    }
    closeWindow(e){
        e.preventDefault();
        $('#selectWord').prop('checked', false);
        this.setState({word: ""});
        $('#selWord').val("");
    }

    onClickEdit(e) {
        e.preventDefault();
        if ($('#selectWord').prop('checked')){
            $('#selectWord').prop('checked', false);
            if (this.props.save){
                this.props.save(this.state.word);
            }
        }
        this.setState({word: ""});
        $('#selWord').val("");
    }
    selectWord(e){
        this.setState({word: e.value});
    }

    render() {
        return (
            <div className="modal" >
                <input className="modal-open" id="selectWord" type="checkbox"  hidden/>
                <div className="modal-wrap" role="dialog">
                    <div className="modal-dialog ModalSelectWord">
                        <div className="modal-header">
                            <h2>Text Section</h2>
                            <label className="btn-m-close" onClick={this.closeWindow}>×</label>
                        </div>
                        <div className="modal-body">
                            <Dropdown id="selWord"
                                options={this.context.myObj.newWord.arrWord}
                                placeholder="Select the word"
                                value={this.state.word}
                                onChange={this.selectWord}
                            />
                        </div>
                        <div className="modal-footer">
                            <label className="btn-m" onClick={this.closeWindow} >Cancel</label>
                            <label className="btn-m btn-m-primary" onClick={this.onClickEdit} >Save Changes</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ModalSelectWord.contextTypes = {
    myObj: React.PropTypes.object
}

export default ModalSelectWord;
