import React from 'react';
import {styled} from "styled-components";
import {useNavigate} from "react-router-dom";

const Recommends = (props) => {
  const {id, poster_path, original_title, vote_average} = props.data;
  const navigate = useNavigate();
  const goRecomMovies = () => {
    navigate(`/recom/${id}`);
  }
  return (
    <>
      <Body onClick={goRecomMovies}>
        <Poster src={"https://image.tmdb.org/t/p/w500" + poster_path}></Poster>
        <Title>{original_title}</Title>
        <Average>평균 ★ {vote_average}</Average>
      </Body>
    </>
  );
};

export default Recommends;

const Body = styled.div`
  width: 25%;
  cursor: pointer;
`

const Poster = styled.img`
  width: 143px;
  height: 202px;
  margin: 0 5px 0 23px;
  flex-wrap: wrap;
  max-width: 450px;
  overflow: hidden;
  border-radius: 5px;
`

const Title = styled.p`
  max-width: 143px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 5px 0 23px;
  font-size: 16px;
  font-weight: 700;
`

const Average = styled.p`
  margin: 5px 0 30px 23px;
  font-size: 13px;
  color: #797979;
`