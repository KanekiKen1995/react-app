/*
 * PageOne
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../../components/Button';

export default class PageOne extends React.PureComponent {
  componentDidMount() {}

  submit = () => {
    this.props.showName('lamvu');
  };
  submit2 = () => {
    this.props.showName2('lamvu2');
  };

  render() {
    const { pageOneReducer } = this.props;
    return (
      <div>
        <p className="colorWhite"> Hello {pageOneReducer.username}</p>
        <div className='dis-flex'>
          <Button title="lam vu" onClick={this.submit}></Button>
          <Button title="lam vu2" onClick={this.submit2}></Button>
        </div>
      </div>
    );
  }
}

PageOne.propTypes = {};
