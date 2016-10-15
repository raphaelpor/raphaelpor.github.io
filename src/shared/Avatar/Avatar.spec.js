import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from './';

describe('<Avatar />', function() {
  const wrapper = shallow(<Avatar />);

  it('is a img', function() {
    expect(wrapper.html()).to.contain('<img');
    expect(wrapper.html()).to.contain('/>');
  });

  it('has a alt', function() {
    expect(wrapper.html()).to.contain('alt=');
  });

  it('has a title', function() {
    expect(wrapper.html()).to.contain('title=');
  });
});
