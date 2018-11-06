import React from 'react'

class App extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store;
        const num = store.getState();
        const addGUN = this.props.addGUN;
        const reGUN = this.props.reGUN;
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>现在有 {num}</h1>
                <button onClick={()=>store.dispatch(addGUN())}>申请</button>
                <button onClick={()=>store.dispatch(reGUN())}>减少</button>
                <button onClick={()=>store.dispatch(addGunAsync())}>过2秒</button>
            </div>
        )
    }

}

export default App