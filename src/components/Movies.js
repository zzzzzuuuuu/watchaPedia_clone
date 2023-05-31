import { styled } from "styled-components";
import Movie from "./Movie";

const Movies = (props) => {
  const DATA = props.data;
  return (
    <>
      <Title>박스오피스 순위</Title>
      <Body>
        <BoxOffice>
          {DATA.map((data, index) => (
            <Movie data={data} key={index} rank={index}/>
          ))}
        </BoxOffice>
      </Body>
    </>
  );
};

export default Movies;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  margin: 40px 0 10px 60px;
  font-weight: 900;
  font-size: 23px;
`;

const BoxOffice = styled.div`
  display: flex;
  width: 1320px;
  height: 500px;
  white-space: nowrap;
  overflow-x: scroll;
`;
