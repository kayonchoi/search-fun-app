import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { ReactComponent as SearchSVG } from '../../img/icon-search.svg';
import SearchList from '../searchList/SearchList';
import { Header, SearchInput, SearchTitle, ListTitleDiv, InputDiv, SearchTitleDiv, TitleName, ContentWrap } from './Styled';

function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [value] = useDebounce(inputValue, 400);
  const [clickInput, setClickInput] = useState(false);

  const handleChage = e => {
    setInputValue(e.currentTarget.value);
    if (inputValue === '') {
      setClickInput(false);
    } else {
      setClickInput(true);
    }
  };

  const handleBuried = () => {
    console.log("handleBuried");
  }

  const handleParcelout = () => {
    console.log("handleParcelout");
  }

  useEffect(() => {
    if (value !== '') {
      dispatch.search.findSearch({ keyword: value });
    } else {
      dispatch.search.initState();
      setClickInput(false);
    }
  }, [value]);

  return (
    <Header>
      <ListTitleDiv>
        <SearchTitle onClick={handleBuried}>매몰</SearchTitle>
        <SearchTitle onClick={handleParcelout}>분양</SearchTitle>
        <InputDiv>
          <SearchSVG />
          <SearchInput type="text" value={inputValue} onChange={handleChage} />
        </InputDiv>
        {clickInput &&
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
            <SearchList searchValue={value} />
          </ContentWrap>
        }
      </ListTitleDiv>
    </Header>
  );
}

export default Search;
