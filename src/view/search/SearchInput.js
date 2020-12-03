import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { ReactComponent as SearchSVG } from '../../img/icon-search.svg';
import SearchList from '../searchList/SearchList';
import SearchLocal from '../searchLocal/SearchLocal';
import { Header, SearchInputTag, SearchTitle, NoListTitle, ListTitleDiv, InputDiv, SearchTitleDiv, TitleName, ContentWrap, NoListPTag, NoListDiv } from './Styled';

function SearchInput() {
  const dispatch = useDispatch();
  const { oneRoom, officetel, apt } = useSelector(list => list.search);
  const [inputValue, setInputValue] = useState('');
  const [value] = useDebounce(inputValue, 400);
  const [mode, setMode] = useState('');
  const [isOpen, setOpen] = useState(false);
  const container = useRef();

  const handleChage = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleFocus = e => {
    setOpen(true);
    setMode('default');
    document.addEventListener('mousedown', onMouseDown, false);
  };

  const defaultInputValue = () => {
    setMode('');
    setInputValue('');
    setOpen(false);
  };

  const onMouseDown = e => {
    if (!container.current?.contains(e.target)) {
      defaultInputValue();
      document.removeEventListener('mousedown', onMouseDown);
    };
  };

  useEffect(() => {
    if (oneRoom.length === 0 && officetel.length === 0 && apt.length === 0) {
      setMode('nolist');
    } else {
      setMode('list');
    }
  }, [oneRoom, officetel, apt]);

  useEffect(() => {
    setMode('roding');
    if (value !== '') {
      setOpen(true);
      dispatch.search.findSearch({ keyword: value });
    } else {
      setOpen(false);
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
          {isOpen && (
            <>
              {mode === 'default' && (
                <ContentWrap>
                  <SearchTitleDiv>
                    <TitleName>
                      최근 검색어
                    </TitleName>
                    <TitleName>
                      쉬운 방찾기
                    </TitleName>
                  </SearchTitleDiv>
                  <SearchLocal
                    defaultInputValue={defaultInputValue}
                  />
                </ContentWrap>
              )}
              {mode === 'list' && (
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
                    searchValue={value}
                    defaultInputValue={defaultInputValue} />
                </ContentWrap>
              )}
              {mode === 'nolist' && (
                <ContentWrap>
                  <NoListDiv>
                    <NoListTitle>
                      검색결과가 없습니다.
                      <NoListPTag>
                          단어의 철자가 정확하지 확인해 보세요.
                      </NoListPTag>
                    </NoListTitle>
                  </NoListDiv>
                </ContentWrap>
              )}
              {mode === 'roding' && (
                <ContentWrap>
                  <NoListDiv>
                    <NoListPTag> roading.... </NoListPTag>
                  </NoListDiv>
                </ContentWrap>
              )}
            </>
          )}
        </div>
      </ListTitleDiv>
    </Header>
  );
}

export default SearchInput;

