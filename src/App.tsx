import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};

class App extends Component<{}> {
  chartComponent: any;
  constructor(props: {}) {
    super(props);
    this.chartComponent = React.createRef();
  }

  componentDidMount() {
    this.chartComponent.current.chart.reflow();
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9"></Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <HighchartsReact
              highcharts={Highcharts}
              ref={this.chartComponent}
              options={options}
            />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
