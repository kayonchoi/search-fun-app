import styled, { css } from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    width: 1200px;
`
export const ListWrap = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    height: 240px;
    border-right: 1px solid #ded9d9;
    background-color: white;
    overflow: scroll;
    padding: 0px 40px;
    & :hover {
        background-color: #eaeaea; 
      } 
`
export const ListDiv = styled.div`
    height: 30px;
    padding: 25px 0px 0px 0px;
`
export const SearchBigName = styled.p`
  font-size : 15px;
`

export const SearchSameName = styled.p`
  display : inline;
  color: ${props => props.searchValue === props.dataName ? 'red' : 'black'};
`

export const SearchSmallName = styled.pre`
  font-size : 13px;
`

export const SubwaSpan = styled.span`
  border : 1px solid;
  background-color : ${props => props.color};
  border-radius: 22%;
  color: white;
  margin: 0px 0px 0px 10px;
  font-size: 13px;
  padding: 4px;
`


