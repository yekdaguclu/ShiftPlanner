import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'



class NightShiftTab extends Component {
    render() {
        return (
            <div >
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Night Shift Time Interval:</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Minimum Rest Hour After the Night Shift:</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Maximum Overtime That Can Be Written In the Night Shift</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Maximum Daily Night Shift Working Hour Limit</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>If the shift is mostly at night, then the entire shift counts as night shift</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
            </div>
        )
    }
}

export default NightShiftTab;