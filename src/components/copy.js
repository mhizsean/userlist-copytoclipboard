import React, { Component } from 'react';
import copy from "copy-to-clipboard";

class Copy extends Component {

    constructor() {
        super();
        this.state = {
          textToCopy: "Copy to Clipboard Demo!",
          btnText: "Copy to Clipboard"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
      }
     
      handleInputChange(e) {
        this.setState({
          textToCopy: e.target.value,
          btnText: "Copy to Clipboard"
        });
      }
     
      handleCopy() {
        copy(this.state.textToCopy);
        this.setState({ btnText: "Copied!" });
      }

    render() {
        const { textToCopy, btnText } = this.state;

        return (
            <div className="copy-body"> 
                <h4>Copy Text to Clipboard</h4>
                <textarea className="copy-text" value={textToCopy} onChange={this.handleInputChange} />
                <br />
                <br />
                <button className="copy-btn" onClick={this.handleCopy} disabled={btnText === "Copied!"}>
                {btnText}
                </button>
            </div>
        );
    }
}

export default Copy;
