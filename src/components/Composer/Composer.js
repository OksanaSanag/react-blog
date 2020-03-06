// Core
import React, { Component } from 'react';

//Instruments
import composerDecor from './composer.view.js';

export default class Composer extends Component {
    render () {
        const {
            currentUserFirstName,
            avatar
        } = this.props;
        return (
            <composerDecor.block>
                <composerDecor.imeg img src = { avatar } />
                <form>
                    <composerDecor.textBlock textarea placeholder = {`What's on your mind, ${currentUserFirstName}?`} />
                    <composerDecor.butt type='POST'>Post</composerDecor.butt>
                    <composerDecor.butt type='CANCEL'>Cancel</composerDecor.butt>
                </form>
            </composerDecor.block>
        )
    }
}