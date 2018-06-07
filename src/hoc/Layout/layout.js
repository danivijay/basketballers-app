import React, { Component } from 'react';

import Header from '../../components/Header/Header'

import './layout.css'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default Layout;