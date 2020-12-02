import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { ReactComponent as SearchSVG } from '../../img/icon-search.svg';
import SearchList from '../searchList/SearchList';
import { OneRoonSpan } from '../searchList/Styled';
import SearchLocal from '../searchLocal/SearchLocal';
import { Header, SearchInputTag, SearchTitle, ListTitleDiv, InputDiv, SearchTitleDiv, TitleName, ContentWrap } from './Styled';

function SearchInput() {
  const dispatch = useDispatch();
  const { oneRoom } = useSelector(list => list.search);
  const [inputValue, setInputValue] = useState('');
  const [value] = useDebounce(inputValue, 400);
  const [mode, setMode] = useState('start');
  const container = useRef();

  const handleChage = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleFocus = e => {
    setMode('default');
  };

  const onMouseDown = e => {
    if (!container.current?.contains(e.target)) {
      setMode('start');
    };
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  useEffect(() => {
    if (value !== '') {
      dispatch.search.findSearch({ keyword: value });
      if (0 === oneRoom.length) {
        setMode('list');
      } else {
        setMode('nolist');
      }
    } else {
      dispatch.search.initState();
    }
  }, [value]);

  return (
    <Header>
      <ListTitleDiv>
        <SearchTitle>매몰</SearchTitle>
        <SearchTitle>분양</SearchTitle>
        <div ref={container}>
          <InputDiv>
            <SearchSVG />
            <SearchInputTag type="text" value={inputValue} onChange={handleChage} onFocus={handleFocus} />
          </InputDiv>
          {mode === 'default' &&
            <ContentWrap>
              <SearchTitleDiv>
                <TitleName>
                  최근 검색어
                </TitleName>
                <TitleName>
                  쉬운 방찾기
                </TitleName>
              </SearchTitleDiv>
              <SearchLocal />
            </ContentWrap>
          }
          {mode === 'list' &&
            <ContentWrap>
              <SearchTitleDiv>
                <TitleName>
                  지역.지하철.대학교
                </TitleName>
                <TitleName>
                  오피스텔
                </TitleName>
                <TitleName>
                  아파트
                </TitleName>
              </SearchTitleDiv>
              <SearchList
                searchValue={value} />
            </ContentWrap>
          }
          {mode === 'nolist' &&
            <ContentWrap>
              <SearchTitleDiv>
                <TitleName>
                  검색결과가 없습니다.
                </TitleName>
              </SearchTitleDiv>
            </ContentWrap>
          }
        </div>
      </ListTitleDiv>
    </Header>
  );
}

export default SearchInput;
