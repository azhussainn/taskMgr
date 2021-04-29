import styled from 'styled-components'

export const TodoItemContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 30px;
    display: flex;
    flex-direction : column;
    border-bottom: 12px solid #e8e8e8;
`

export const ChildContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;

`

export const Title = styled.h1`
    margin : 0 0 40px 0;
    text-transform : capitalize;
`

export const Text = styled.h2`
    margin : 0;
`

export const Label = styled.label`
    font-size : 20px;
    padding-top : 18px;
`

export const Select = styled.select`
    height: 60px;
    font-size : 20px;
    background-color : #e0d1e0;
    cursor : pointer;
`

export const Option = styled.option`
    cursor : pointer;
`
export const RemoveItem = styled.button`
    background-color: #eddaa6;
    height: 40px;
    border: 1px solid #827349;
    font-size: 20px;
    margin-top: 35px;
`