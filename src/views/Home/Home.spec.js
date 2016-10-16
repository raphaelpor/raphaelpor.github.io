import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './';

describe('<Home />', function() {
  const wrapper = shallow(<Home />);

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div');
    expect(wrapper.html()).to.contain('</div>');
  });

  it('has a Home class', function() {
    expect(wrapper.hasClass('Home')).to.equal(true);
  });
});
