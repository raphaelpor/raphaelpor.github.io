import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Intro from './';
import data from '../../../../services/data';

describe('<Intro />', function() {
  const wrapper = shallow(<Intro />);

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div');
    expect(wrapper.html()).to.contain('</div>');
  });

  it('has a <h1>', function() {
    expect(wrapper.html()).to.contain('<h1');
    expect(wrapper.html()).to.contain('</h1>');
  });

  it('has a <small>', function() {
    expect(wrapper.html()).to.contain('<small');
    expect(wrapper.html()).to.contain('</small>');
  });

  it('shows the name', function() {
    expect(wrapper.text()).to.contain(data.name);
  });

  it('has a Intro class', function() {
    expect(wrapper.hasClass('Intro')).to.equal(true);
  });
});
