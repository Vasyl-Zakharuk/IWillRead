import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View>
      <Navbar title='I wiil read' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <ScrollView>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          }) }
        </ScrollView>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
   }
})
