import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrap, ListWrap, ListDiv, SearchBigName, SearchSmallName, SubwaySpan, SearchSameName, OneRoonSpan } from './Styled';

function SearchList({ searchValue, defaultInputValue }) {
  const { oneRoom, officetel, apt } = useSelector(list => list.search);

  const handleListItem = data => {
    const localData = JSON.parse(localStorage.getItem('searchHistory'));
    const searchHistory = localData ? localData : [];
    if (searchHistory.length >= 10) {
      searchHistory.splice(0, 1);
    }
    searchHistory.push(data);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    // defaultInputValue();
  };

  return (
    <Wrap>
      <ListWrap>
        {oneRoom.map((data, idx) => {
          if (data.type === 'subway') {
            return (
              <ListDiv key={idx} onClick={() => handleListItem(data)}>
                <SearchSameName>{data.name}</SearchSameName>
                {data.subways.map((subway, idx) => (
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                ))}
                {data.filter && <OneRoonSpan>{data.filter.main_room_type_str}</OneRoonSpan>}
              </ListDiv>
            );
          }
          if (data.type === 'region') {
            return (
              <ListDiv key={idx} onClick={() => handleListItem(data)}>
                <SearchSameName>{data.full_name}</SearchSameName>
                {data.subways.map((subway, idx) => (
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                ))}
                {data.filter && <OneRoonSpan>{data.filter.main_room_type_str}</OneRoonSpan>}
              </ListDiv>
            );
          }
        })}
      </ListWrap>

      <ListWrap>
        {officetel.map((data, idx) => (
          <ListDiv key={idx}>
            <SearchBigName>{data.name}</SearchBigName>
            <SearchSmallName>{data.complex_address}</SearchSmallName>
          </ListDiv>
        ))}
      </ListWrap>

      <ListWrap >
        {apt.map((data, idx) => (
          <ListDiv key={idx}>
            <SearchBigName>{data.full_name}</SearchBigName>
            <SearchSmallName>{data.complex_address}</SearchSmallName>
          </ListDiv>
        ))}
      </ListWrap>
    </Wrap>
  );
}

export default SearchList;
