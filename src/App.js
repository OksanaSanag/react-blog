// Core
import React from 'react';

// Components
import Feed from './components/Feed/Feed';
import { Provider } from './components/HOC/withProfile';

// Instruments
import avatar from './assets/imges/avatar.png';

const options = {
    avatar,
    currentUserFirstName: 'Oksy',
    currentUserLastName: 'Docsy',
};

const App = (props) => {
    return (
        <Provider value = { options } >
            <Feed />
        </Provider>
)};

export default App;