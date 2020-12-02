import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrap, ListWrap, ListDiv, SearchBigName, SearchSmallName, SubwaySpan, SearchSameName, OneRoonSpan } from './Styled';

function SearchList({ searchValue }) {
  const { oneRoom, officetel, apt } = useSelector(list => list.search);
  const localData = JSON.parse(localStorage.getItem('searchHistory'));
  const [searchHistory, setSearchHistory] = useState(localData ? localData : []);

  const handleItem = data => {
    if (searchHistory.length === 0) {
      setSearchHistory([data]);
    } else {
      setSearchHistory([...searchHistory, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <Wrap>
      <ListWrap>
        {oneRoom.map((data, idx) => {
          if (data.type === 'subway') {
            return (
              <ListDiv key={idx} onClick={() => handleItem(data)}>
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
              <ListDiv key={idx} onClick={() => handleItem(data)}>
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
