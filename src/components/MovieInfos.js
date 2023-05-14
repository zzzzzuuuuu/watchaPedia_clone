import {DATA} from "../assets/Data";
import {useParams} from "react-router-dom";
import {styled} from "styled-components";

const MovieInfos = (props) => {
  const params = useParams();
  const movieInfos = DATA[params.ranking - 1];
  return (
    <>
      <BannerImage></BannerImage>
      <MovieInfo>
        <MovieImageBackground><MovieImage src={movieInfos.img}></MovieImage></MovieImageBackground>
        <MovieTitle>{movieInfos.title}</MovieTitle>
        <MoviePresent>예매 순위 <MoviePresentData>{movieInfos.rank}위({movieInfos.percent})</MoviePresentData> 누적
          관객 <MoviePresentData>{movieInfos.audience}명</MoviePresentData></MoviePresent>
        <MovieOriginalData>{movieInfos.year} • {movieInfos.genre} • {movieInfos.country}</MovieOriginalData>
        <Line>─────────────────────────────────────────────</Line>
        <MovieAverage> 평균 ★{movieInfos.average}</MovieAverage>
        <Line style={{marginTop: "55px"}}>─────────────────────────────────────────────</Line>
        <ToGrade>평가하기</ToGrade>
      </MovieInfo>
      <Body>
        <MovieAdditionalInfo>
          <MovieBasic>기본 정보</MovieBasic>
          <MovieBasicInfo>{movieInfos.originalTitle}</MovieBasicInfo>
          <MovieBasicInfo>{movieInfos.year} • {movieInfos.country} • {movieInfos.genre}</MovieBasicInfo>
          <MovieBasicInfo>{movieInfos.runningTime} • {movieInfos.age}</MovieBasicInfo>
          <MovieBasicInfo>{movieInfos.description}</MovieBasicInfo>
        </MovieAdditionalInfo>
      </Body>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>안녕하세요 디테일 페이지입니다</p>
      <p>{movieInfos.rank}</p>
    </>
  )
    ;
};

export default MovieInfos;


const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: black;
`

const MovieInfo = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background-color: white;
  border: 1px solid #E3E3E3;
`

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
`

const MovieImage = styled.img`
  margin: 4px;
  width: 158px;
  height: 230px;
`

const MoviePresent = styled.p`
  position: absolute;
  top: -19%;
  left: 32%;
  color: #737075;
  font-size: 14px;
  font-family: "돋움";
  font-weight: 600;
`

const MoviePresentData = styled.span`
  color: #CACBCE;
`

const MovieTitle = styled.h1`
  position: absolute;
  //display: flex;
  color: black;
  top: 1%;
  left: 32%;
  font-size: 33px;
  font-weight: 900;
`

const MovieOriginalData = styled.p`
  position: absolute;
  top: 22%;
  left: 32%;
  color: #7F7F7F;
  font-size: 18px;
`

const Line = styled.p`
  position: absolute;
  top: 35%;
  left: 32%;
  color: #EDEDED;
`

const MovieAverage = styled.h5`
  position: absolute;
  top: 37%;
  left: 32%;
  color: black;
  font-size: 18px;
  font-weight: 400;
`

const ToGrade = styled.p`
  position: absolute;
  top: 66%;
  left: 36%;
  color: #787878;
  font-size: 13px;
  font-weight: 500;
  
`

const Body = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  background: #F8F8F8;
`

const MovieAdditionalInfo = styled.div`
  margin: 0 auto;
  margin-top: 28px;
  width: 637px;
  height: 235px;
  background-color: white;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
`

const MovieBasic = styled.h3`
  margin: 20px 0 25px 20px;
  color: black;
  font-size: 20px;
  font-weight: 900;
`

const MovieBasicInfo = styled.p`
  margin: 6px 20px 0 20px;
  color: #4D4D4D;
  font-size: 15.5px;
  font-weight: 500;
`
