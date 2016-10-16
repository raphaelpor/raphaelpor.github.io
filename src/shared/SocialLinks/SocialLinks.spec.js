import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SocialLinks from './';
import data from '../../../../services/data';

describe('<SocialLinks />', function() {
  const wrapper = shallow(<SocialLinks />);

  it('has a <ul>', function() {
    expect(wrapper.html()).to.contain('<ul');
    expect(wrapper.html()).to.contain('</ul>');
  });

  it('has a <li>', function() {
    expect(wrapper.html()).to.contain('<li');
    expect(wrapper.html()).to.contain('</li>');
  });

  it('has a SocialLinks class', function() {
    expect(wrapper.hasClass('SocialLinks')).to.equal(true);
  });
});
