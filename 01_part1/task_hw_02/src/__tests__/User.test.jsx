import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe('User', () => {
  it('should render name text from props', () => {
    const name = 'John';
    const wrappedComponent = shallow(<User name={name} />);
    expect(wrappedComponent.find('.user__name').text()).toEqual(name);
  });

  it('should render name text from props', () => {
    const age = 18;
    const wrappedComponent = shallow(<User age={age} />);
    expect(wrappedComponent.find('.user__age').text()).toEqual('18');
  });
});
