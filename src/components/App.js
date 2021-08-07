import React, {Component, useState} from "react";
import '../styles/App.css';
// import RenderPara from "./RenderPara";

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			text: "",
			id=""
		}
	};
	setText(){
		this.setState({
			text:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
			id:"para"
		})
	}
    render() {
    	return(
    		<div id="main">
				  {/* Do not remove this main div!!   */}
				  <button id="click" onClick={()=>this.setText()}>RenderPara</button>
				  <p id={this.state.id}>{this.state.text}</p>
    		</div>
    	);
    }
}


export default App;
