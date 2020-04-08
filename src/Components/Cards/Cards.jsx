import React from 'react';
import styles from './Cards.module.css';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import moment from 'moment';
import cx from 'classnames';
import { FaAmbulance, FaWalking, FaSkullCrossbones } from "react-icons/fa";



const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>

            <h5><small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small></h5>
            <hr></hr>
            {/* Infected Card */}

            <Card xs={12} className={cx(styles.card, styles.infected)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"> <FaAmbulance color="#00c3ff" /> Infected</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={confirmed.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    {/* <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle> */}
                </Card.Body>
            </Card>

            {/* recovered card */}

            <Card xs={12} className={cx(styles.card, styles.recovered)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"><FaWalking color="#07800d" /> Recovered</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={recovered.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    {/* <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle> */}
                </Card.Body>

            </Card>

            {/* deaths card */}

            <Card xs={12} className={cx(styles.card, styles.deaths)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"><FaSkullCrossbones color="#ff0000" /> Deaths</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={deaths.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    {/* <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle> */}
                </Card.Body>


            </Card>


        </div>
    )
}

export default Cards;