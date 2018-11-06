
import React from 'react'
import ReactDom from 'react-dom'

//applyMiddleware 专门处理中间件
import {createStore, applyMiddleware , compose} from 'redux'

import thunk from 'redux-thunk'


import App from './App'
import {counter,addGUN,reGUN,addGunAsync} from './index.redux'


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

function render(){
    ReactDom.render(<App store={store} addGUN={addGUN} reGUN={reGUN} addGunAsync={addGunAsync}/>,document.getElementById('root'))
}

render()

store.subscribe(render)
