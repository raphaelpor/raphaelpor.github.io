import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CoreSkills from './';

describe('<CoreSkills />', function() {
  const wrapper = shallow(<CoreSkills />);

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div');
    expect(wrapper.html()).to.contain('</div>');
  });

  it('has a <h3>', function() {
    expect(wrapper.html()).to.contain('<h3');
    expect(wrapper.html()).to.contain('</h3>');
  });

  it('has a CoreSkills class', function() {
    expect(wrapper.hasClass('CoreSkills')).to.equal(true);
  });
});
