import React from 'react'
import { ListGroup } from 'reactstrap'
import ListItem from './ListItem'

const List = props => {
    let displayItems = props.items.map((item, i) => {
        return <ListItem 
                    key={i} 
                    item={item} 
                    index={i} 
                    del={props.del}
                    done={props.done}
                />
    })

    return (
        <div>
            <h2>Current List</h2>
            <ListGroup>
                {displayItems}
            </ListGroup>
        </div>
    )
}

export default List