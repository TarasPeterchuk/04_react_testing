import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
  it('should display null counter value at start', () => {
    const wrappedComponent = shallow(<Counter />);
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  });

  it('should increase counter', () => {
    const wrappedComponent = shallow(<Counter />);
    const buttons = wrappedComponent.find('.counter__button');
    buttons.forEach((button) => {
      if (button.text().includes('+')) {
        button.simulate('click');
      }
    });
    expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
  });

  it('should decrease counter', () => {
    const wrappedComponent = shallow(<Counter />);
    const buttons = wrappedComponent.find('.counter__button');
    buttons.forEach((button) => {
      if (button.text().includes('-')) {
        button.simulate('click');
      }
    });
    expect(wrappedComponent.find('.counter__value').text()).toEqual('-1');
  });
  it('should reset counter', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find('.counter__value').simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  });
});
