// Core
import React, { Component } from 'react';

// Components
import Composer from '../Composer/Composer';
import Posts from '../Posts/Posts';
import StatusBar from '../StatusBar/Statusbar';

// Instruments
import feedDecor from '../Feed/feed.view';

export default class Feed extends Component {
    render() {
        const {
            currentUserFirstName,
            avatar
        } = this.props;
        return (
            <feedDecor.feedBlock>
                < StatusBar { ...this.props } />
                < Composer 
                    avatar = {avatar}
                    currentUserFirstName = { currentUserFirstName }
                />
                < Posts { ...this.props } />
            </feedDecor.feedBlock>
        );
    }
}