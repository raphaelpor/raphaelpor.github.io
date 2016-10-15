import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './';

describe('<Home />', function() {
  const wrapper = shallow(<Home />);

  it('has a <h1>', function() {
    expect(wrapper.html()).to.contain('<h1');
    expect(wrapper.html()).to.contain('</h1>');
  });

  it('shows "Hello!"', function() {
    expect(wrapper.text()).to.contain("Hello!");
  });

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div>');
    expect(wrapper.html()).to.contain('</div>');
  });
});
