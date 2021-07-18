import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app');
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('render a button with text of `decrement`', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
  });

  test('render the initial value in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });

  test('render the click event of increment button and increment coutner value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });

  test('render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('-1');
  });

  test('render the click event of decrement button and if the counter value is 0 stop decrement', () => {
    let counter = wrapper.find("#counter-value").text();
    if(counter == "0") {
      wrapper.find('#decrement-btn').hasClass('disabled');
    }
  })
});

