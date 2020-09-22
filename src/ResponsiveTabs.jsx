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
            //replace with Resize bool based on minimum size, so it's not triggered every resize
        };
        this.select = this.select.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.generateTabTitles = this.generateTabTitles.bind(this);
    }
    select(event, newTab) {
        this.setState({ active: [newTab] });
    }

    //resize/responsive handling
    handleResize(e) {
        //determine if windowWidth state needs to be updated and therefore if Tabs need to be re-rendered.
        //if the new window size crosses the minimum desktop screen size threshold in either direction, update the state to trigger re-render.
        const setResize =
            (window.innerWidth < this.props.tabsWindowSize && this.state.windowWidth > this.props.tabsWindowSize) ||
            (window.innerWidth > this.props.tabsWindowSize && this.state.windowWidth < this.props.tabsWindowSize);
        if (setResize) {
            this.setState({ windowWidth: window.innerWidth });
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnMount() {
        window.addEventListener("resize", this.handleResize);
    }

    generateTabTitles(components, mobileView) {
        const tabTitleItems = components.map((title, index) => {
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
        });
        return tabTitleItems;
    }

    render() {
        const components = this.props.tabs;
        // eslint-disable-next-line arrow-body-style
        const mobileView = this.state.windowWidth < this.props.tabsWindowSize;
        //create components
        const tabTitleItem = this.generateTabTitles(components, mobileView);
        const tabContentItem = components.map((content, index) => (
            <Tab key={index} isActive={this.state.active.indexOf(index) > -1} content={content} />
        ));

        if (mobileView) {
            return (
                <div className="responsive-tabs mobile">
                    <ul className="tabcontainer-tabs">{tabTitleItem}</ul>
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
