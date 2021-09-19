import React from 'react'
import ReactDOM from 'react-dom'

import {Images} from './components'

const App = () => {

    return (
        <>  
        <Images  />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);