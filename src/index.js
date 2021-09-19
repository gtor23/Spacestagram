import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {Images} from './components'

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
        
        {isLoading ? null : <h1 className = 'main-title'>Spacestagram</h1>}
        
        <Images setIsLoading = {setIsLoading} />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);