import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import Jail from '../jail';
import JailCreate from '../jail/create';
import Network from '../network';
import NetworkCreate from '../network/create';
import './index.scss';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" className={this.props.location.pathname === '/app' ? 'ant-menu-item-selected' : ''}>
              <Link to="/app">
                <Icon type="line-chart" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="code-o" /><span>Jail</span></span>}>
              <Menu.Item key="2" className={this.props.location.pathname === '/app/jail' ? 'ant-menu-item-selected' : ''}>
                <Link to="/app/jail">
                  <span>list</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" className={this.props.location.pathname === '/app/jail/create' ? 'ant-menu-item-selected' : ''}>
                <Link to="/app/jail/create">
                  <span>create</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="global" /><span>Network</span></span>}>
              <Menu.Item key="4" className={this.props.location.pathname === '/app/network' ? 'ant-menu-item-selected' : ''}>
                <Link to="/app/network">
                  <span>list</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5" className={this.props.location.pathname === '/app/network/create' ? 'ant-menu-item-selected' : ''}>
                <Link to="/app/network/create">
                  <span>create</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6" className={this.props.location.pathname === '/app/snapshot' ? 'ant-menu-item-selected' : ''}>
              <Link to="/app/snapshot">
                <Icon type="switcher" />
                <span>Snapshot</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '63px', float: 'right' }}
            >
              <SubMenu title={<span><Icon type="user" />TuTu</span>}>
                <Menu.Item key="setting:1">Logout</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Route exact path="/app" component={Dashboard} />
          <Route exact path="/app/jail" component={Jail} />
          <Route exact path="/app/jail/create" component={JailCreate} />
          <Route exact path="/app/network" component={Network} />
          <Route exact path="/app/network/create" component={NetworkCreate} />
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
