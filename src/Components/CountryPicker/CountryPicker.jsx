import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './CountryPicker.module.css';
import cx from 'classnames';
import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss'
import { fetchCountries } from '../../api/index';



const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    }, [setFetchedCountries])

    return (
        <div>
            <Form>
                <Form.Label>
                    <Form.Control className={cx(styles.selectpicker, styles.countrypicker, styles.formControl)}
                        as="select" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}
                        custom
                    >
                        <option value="global">Global</option>
                        {fetchedCountries.map((country, key) => <option key={key} value={country}>{country}</option>)}

                    </Form.Control>
                </Form.Label>
            </Form>

        </div>
    )
}

export default CountryPicker;