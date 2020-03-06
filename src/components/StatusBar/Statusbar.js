// Core
import React, { Component } from 'react';

//Instruments
import StatusbarDecor from './statusbar.view.js';

export default class StatusBar extends Component {
    render () {
        const {
            currentUserFirstName,
            currentUserLastName,
            avatar
        } = this.props;
        return <StatusbarDecor.block>
            <StatusbarDecor.imeg img src = { avatar } />
            <span>{` ${currentUserFirstName} ${currentUserLastName}`} </span>            
        </StatusbarDecor.block>
    }
}