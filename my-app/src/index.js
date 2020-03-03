import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><img className="ui image item" src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></img></Menu.Item>
            <Menu.Item position="right"> Home </Menu.Item>
            <Dropdown item text="About Us" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Yee</Dropdown.Item>
                <Dropdown.Item>Haw</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> St. Patrick's Day </Menu.Item>
            <Dropdown item text="Menus" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Yee</Dropdown.Item>
                <Dropdown.Item>Haw</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> Bar </Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className="murphys-background">
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><img className="ui image item" src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></img></Menu.Item>
          </Container>
        </Menu>
    )
  }
}
class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));