import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Layout,
  Breadcrumb,
  Menu,
  Icon,
  Carousel,
  Button,
  DatePicker,
} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
// const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="http://www.alipay.com/"
//       >
//         1st menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="http://www.taobao.com/"
//       >
//         2nd menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
//         3rd menu item
//       </a>
//     </Menu.Item>
//   </Menu>
// );

const Home = () => {
  // const [collapsed, SetCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   SetCollapsed(!collapsed);
  // };

  // function onChange(date, dateString) {
  //   console.log(date, dateString);
  // }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <Layout>
      <Header className="header">
        <div className="holder-logo">
          <img
            className="logo"
            src={require('../images/fullstack.svg')}
            alt="logo"
          />
        </div>
        <Menu
          theme="light"
          className="header"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              height: '100%',
              minHeight: 400,
            }}
          >
            <Carousel afterChange={onChange} style={{height: '100%'}}>
              <div className="container-slide">
                <h3>Slider 1</h3>
              </div>
              <div className="container-slide">
                <h3>Slider 2</h3>
              </div>
              <div className="container-slide">
                <h3>Slider 3</h3>
              </div>
              <div className="container-slide">
                <h3>Slider 4</h3>
              </div>
            </Carousel>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;

// <div className="">
/* <div>/home</div>
      <h1>This is the Home page</h1>
      <Link to="/about">Go to About</Link>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <Icon type="down" />
        </a>
      </Dropdown> */

/* <div style={{width: 256}}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{marginBottom: 16}}
        >
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div> */
/* <div>
        <RangePicker onChange={onChange} />
      </div> */
// </div>
