import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllStack from './src/navigation/AllStack/AllStack'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <AllStack/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})