import styled from 'styled-components';



export const PageArea = styled.div`
display: flex;
margin-top: 20px;

.leftSide{
    width: 250px;
    margin-right: 10px;

    .filterName{
        font-size: 15px;
        margin: 10px 0;
    }

    input, select{
        width: 100%;
        height: 40px;
        border: 2px solid #9BB83C;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        padding: 10px;
    }
}

.rightSide{
    flex: 1;
}
`;