import classnames from "classnames";
import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { TabTitle } from "./components/tabTitle";
import { Tab } from "./components/tab";
import "./ui/ResponsiveTabs.css";

class ResponsiveTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: [0],
            windowWidth: window.innerWidth
        };
        this.select = this.select.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    select(event, newTab) {
        // logic to determine to replace or add to ActiveTabs
        this.setState({ active: [newTab] });
        //this.setState({ active: [...this.state.active, newTab] });
        //remove "tab-active" classes from all components that have it (minus the corresponding tab content)
        //var currentActive = ReactDOM.findDOMNode().getElementsByClassName('tab-active')
        //var activeTabs = classnames("tab-active");
        //activeTabs.map(this.setState({ active: this.state.inactive }));
        //also find corresponding tab content to set active
        //this.setState({
        //  active: this.state.active
        //});
        //var tabChildContent = this.props.children.props.children;
        //tabChildContent({
        //active: this.state.active
        //});
    }

    //resize/responsive handling
    handleResize(e) {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnMount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        const components = this.props.tabs;
        //const stateStyle = this.state.active ? classes.active : classes.inactive;
        // eslint-disable-next-line arrow-body-style
        const mobileView = this.state.windowWidth < this.props.tabsWindowSize;
        const tabTitleItem = components.map((title, index) => {
            return (
                <TabTitle
                    key={index}
                    isActive={this.state.active.indexOf(index) > -1}
                    tabTitle={title.tabTitle}
                    handleToggle={this.select}
                    tabId={index}
                    isMobile={mobileView}
                    content={components[index]}
                />
            );
            // var ste = index === 0 ? "tab-active" : "";
            // var i = index;
            // return (
            //     <li className={ste + " " + stateStyle} onClick={this.select} key={title}>
            //         <TabTitle></TabTitle>
            //     </li>
            // );
        });

        const tabContentItem = components.map(
            (content, index) => <Tab key={index} isActive={this.state.active.indexOf(index) > -1} content={content} />
            // var contentState = index === 0 ? "tab-active" : "";
            // return (
            //     <div className={contentState + " tab-pane mx-tabcontainer-pane " + stateStyle} key={content}>
            //         <Tab></Tab>
            //     </div>
            // );
        );

        if (mobileView) {
            return (
                <div className="responsive-tabs mobile">
                    <ul className="tabcontainer-tabs">{tabTitleItem}</ul>
                    <div className="mx-tabcontainer-content">{tabContentItem}</div>
                </div>
            );
        } else {
            return (
                <div className="responsive-tabs">
                    <ul className="tabcontainer-tabs">{tabTitleItem}</ul>
                    <div className="mx-tabcontainer-content">{tabContentItem}</div>
                </div>
            );
        }
    }
}

export default hot(ResponsiveTabs);
