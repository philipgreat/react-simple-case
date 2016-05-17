import React, { Component } from 'react';
export default class LayoutLibrary extends Component {
	constructor(props) {
		super(props);
		
		this.state=props;
		//console.log("------"+this.state.title)
		this.handleX =  this.handleX.bind(this)
		//this.state.title="Dragging....";
		this.handleY =  this.handleY.bind(this)
		//this.handleZ =  this.handleZ.bind(this)
		this.handleDrag =  this.handleDrag.bind(this)
		this.handleOver =  this.handleOver.bind(this)
		this.handleChange =  this.handleChange.bind(this)
		
		//this.setState(props);
	}
	handleDrag(event) {
		 event.dataTransfer.setData("text", event.target.id);
	}
	handleOver(event) {
		event.preventDefault();

	}
	handleChange(event) {
    	//this.state={xtitle: event.target.value};
		//this.render();
		//this.setState({title:"士大夫士大夫"});
			//alert(event.target.value);
		this.setState({title: event.target.value});
		console.log(this.state.title);
			
			
  	}
	render() {
		return (<div className="col-md-3">
				<div className="panel panel-primary"><input type="text" value={this.state.title} onChange={this.handleChange}/>
					<div className="panel-heading  text-center"><h3 className="panel-title">{this.state.title}</h3></div>
					<div className="panel-body">
					
						<img id="drag1" src="images/six-cells.png" draggable="true" onDragStart={this.handleDrag} className="layout-template"/>
					</div>
				</div>
			</div>);
	}
	handleX() {

	}
	handleY() {

	}
	handleZ() {

	}
}
