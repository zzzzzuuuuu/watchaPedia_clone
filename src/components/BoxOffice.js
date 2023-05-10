import { styled } from "styled-components";
import Ranking from "./Ranking";

const BoxOffice = (props) => {
  const { movie } = props.data;
  return (
    <>
      <Title>박스오피스 순위</Title>
      <Body>
        <Movie>
          {movie.map((data, index) => (
            <Ranking data={data} key={index} />
          ))}
        </Movie>
      </Body>
    </>
  );
};

export default BoxOffice;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  flex: inline-block;
  margin: 40px 0 10px 60px;
  font-weight: 900;
  font-size: 23px;
`;

const Movie = styled.div`
  display: flex;
  width: 1320px;
  height: 500px;
  /* border-radius: 10px;
  border: 1px solid #eae9e8; */
  white-space: nowrap;
  overflow-x: scroll;
`;
