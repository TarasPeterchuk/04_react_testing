import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';
import { getUserData } from '../usersGateway';

jest.mock('../usersGateway', () => {
  return { getUserData: jest.fn(() => Promise.resolve()) };
});

describe('User', () => {
  it('should display null', () => {
    const wrappedComponent = shallow(<User />);
    expect(wrappedComponent.find('.user').exists()).toEqual(false);
  });

  it('should display user', () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        name: 'Bob',
        location: 'Kyiv',
        avatar_url: 'http://example.com',
      },
    });
    // expect(wrappedComponent.find('.user').exists()).toEqual(true);
    expect(wrappedComponent.find('.user')).toMatchSnapshot();
  });

  it('should call getUserData', () => {
    shallow(<User />);
    expect(getUserData).toBeCalled();
  });
});
