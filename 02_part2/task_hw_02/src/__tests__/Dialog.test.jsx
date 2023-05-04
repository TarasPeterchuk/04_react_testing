import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';

const mockClose = jest.fn();

describe('Dialog', () => {
  it('should not display dialog', () => {
    const wrappedComponent = shallow(<Dialog isOpen={false} />);
    expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
  });

  it('should display dialog', () => {
    const wrappedComponent = shallow(<Dialog isOpen />);
    expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
  });

  it('should close dialog after click close button', () => {
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockClose} />);
    wrappedComponent.find('.dialog__close-btn').simulate('click');
    expect(mockClose).toBeCalled();
  });

  it('should display title', () => {
    const testTitle = 'Profile Facebook';
    const wrappedComponent = shallow(<Dialog isOpen title={testTitle} />);
    expect(wrappedComponent.find('.dialog__title').text()).toEqual(testTitle);
  });

  it('should display Dialog section', () => {
    const wrappedComponent = shallow(<Dialog isOpen />);
    expect(wrappedComponent.find('.dialog')).toMatchSnapshot();
  });
});
