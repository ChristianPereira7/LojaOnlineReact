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

    ul, li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .categoryItem{
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        color: #000;
        cursor: pointer;

        :hover,
        .active {
        background-color: #9BB83C;
        color: #CCC;
    }

        img{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        span{
            font-size: 14px;

        }
    }

   
}

.rightSide{
    flex: 1;
}
`;