import React from 'react';
import { shallow } from 'enzyme';
import Company from '../Company';

const baseProps = {
  logoUrl: 'https://example.com/api/stuff.png',
  description: 'Something'
}

describe('Company', function() {
  it('renders correctly', function() {
    expect(shallow(<Company {...baseProps} />))
      .toMatchSnapshot();
  });
});
