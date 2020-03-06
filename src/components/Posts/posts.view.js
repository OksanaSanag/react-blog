import styled from 'styled-components';

export default {
    block: styled.div`
        width: 400px;
        background-color: rgb(252, 170, 255);
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-bottom: 20px;
    `,

    imeg: styled.img `
        width: 50px;
        height: 50px;
        border-radius: 50%;
    `,

    name: styled.a `
    
        color: red;
        font-size: 20px;
        font-weight: 600;
        margin: 10px;
    `,

    time: styled.time `
    
        color: rgb(141, 6, 182);
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
    `,

    post: styled.div `
        font-size: 14px;
    `
}