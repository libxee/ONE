import React from "react";
import { TabBar } from "antd-mobile";
import { connect } from "dva";
import styles from "./IndexPage.css";
import One from "../components/One";
import Example from "../components/Example";
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: true
    };
  }
  // 条件渲染one/all
  renderContent(page) {
    return (
      <div styleaname={styles.main}>
        {/* <div style={{ paddingTop: 60 }}>
          this is “{pageText}” tab， show “{pageText}” information
        </div> */}
        <One />
        {/* <Products></Products>
         */}
        <Example />
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="ONE"
            key="ONE"
            icon={
              <i
                className="iconfont icon-message"
                style={{ fontSize: "22px" }}
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-message-copy "
                style={{ fontSize: "22px" }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
            data-seed="logId"
          >
            {this.renderContent("Life")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i
                className="iconfont icon-dashboard"
                style={{ fontSize: "22px" }}
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-dashboard-copy"
                style={{ fontSize: "22px" }}
              />
            }
            title="ALL"
            key="ALL"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent("ALL")}
          </TabBar.Item>
          {/* <TabBar.Item
            icon={
              <i
                className="iconfont icon-setting-fill"
                style={{ fontSize: "22px" }}
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-setting-fill-copy"
                style={{ fontSize: "22px" }}
              />
            }
            title="ME"
            key="ME"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            {this.renderContent("My")}
          </TabBar.Item> */}
        </TabBar>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
