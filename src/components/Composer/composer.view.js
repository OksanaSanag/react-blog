import styled from 'styled-components';

const TYPEbutton = {
    POST: 'green',
    CANCEL: 'red'
}

export default {
    block: styled.div`
    width: 400px;
    background-color: rgb(252, 170, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    `,

    imeg: styled.img `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    `,

    textBlock: styled.textarea `
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 4px double rgb(148, 4, 153);
    border-radius: 6px;
    `,

    butt: styled.button` 
    width: 100px;
    height: 40px;
    margin: 10px;
    border: 4px double rgb(148, 4, 153);
    opacity: 0.7;
    border-radius: 6px;
    &:hover {
        opacity:1;
    }
    background-color: ${((props) => {
        return props.type && TYPEbutton[props.type] ? TYPEbutton[props.type] : TYPEbutton.POST
    })}
    `
}