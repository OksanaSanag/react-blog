// Core
import React, { Component } from 'react';
import { createPortal } from 'react-dom'; //для отображения дочерних элементов в узел DOM, 
            //который существует вне иерархии DOM родительского компонента.
            //ReactDOM.createPortal(child, container)
            //Первым аргументом (child) является любой отображаемый потомок React, такой как элемент, строка или фрагмент. 
            //Второй аргумент (container) является элементом DOM.

// Instruments
import '../styles/styleSpinner.css'

const portal = document.getElementById('spinner'); //додали <div id='spinner'> в index.html

export default class Spinner extends Component {
    render () {
        const { isSpinning } = this.props;

        return createPortal(
            isSpinning ? <div className='spin'></div> : null,
            portal,
        )
        
    }
} 