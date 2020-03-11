// Core
import React, { Component } from 'react';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import StatusbarDecor from './statusbar.view.js';

export default class StatusBar extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <StatusbarDecor.block>
                        <StatusbarDecor.imeg img src = { context.avatar } />
                        <span>{` ${context.currentUserFirstName} ${context.currentUserLastName}`} </span>            
                    </StatusbarDecor.block>
                )}
            </Consumer>
        )               
    }
}