import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

const Controls = props => {
    let [newItemText, setNewItemText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('HELLO!', newItemText)
        props.add(newItemText)
        setNewItemText('')
    }

    return (
        <div>
            <h2>Add Something</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm="8">
                        <FormGroup>
                            <Input 
                                type="text" 
                                value={newItemText}
                                onChange={ e => setNewItemText(e.target.value) }
                                placeholder="What do you need to do?" 
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <Button color="info" type="submit">
                            <span role="img" aria-label="icon">➕</span>
                            Add
                        </Button>
                        <Button color="danger" onClick={props.clear}>
                            <span role="img" aria-label="icon">🗑</span>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
            
        </div>
    )
}

export default Controls