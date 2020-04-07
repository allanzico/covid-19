import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Chart/Chart';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './App.module.css';
import { fetchData } from './api/index';



class App extends Component {
  state = {
    data: {},
  }

  //Fetch Data
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col sm={8}>
              <CountryPicker />
              <Chart />
            </Col>

            <Col sm={4}>
              <Cards data={data}></Cards>
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default App;
