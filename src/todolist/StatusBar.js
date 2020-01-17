import React from 'react'

const StatusBar = props => {
    let undoneItems = props.items.filter(item => !item.finished)
    let message = `You have ${undoneItems.length} things left to do (of ${props.items.length} total tasks)`
    
    return (
        <div className="status">
            {message}
        </div>
    )
}

export default StatusBar