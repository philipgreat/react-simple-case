import React, { Component } from 'react';
export default class DeviceLibrary extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleDrag =  this.handleDrag.bind(this)
		this.handleOver =  this.handleOver.bind(this)
		this.dragElements =  this.dragElements.bind(this)
		
		this.handleZ =  this.handleZ.bind(this)
	}
	
	handleDrag(event) {
		 event.dataTransfer.setData("text", event.target.id);
	}
	handleOver(event) {
		 event.preventDefault();
	}
	dragElements(){
		
		var elements=[
				{"name":"light","value":"images/light.png"},
				{"name":"aircondition","value":"images/air-condition.jpg"},
				{"name":"pm25","value":"images/pm-25.jpg"},
				{"name":"curtain","value":"images/curtain.jpg"},
				{"name":"heating","value":"images/heating.jpg"},
				
			
		];
		return elements.map(function(line) {
            return (<img id={line.name} key={line.name}  src={line.value} draggable="true"  className="control-template"/>
				   );
        });
		
	}
	render() {
		return (<div className="col-md-3">
				<div className="panel panel-primary">
				  <div className="panel-heading  text-center">
					<h3 className="panel-title">
					设备
					</h3>
				  </div>
				  
				  <div className="panel-body" onDragStart={this.handleDrag} onDragOver={this.handleOver}>
				    {this.dragElements()}
				  </div>
				</div>
          
        </div>);
	}

	handleY() {

	}
	handleZ() {

	}
}
