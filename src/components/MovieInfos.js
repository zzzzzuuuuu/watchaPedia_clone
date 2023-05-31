import {useLocation, useParams} from "react-router-dom";
import {styled} from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";
import Recommend from "./Recommends";
import {useRecoilValue} from "recoil";
import {recomAtom} from "../atom/recomAtom";

const MovieInfos = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const {rank} = location.state;
  const recom = useRecoilValue(recomAtom);


  useEffect(() => {
    const options = {
      method: "GET", headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    };
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?language=ko-KR`, options)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const {
    poster_path, original_title, vote_count, release_date, genres, vote_average, runtime, tagline,
  } = movieData;
  return (<>
      <BannerImage></BannerImage>
      <MovieInfo>
        <MovieImageBackground>
          <MovieImage src={"https://image.tmdb.org/t/p/w500" + poster_path} />
        </MovieImageBackground>
        <MovieTitle>{original_title}</MovieTitle>
        <MoviePresent>
          예매 순위 <MoviePresentData>{rank + 1}위</MoviePresentData> 누적 관객
          <MoviePresentData>{vote_count}</MoviePresentData>
        </MoviePresent>
        <MovieOriginalData>{release_date} • {genres && genres.map((i) => i.name).join("/")} </MovieOriginalData>
        <Line>─────────────────────────────────────────────</Line>
        <MovieAverage> 평균 ★{vote_average}</MovieAverage>
        <Line style={{marginTop: "55px"}}>
          ─────────────────────────────────────────────
        </Line>
        <ToGrade>평가하기</ToGrade>
        <Stars>★★★★★</Stars>
        <VerticalLine></VerticalLine>
        <Plus>➕ 보고싶어요　　 　✏️ 코멘트　　 　👀 보는중　　 ••• 더보기</Plus>
      </MovieInfo>
      <Body>
        <MovieAdditionalInfo>
          <MovieBasic>기본 정보</MovieBasic>
          <MovieBasicInfo>{original_title}</MovieBasicInfo>
          <MovieBasicInfo>{release_date}</MovieBasicInfo>
          <MovieBasicInfo>{runtime}분</MovieBasicInfo>
          <MovieBasicFinalInfo>{tagline}</MovieBasicFinalInfo>
          <RecomMovieTitle>추천작</RecomMovieTitle>
          <RecomMovies>
            {recom.map((data, index) => (
              <Recommend data={data} key={index} />
            ))}
          </RecomMovies>
        </MovieAdditionalInfo>
      </Body>
    </>);
};

export default MovieInfos;
const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: black;
`;
const MovieInfo = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background-color: white;
  border: 1px solid #E3E3E3;
`;
const MovieImageBackground = styled.div`
  position: absolute;
  //display: flex;
  width: 165px;
  height: 238px;
  background: white;
  top: -18%;
  left: 18%;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
`;
const MovieImage = styled.img`
  margin: 4px;
  width: 158px;
  height: 230px;
`;
const MoviePresent = styled.p`
  position: absolute;
  top: -19%;
  left: 32%;
  color: #737075;
  font-size: 14px;
  font-family: “돋움“;
  font-weight: 600;
`;
const MoviePresentData = styled.span`
  color: #CACBCE;
`;
const MovieTitle = styled.h1`
  position: absolute;
  color: black;
  top: 1%;
  left: 32%;
  font-size: 33px;
  font-weight: 900;
`;
const MovieOriginalData = styled.p`
  position: absolute;
  top: 22%;
  left: 32%;
  color: #7F7F7F;
  font-size: 18px;
`;
const Line = styled.p`
  position: absolute;
  top: 35%;
  left: 32%;
  color: #EDEDED;
`;
const MovieAverage = styled.h5`
  position: absolute;
  top: 37%;
  left: 32%;
  color: black;
  font-size: 18px;
  font-weight: 400;
`;
const ToGrade = styled.p`
  position: absolute;
  top: 64%;
  left: 37%;
  color: #787878;
  font-size: 13px;
  font-weight: 500;
`;
const Stars = styled.h1`
  position: absolute;
  color: #EEEEEE;
  font-size: 40px;
  top: 64.2%;
  left: 31.3%;
`;
const VerticalLine = styled.div`
  position: absolute;
  background: #EEEEEE;
  width: 1px;
  height: 55px;
  top: 70%;
  left: 48%;
`;
const Plus = styled.p`
  position: absolute;
  top: 70%;
  left: 51%;
  color: #292A32;
  font-size: 15px;
  font-weight: 630;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  background: #F8F8F8;
`;
const MovieAdditionalInfo = styled.div`
  margin: 0 auto;
  margin-top: 28px;
  margin-bottom: 50px;
  width: 800px;
  height: 1700px;
  background-color: white;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
`;
const MovieBasic = styled.h3`
  margin: 20px 0 25px 20px;
  color: black;
  font-size: 20px;
  font-weight: 900;
`;
const MovieBasicInfo = styled.p`
  margin: 6px 20px 0 20px;
  color: #4D4D4D;
  font-size: 15.5px;
  font-weight: 500;
`;
const MovieBasicFinalInfo = styled(MovieBasicInfo)`
  margin-top: 12px;
  line-height: 150%;
`;

const RecomMovieTitle = styled(MovieBasic)`
  margin-top: 50px;
`

const RecomMovies = styled.div`
  display: flex;
  width: 750px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`