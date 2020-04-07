import React from 'react';
import styles from './Cards.module.css';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import moment from 'moment';
import cx from 'classnames';



const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={StyleSheet.container}>

            {/* Infected Card */}

            <Card style={{ width: '18rem' }} xs={12} className={cx(styles.card, styles.infected)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Infected</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={confirmed.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle>
                </Card.Body>
            </Card>

            {/* recovered card */}

            <Card style={{ width: '18rem' }} xs={12} className={cx(styles.card, styles.recovered)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Recovered</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={recovered.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle>
                </Card.Body>

            </Card>

            {/* deaths card */}

            <Card style={{ width: '18rem' }} xs={12} className={cx(styles.card, styles.deaths)}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Deaths</Card.Subtitle>
                    <Card.Title><CountUp
                        start={0}
                        end={deaths.value}
                        duration={1.5}
                        separator=","

                    /></Card.Title>
                    <hr />
                    <Card.Subtitle href="#">
                        <small className="text-muted">Last updated {moment(lastUpdate).calendar().toLocaleLowerCase()}</small>
                    </Card.Subtitle>
                </Card.Body>


            </Card>


        </div>
    )
}

export default Cards;