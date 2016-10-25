import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProgressBar from './';

describe('<ProgressBar />', function() {
  const wrapper = shallow(<ProgressBar />);

  it('has a <div>', function() {
    expect(wrapper.html()).to.contain('<div');
    expect(wrapper.html()).to.contain('</div>');
  });

  it('has a ProgressBar class', function() {
    expect(wrapper.hasClass('ProgressBar')).to.equal(true);
  });
});
