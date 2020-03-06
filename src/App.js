// Core
import React from 'react';

// Components
import Feed from './components/Feed/Feed';

// Instruments
import avatar from './assets/imges/avatar.png';

const options = {
    avatar,
    currentUserFirstName: 'Oksy',
    currentUserLastName: 'Docsy',
};

const App = (props) => {
    return (
        <Feed { ...options } />
)};

export default App;