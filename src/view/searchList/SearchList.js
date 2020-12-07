import React from 'react';
import { useSelector } from 'react-redux';
import { Wrap, ListWrap, ListDiv, SearchBigName, SearchSmallName, SubwaySpan, SearchSpanName, OneRoonSpan } from './Styled';

function SearchList({ inputSearchValue, defaultView }) {
  const { oneRoom, officetel, apt } = useSelector(list => list.search);

  const handleListItem = itemData => {
    const localData = JSON.parse(localStorage.getItem('searchHistory'));
    const searchHistory = localData ? localData : [];
    const searchIdx = searchHistory.findIndex(info => info.name === itemData.name);

    if (searchHistory[searchIdx]) {
      searchHistory.splice(searchIdx, 1);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      defaultView();
    };
    if (searchHistory.length >= 10) { searchHistory.splice(0, 1); }
    
    searchHistory.push(itemData);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    defaultView();
  };

  const SearchList = itemData => {
    const name = itemData.type === 'subway' ? itemData.name : itemData.full_name;
    const regex = new RegExp(inputSearchValue, 'g');
    return (
      <SearchSpanName dangerouslySetInnerHTML={{ __html: name.replace(regex, showKeyword(inputSearchValue)) }}></SearchSpanName>
    );
  };

  const showKeyword = keyword => {
    return (
      `<span class="keywordSearch">${keyword}</span>`
    );
  };

  return (
    <Wrap>
      <ListWrap>
        {oneRoom.map((data, idx) => {
          if (data.type === 'subway') {
            return (
              <ListDiv key={idx} onClick={() => handleListItem(data)}>
                {SearchList(data)}
                {data.subways.map((subway, idx) =>
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                )}
                {data.filter && <OneRoonSpan>{data.filter.main_room_type_str}</OneRoonSpan>}
              </ListDiv>
            );
          }
          if (data.type === 'region') {
            return (
              <ListDiv key={idx} onClick={() => handleListItem(data)}>
                {SearchList(data)}
                {data.subways.map((subway, idx) =>
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                )}
                {data.filter && <OneRoonSpan>{data.filter.main_room_type_str}</OneRoonSpan>}
              </ListDiv>
            );
          }
        })}
      </ListWrap>

      <ListWrap>
        {officetel.map((data, idx) =>
          <ListDiv key={idx}>
            <SearchBigName>{data.name}</SearchBigName>
            <SearchSmallName>{data.complex_address}</SearchSmallName>
          </ListDiv>
        )}
      </ListWrap>

      <ListWrap >
        {apt.map((data, idx) =>
          <ListDiv key={idx}>
            <SearchBigName>{data.full_name}</SearchBigName>
            <SearchSmallName>{data.complex_address}</SearchSmallName>
          </ListDiv>
        )}
      </ListWrap>
    </Wrap>
  );
}
export default SearchList;
