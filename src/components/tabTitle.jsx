/* eslint-disable linebreak-style */
import { Component, createElement } from "react";

export class TabTitle extends Component {
    render() {
        // eslint-disable-next-line prettier/prettier
        if (this.props.isMobile) {
            return (
                <li className="tab-active">
                    <a>{this.props.tabTitle}</a>
                    <div className="tab-pane pane-active">{this.props.content.tabContent}</div>
                </li>
            );
        } else {
            return this.props.isActive ? (
                <li className="tab-active">
                    <a>{this.props.tabTitle}</a>
                </li>
            ) : (
                <li>
                    <a onClick={event => this.props.handleToggle(event, this.props.tabId)}>{this.props.tabTitle}</a>
                </li>
            );
        }
    }
}
