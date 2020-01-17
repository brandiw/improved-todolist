import React from 'react'
import { Badge, Col, ListGroupItem, Row } from 'reactstrap'

const ListItem = props => {
    return (
        <ListGroupItem>
            <Row>
                <Col sm="9">
                    {props.index + 1}. {props.item.finished ? <del>{props.item.text}</del> : props.item.text}
                </Col>
                <Col sm="3">
                    <Badge color="success" className="pointer" onClick={ () => props.done(props.index) }>
                        <span role="img" aria-label="icon">✔</span>
                    </Badge>{' '}
                    <Badge color="danger" className="pointer" onClick={ () => props.del(props.index) }>
                        <span role="img" aria-label="icon">🤷‍♀</span>
                    </Badge>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default ListItem