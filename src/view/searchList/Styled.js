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
    border-right: 1px solid #ded9d9;
    background-color: white;
    overflow: scroll;
`;

export const ListDiv = styled.div`
    height: 30px;
    padding: 10px 40px;
      &:hover {
          background-color: #eaeaea; 
        } 
`;

export const SearchBigName = styled.p`
  font-size : 15px;
  color : #312828;
`;

export const SearchSpanName = styled.span`
  color : #212125;
  > span {
    &.keywordName {
      color: blue;
    }
  }
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

export const OneRoonSpan = styled.span`
  float : right;
  padding: 3px;
  font-size: 11px;
  border : 1px solid;
  border-radius: 10px;
`;
