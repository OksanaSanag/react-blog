// Core
import React, { Component } from 'react';

// Components
import { Consumer } from '../HOC/withProfile';

//Instruments
import composerDecor from './composer.view.js';

export default class Composer extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <composerDecor.block>
                        <composerDecor.imeg img src = { context.avatar } />
                        <form>
                            <composerDecor.textBlock textarea placeholder = {`What's on your mind, ${context.currentUserFirstName}?`} />
                            <composerDecor.butt type='POST'>Post</composerDecor.butt>
                            <composerDecor.butt type='CANCEL'>Cancel</composerDecor.butt>
                        </form>
                    </composerDecor.block>
                )}
            </Consumer>
            
        )
    }
}