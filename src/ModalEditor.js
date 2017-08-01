import React, { Component } from 'react';
import TinyMCE from 'react-tinymce-input';
import $ from 'jquery';

const TINYMCE_CONFIG = {
    'language'  : 'en',
    'theme'     : 'modern',
    'toolbar'   : 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent ',
    'menubar'   : false,
    'statusbar' : true,
    'resize'    : false,
    'plugins'   : 'link,spellchecker,paste',
    'theme_modern_toolbar_location' : 'top',
    'theme_modern_toolbar_align': 'left'
};

class ModalEditor extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            name: this.props.prps.text,
            text: "",
            id: this.props.prps.initId,
            title: this.props.prps.title
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.titleChange = this.titleChange.bind(this);
    }

    handleEditorChange = (e) => {
        this.setState({text: e});
    }
    titleChange = (e) => {
        this.setState({title: e.target.value});
    }

    closeWindow(e){
        e.preventDefault();
        $('#'+this.state.id).prop('checked', false);
    }

    onClickEdit(e) {
        e.preventDefault();
        if ($('#'+this.state.id).prop('checked')){
            $('#'+this.state.id).prop('checked', false);
            if (this.props.onChangeText){
                if (this.state.text === ""){
                    this.props.onChangeText(this.state.id, this.context.myObj.WS.text[this.state.name], this.state.title);
                }else{
                    this.props.onChangeText(this.state.id, this.state.text, this.state.title);
                }
            }
        }
    }
    render() {
        return (
            <div className="modal">
                <input className="modal-open" id={this.state.id} type="checkbox" hidden/>
                <div className="modal-wrap" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-header">
                            <h2>Text Section</h2>
                            <label className="btn-m-close" onClick={this.closeWindow}>×</label>
                        </div>
                        <div className="modal-body">
                            <p>Title</p>
                            <div className="box-inp">
                                <input className="inp" type="text" placeholder="Title" value={this.state.title} onChange={this.titleChange}/>
                            </div>
                            <div className="myEditorStyle">


                                <TinyMCE
                                    value={this.state.text.length <1 ? this.context.myObj.WS.text[this.state.name] : this.state.text}
                                    tinymceConfig={TINYMCE_CONFIG}
                                    onChange={this.handleEditorChange}
                                />
                            </div>
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

ModalEditor.contextTypes = {
    myObj: React.PropTypes.object
}

export default ModalEditor;
