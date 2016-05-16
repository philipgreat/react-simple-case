import React, { Component } from 'react';
export default class Navigator extends Component {
	constructor(props) {
		super(props);
		this.state=props;
		this.handleX =  this.handleX.bind(this)
		this.handleY =  this.handleY.bind(this)
		this.handleZ =  this.handleZ.bind(this)
	}
	render() {
		return (<nav className="navbar navbar-static-top navbar-dark bg-inverse">
      
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <a href="#" className="nav-link">编辑 <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">预览</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">发布</a>
        </li>
      </ul>
    </nav>);
	}
	handleX() {

	}
	handleY() {

	}
	handleZ() {

	}
}
