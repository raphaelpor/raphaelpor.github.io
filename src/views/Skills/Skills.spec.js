import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Skills from './';

describe('<Skills />', function() {
  const wrapper = shallow(<Skills />);

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div');
    expect(wrapper.html()).to.contain('</div>');
  });

  it('has a Skills class', function() {
    expect(wrapper.hasClass('Skills')).to.equal(true);
  });
});
