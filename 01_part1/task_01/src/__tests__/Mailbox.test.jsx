// it('should add two numbers', () => {
//   expect(2 + 3).toEqual(5);
// });

import React from 'react';
import { shallow } from 'enzyme';
import Mailbox from '../Mailbox';

describe('mailbox', () => {
  it('should not render count if no unread messages', () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);
    expect(wrappedComponent.find('.mailbox__count').exists()).toEqual(false);
  });

  it('should render count of unread messages', () => {
    const unreadMessages = [1, 3, 4];
    const wrappedComponent = shallow(
      <Mailbox unreadMessages={unreadMessages} />
    );
    expect(wrappedComponent.find('.mailbox__count').text()).toEqual('3');
  });
});
