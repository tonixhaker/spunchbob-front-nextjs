import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import {SiteContent} from './ContentStyle';

const { Content } = Layout;

class AppContent extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  render() {
      return (
          <SiteContent>
              <Content className='site-content'>
                  { this.props.children }
              </Content>
          </SiteContent>
      );
  }
}

export default AppContent;
