import styled from 'styled-components';

export const Header = styled.div`
  margin: 0 0 70px;
  padding: 140px 250px 5px;
  background-image: linear-gradient(116deg, #13b7cf 0%, #365bb4 47%, #365bb4 47%);
  position : relative;
`;

export const SearchInputTag = styled.input`
    display: block;
    width: 1250px;
    margin:  0 auto;
    font-size: 18px;
    border : none;
    border-radius: 3px;
    outline: none;
`;

export const SearchTitle = styled.div`
  display : inline;
  width: 30px;
  height: 24px;
  margin: 0 24px 8px 0;
  padding-bottom: 7px;
  color: white;
  font-size: 16px;
  border-bottom : 3px solid white;
  cursor:pointer;
`;

export const ListTitleDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const InputDiv = styled.div`
    display: flex;
    height: 50px;
    margin: 30px 0px 0px 0px;
    box-shadow: 0 7px 15px -2px rgba(0,0,0,0.1);
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    align-items: center;

    > svg {
    width: 100px;
    height: 20px;
    margin: 15px;
    }
`;

export const ContentWrap = styled.div`
    position: absolute;
    top: 241px;
`;

export const SearchTitleDiv = styled.ul`
    display: flex;
    height: 60px;
    background-color: white;
`;

export const TitleName = styled.div`
    padding: 30px 40px 0px;
    font-size: 16px; 
    font-weight: bold;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    border-right: 1px solid #ded9d9;
`;
