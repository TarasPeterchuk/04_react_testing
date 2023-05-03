import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Message', () => {
  it('should render text from props', () => {
    const text = 'Hello World';
    const wrappedComponent = shallow(<Message text={text} />);
    expect(wrappedComponent.find('.message').text()).toEqual(text);
  });

  it('should nor render text if no props', () => {
    const unreadMessages = [1, 3, 4];
    const wrappedComponent = shallow(
      <Message unreadMessages={unreadMessages} />
    );
    expect(wrappedComponent.find('.message').exists()).toEqual(false);
  });
});
