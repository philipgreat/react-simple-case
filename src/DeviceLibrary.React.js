import React, { Component } from 'react';
export default class DeviceLibrary extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleDrag =  this.handleDrag.bind(this)
		this.handleOver =  this.handleOver.bind(this)
		this.handleZ =  this.handleZ.bind(this)
	}
	
	/*
	
	function allowDrop(ev) {
    ev.preventDefault();
    
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
	
	
	
	*/
	handleDrag(event) {
		 event.dataTransfer.setData("text", event.target.id);
	}
	handleOver(event) {
		 event.preventDefault();
	}
	
	render() {
		return (<div className="col-md-3">
				<div className="panel panel-primary">
				  <div className="panel-heading  text-center">
					<h3 className="panel-title">
				  
					设备
					</h3>
				  </div>
				  
				  <div className="panel-body">
		
				   <img id="drag2" src="images/light.png" draggable="true" onDragStart={this.handleDrag}  onDragOver={this.handleOver} className="control-template"/>
				   <img id="drag3" src="images/air-condition.jpg" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleOver} className="control-template"/>
				   <img id="drag4" src="images/pm-25.jpg" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleOver} className="control-template"/>
				   <img id="drag5" src="images/curtain.jpg" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleOver} className="control-template"/>
				   <img id="drag6" src="images/heating.jpg" draggable="true" onDragStart={this.handleDrag} onDragOver={this.handleOver} className="control-template"/>
				   
				   
				   
				  </div>
				</div>
          
        </div>);
	}

	handleY() {

	}
	handleZ() {

	}
}
