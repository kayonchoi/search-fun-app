import styled from 'styled-components';

export const Header = styled.div`
  position : relative;
  margin: 0 0 70px;
  padding: 140px 250px 5px;
  background-image: linear-gradient(116deg, #13b7cf 0%, #365bb4 47%, #365bb4 47%);
`

export const SearchInput = styled.input`
    margin:  0 auto;
    border-radius: 3px;
    border : none;
    display: block;
    width: 1250px;
    outline: none;
    font-size: 18px;
`
export const SearchTitle = styled.div`
  width: 30px;
  height: 24px;
  margin: 0 24px 8px 0;
  font-size: 16px;
  color: white;
  border-bottom : 3px solid white;
  padding-bottom: 7px;
  display : inline;
  cursor:pointer;
`

export const ListTitleDiv = styled.div`
    margin: 0 auto;
    width: 1200px;
`

export const InputDiv = styled.div`
    margin: 30px 0px 0px 0px;
    height: 50px;
    box-shadow: 0 7px 15px -2px rgba(0,0,0,0.1);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: white;
    display: flex;
    align-items: center;

    > svg {
    margin: 15px;
    width: 100px;
    height: 20px;
    }
`

export const ContentWrap = styled.div`
    position: absolute;
    top: 241px;
`;

export const SearchTitleDiv = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
`

export const TitleName = styled.div`
    padding: 30px 40px 0px;
    font-size: 16px; 
    font-weight: bold;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    border-right: 1px solid #ded9d9;
`