import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

class MenuLeft extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="ul-style">
        <li>
          <a className="list-item" href="">
            <i className="icon-reorder"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-th-large"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-bar-chart"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-tasks"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-bell"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-archive"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-comment"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-sitemap"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-thumbs-up"></i>
          </a>
        </li>
        <li>
          <a className="list-item" href="">
            <i className="icon-tumblr"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuLeft;
