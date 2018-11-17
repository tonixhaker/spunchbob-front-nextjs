import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';

const { Content } = Layout;

class AppContent extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  render() {
      return (
          <Content className='site-content'>
              { this.props.children }
          </Content>
      );
  }
}

export default AppContent;
