import {styled} from "styled-components";
import {useNavigate} from "react-router-dom";

const Movie = (props) => {
    const navigate = useNavigate();
    const {rank, img, title, year, country, average, percent, audience} =
        props.data;

    const goMovieInfos = () => {
        navigate(`/detail/${rank}`);
    }
    return (
        <>
            <MovieBox onClick={goMovieInfos}>
                <Poster src={img}></Poster>
                <RankNumber>{rank}</RankNumber>
                <MovieTitle>{title}</MovieTitle>
                <MovieInfo>
                    {year} • {country}
                </MovieInfo>
                <MovieGrade>평균★{average}</MovieGrade>
                <MovieAudience>
                    예매율 {percent} • 누적 관객 {audience}
                </MovieAudience>
            </MovieBox>
        </>
    );
};

export default Movie;

const MovieBox = styled.div`
  position: relative;
  margin: 0 8px 0 0;
  width: 260px;
  height: 371px;
  border: 1px solid #eae9e8;
  cursor: pointer;
`;

const Poster = styled.img`
  position: relative;
  width: 260px;
  margin-bottom: 8px;
`;

const RankNumber = styled.div`
  position: absolute;
  top: 1.5%;
  left: 2%;
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  line-height: 25px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  padding: 0;
`;

const MovieTitle = styled.div`
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: black;
`;

const MovieInfo = styled.p`
  margin: 4px 0 4px 0;
  font-size: 14px;
  font-weight: 500;
`;

const MovieGrade = styled(MovieInfo)`
  color: #37383f;
`;

const MovieAudience = styled.p`
  margin: 0;
  color: #545765;
  font-size: 13px;
  font-weight: 500;
`;
