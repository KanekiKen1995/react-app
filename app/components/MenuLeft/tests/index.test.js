import React from 'react';
import { shallow } from 'enzyme';

import MenuLeft from '../index';

describe('<MenuLeft />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<MenuLeft />);
    expect(renderedComponent.length).toEqual(1);
  });
});
