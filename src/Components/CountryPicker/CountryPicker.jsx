import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './CountryPicker.module.css';
import cx from 'classnames';
import Select from 'react-select';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss'

const CountryPicker = () => {

    return (
        <div>
            <Form>
                <Form.Label>
                    <Form.Control className={cx(styles.selectpicker, styles.countrypicker, styles.formControl)} as="select" data-flag="true" custom>
                        <option value="global">Global</option>
                    </Form.Control>
                </Form.Label>
            </Form>

        </div>
    )
}

export default CountryPicker;