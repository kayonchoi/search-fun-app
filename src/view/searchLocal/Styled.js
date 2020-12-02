import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    width: 1200px;
`;
export const ListWrap = styled.div`
    height: 240px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    background-color: white;
    overflow: scroll;
`;

export const ListLocalWrap = styled.div`
    height: 240px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    background-color: white;
    overflow: scroll;
    border-right: 1px solid #ded9d9;
`

export const ListDiv = styled.div`
    height: 30px;
    padding: 10px 40px;
    &:hover {
        background-color: #eaeaea; 
      } 
`;

export const SearchBigName = styled.p`
  font-size : 13px;
  color : #949494;
`;

export const SearchSameName = styled.span`
  color : #212125;
  /* color: ${props => props.searchValue ?  '#212125' : '#4653b7'}; */
`;

export const SearchSmallName = styled.pre`
  font-size : 13px;
  color : #949494;
`;

export const SubwaySpan = styled.span`
  float: right;
  margin: 0 0 0 10px;
  padding: 4px;
  color: white;
  font-size: 13px;
  border : 1px solid;
  background-color : ${props => props.color};
  border-radius: 30%;
`;