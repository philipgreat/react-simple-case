import React, { Component } from 'react';
import LayoutLibrary from './LayoutLibrary.React';
import ScreenGroup from './ScreenGroup.React';
import DeviceLibrary from './DeviceLibrary.React';

export default class ControlUI extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleX =  this.handleX.bind(this)
		this.handleY =  this.handleY.bind(this)
		this.handleZ =  this.handleZ.bind(this)
	}
	render() {
		return (<div className="container">
		 <div className="row">
		<LayoutLibrary/><ScreenGroup/><DeviceLibrary/></div>
	</div>);
	}
	handleX() {

	}
	handleY() {

	}
	handleZ() {

	}
}
