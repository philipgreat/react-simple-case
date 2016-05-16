import React, { Component } from 'react';
export default class ScreenGroup extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleX =  this.handleX.bind(this)
		this.handleY =  this.handleY.bind(this)
		this.handleZ =  this.handleZ.bind(this)
		this.handleDragOver =  this.handleDragOver.bind(this)
		this.handleDrop =  this.handleDrop.bind(this)
		
		
	}
	
	handleDragOver(event) {
		 event.preventDefault();
	}
	handleDrop(event) {
		event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log(data);
    var element=document.getElementById(data).cloneNode();
		element.style.width="100px";
		element.style.height="100px";
		element.style.display="block";
		element.style.marginLeft="auto";
		element.style.marginRight="auto";
		if(element.attributes.getNamedItem("id")){
			element.attributes.removeNamedItem("id");
		}
	  if(element.attributes.getNamedItem("data-reactid")){
			element.attributes.removeNamedItem("data-reactid");
		}
	
	
    event.target.appendChild(element);
	}
	render() {
		return (<div className="col-md-6">
 
 
 				<div className="panel panel-primary">
				  <div className="panel-heading  text-center"><h3 className="panel-title">屏幕</h3> </div>
				  
				  <div onDrop={this.handleDrop} onDragOver={this.handleDragOver} className="panel-body screen-container">
					
				    <div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
				    <div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
					<hr/>
					<div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
				    <div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
					<hr/>
					
					<div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
				    <div className="row">
						<div className="col-md-4 screen-half"/><div className="col-md-4 screen-half"/> <div className="col-md-4 screen-half"/>
					</div>
			
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
