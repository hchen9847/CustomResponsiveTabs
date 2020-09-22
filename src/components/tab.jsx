/* eslint-disable linebreak-style */
import { Component, createElement } from "react";

export class Tab extends Component {
    render() {
        return this.props.isActive ? (
            <div className="tab-pane pane-active">{this.props.content.tabContent}</div>
        ) : (
            <div className="tab-pane">{this.props.content.tabContent}</div>
        );
    }
}
