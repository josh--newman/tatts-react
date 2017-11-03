import React, { Component } from 'react';
import './App.css';
import { fetchCompanies } from './api';
import Company from './Company';

class App extends Component {
  state = { companies: [], loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    return fetchCompanies()
      .then(companies => this.setState({ companies, loading: false }))
      .catch(err => {
        this.setState({ loading: false });
        throw new Error(err);
      });
  }

  render() {
    console.log(this.state.companies)
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    else {
      return (
        <div className="container">
          <img src="https://thelott.com/etc/designs/the-lott/components/structure/page-template/clientlibs/images/header/logo--dsktp-thelott-australias.png"
          alt="The Lott logo" title="the Lott, Australia's Official Lotteries" />
          <p>Please select your lottery provider</p>
          <ul className="list">
            {
              this.state.companies.map(company => {
                return <Company key={company.id} {...company} />
              })
            }
          </ul>
        </div>
      )
    }
  }
}

export default App;
