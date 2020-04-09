import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Chart/Chart';
import { Row, Col, Container, Navbar, Button } from 'react-bootstrap';
import styles from './App.module.css';
import { fetchData } from './api/index';
import moment from 'moment';
import { FaHeart } from 'react-icons/fa';
import corona from './Images/virus.png';




class App extends Component {
  state = {
    data: {},
    country: '',
    lastUpdate: ''
  }

  //Fetch Data
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

  }

  //handle change of country
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>

        <Container>
          <Navbar className={styles.navbar}>

            <Navbar.Brand href="#home" >
              <h1>COVID–19 Tracker </h1>
            </Navbar.Brand>
          </Navbar>
          <Row>
            <Col>
              <hr />
              <h5><small className="text-muted">Last updated {moment(data && data.lastUpdate).calendar().toLocaleLowerCase()}
              </small></h5>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              {country ? (<h5>Daily COVID–19 cases , recoveries and deaths in {country}</h5>) : <h5>Daily COVID–19 cases and deaths Globally</h5>}

              <Chart data={data || {}} country={country} />


            </Col>

            <Col sm={4}>
              <Cards data={data || {}}></Cards>

            </Col>
          </Row>
          <Row>
            <Col className={styles.footer} >
              <hr />
              With <FaHeart></FaHeart> from{' '}
              <a
                href="https://github.com/allanzico/covid-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Allan
      </a>{' '}

            </Col>


          </Row>

        </Container>


      </div>
    );
  }
}

export default App;
