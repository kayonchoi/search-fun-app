import styled from 'styled-components';

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
    & :hover {
        background-color: #eaeaea; 
      } 
`
export const ListDiv = styled.div`
    height: 30px;
    padding: 10px 40px;
`
export const SearchBigName = styled.p`
  font-size : 15px;
  color : #312828;;
`

export const SearchSameName = styled.p`
  display : inline;
  color: ${props => props.searchValue === props.dataName ?  '#6865f3' : '#949494'};
`

export const SearchSmallName = styled.pre`
  font-size : 13px;
  color : #949494;
`

export const SubwaySpan = styled.span`
  border : 1px solid;
  background-color : ${props => props.color};
  border-radius: 50%;
  color: white;
  margin: 0px 0px 0px 10px;
  font-size: 13px;
  padding: 4px;
  pointer-events: none;
`


