import React, { Component } from 'react'

export default class SetHeader extends Component {
    render() {
        return (
            <div>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Working Hours</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Night Shift</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Break Times</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Planning</a>
                </li>
            </div>
        )
    }
}
