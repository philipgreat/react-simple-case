import React, { Component } from 'react';
export default class LayoutLibrary extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleX =  this.handleX.bind(this)
		this.handleY =  this.handleY.bind(this)
		this.handleZ =  this.handleZ.bind(this)
		this.handleDrag =  this.handleDrag.bind(this)
		this.handleOver =  this.handleOver.bind(this)
	}
	handleDrag(event) {
		 event.dataTransfer.setData("text", event.target.id);
	}
	handleOver(event) {
		 event.preventDefault();
	}
	render() {
		return (<div className="col-md-3">
				<div className="panel panel-primary">
					<div className="panel-heading  text-center"><h3 className="panel-title">布局</h3></div>
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
