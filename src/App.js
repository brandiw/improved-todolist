// Import needed modules
import React, { useState } from 'react'
import { Container } from 'reactstrap'

// Import styles
import './App.css'

// Import custom components
import Controls from './todolist/Controls'
import Header from './Header'
import List from './todolist/List'
import StatusBar from './todolist/StatusBar'

function App() {
  let [items, setItems] = useState([
    { text: 'Learning React', finished: false },
    { text: 'Writing the next great American novel', finished: true },
    { text: 'Active and mindful purposeful procrastination', finished: false },
    { text: 'Failing to compile', finished: false }
  ])

  const clear = () => {
    setItems([])
  }

  const add = textToAdd => {
    setItems([...items, { text: textToAdd, finished: false }])
  }

  const done = index => {
    let tempItems = [...items]
    tempItems[index].finished = !tempItems[index].finished
    setItems(tempItems)
  }

  const del = index => {
    let tempItems = [...items]
    tempItems.splice(index, 1)
    setItems(tempItems)
  }

  return (
    <div className="App">
      <Header />
      <StatusBar items={items} />
      <main>
        <Container>
          <Controls items={items} clear={clear} add={add} />
          <List items={items} del={del} done={done} />
        </Container>
      </main>
    </div>
  )
}

export default App
