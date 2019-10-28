import React from 'react';
import './style.scss';

class Button extends React.Component {
  componentDidMount() {}
  render() {
    const { href, title, onClick } = this.props;
    return (
      <div className="button">
        <a href={href} onClick={onClick}>
          {title}
        </a>
        <div className="mask"></div>
      </div>
    );
  }
}

export default Button;
