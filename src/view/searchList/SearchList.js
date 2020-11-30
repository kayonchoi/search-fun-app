import React from 'react';
import { useSelector } from 'react-redux';
import { Wrap, ListWrap, ListDiv, SearchBigName, SearchSmallName, SubwaySpan, SearchSameName } from './Styled';

function SearchList({ searchValue }) {
  const { subway, officetel, apt, list } = useSelector(list => list.search);
  // console.log("LIST" , list)
  return (
    <Wrap>
      <ListWrap >
        {subway.map((data, idx) => {
          return (
            <ListDiv key={idx}>
              <SearchSameName searchValue={searchValue} dataName={data.name}>{data.name}</SearchSameName>
              {data.subways.map((data, idx) => {
                return (
                  <SubwaySpan key={idx} color={data.color}>{data.shortName}</SubwaySpan>
                )
              })}
            </ListDiv>
          );
        })}
      </ListWrap>

      <ListWrap >
        {officetel.map((data, idx) => {
          return (
            <ListDiv key={idx}>
              <SearchBigName>{data.name}</SearchBigName>
              <SearchSmallName>{data.complex_address}</SearchSmallName>
            </ListDiv>
          );
        })}
      </ListWrap>

      <ListWrap >
        {apt.map((data, idx) => {
          return (
            <ListDiv key={idx}>
              <SearchBigName>{data.full_name}</SearchBigName>
              <SearchSmallName>{data.complex_address}</SearchSmallName>
            </ListDiv>
          );
        })}
      </ListWrap>
    </Wrap>
  );
}

export default SearchList;