import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import App from '../App';

const companies = [
  {
    id: "GoldenCasket",
    displayName: "Golden Casket",
    description: "QLD Residents",
    logoUrl: "http://tim.media.tatts.com/TattsServices/Lotto/Companies/GoldenCasket_v1.png"
  },
  {
    id: "NSWLotteries",
    displayName: "NSW Lotteries",
    description: "NSW Residents",
    logoUrl: "http://tim.media.tatts.com/TattsServices/Lotto/Companies/NSWLotteries_v1.png"
  },
];

const baseProps = {
  _fetchCompanies: () => Promise.resolve(companies)
}

describe('App', function() {
  it('renders', function() {
    const component = shallow(<App {...baseProps} />);
    expect(component).toMatchSnapshot();
  });

  it('fetches companies', function() {
    const fetchCompanies = jest.fn(() => Promise.resolve(companies));
    const component = shallow(
      <App _fetchCompanies={fetchCompanies} />
    );
    expect(fetchCompanies).toHaveBeenCalled();
  });
});
