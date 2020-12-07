import React from 'react';
import { Wrap, ListDiv, SearchBigName, ListLocalWrap, SearchSameName, SubwaySpan } from './Styled';

function SearchLocal({ defaultView }) {
  const localData = JSON.parse(localStorage.getItem('searchHistory')) ?? [];

  const handleLocalItem = data => {
    const itemIdx = localData.findIndex(info => info.name === data.name);
    localData.splice(itemIdx, 1);
    localData.push(data);
    localStorage.setItem('searchHistory', JSON.stringify(localData));
    defaultView();
  };

  return (
    <Wrap>
      <ListLocalWrap>
        {[...localData]?.reverse().map((data, idx) => {
          if (data.type === 'subway') {
            return (
              <ListDiv key={idx} onClick={() => handleLocalItem(data)}>
                <SearchSameName>{data.name}</SearchSameName>
                {data.subways.map((subway, idx) =>
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                )}
              </ListDiv>
            );
          }
          if (data.type === 'region') {
            return (
              <ListDiv key={idx} onClick={() => handleLocalItem(data)}>
                <SearchSameName>{data.full_name}</SearchSameName>
                {data.subways.map((subway, idx) =>
                  <SubwaySpan key={idx} color={subway.color}>{subway.shortName}</SubwaySpan>
                )}
              </ListDiv>
            );
          };
        })}
      </ListLocalWrap>

      <ListLocalWrap>
        <ListDiv>
          <SearchBigName>많은 조건으로 검색해보세요!방 찾기 초보를 위한 초간단 솔루션</SearchBigName>
        </ListDiv>
      </ListLocalWrap>
    </Wrap>
  );
}
export default SearchLocal;
