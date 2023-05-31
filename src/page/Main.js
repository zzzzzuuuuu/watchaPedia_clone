import Movies from "../components/Movies";
// import {DATA} from "../assets/Data";
import axios from "axios";
import {useState, useEffect} from "react";
import {useRecoilState} from "recoil";
import {recomAtom} from "../atom/recomAtom";

const Main = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const [recomMoive, setRecomMovie] = useRecoilState(recomAtom);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      }
    };


    axios.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
      .then(response => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(err => console.error(err));}
  ,[]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      }
    };

    axios('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', options)
      .then(response => {
        // console.log(response);
        setRecomMovie(response.data.results);
      })
      .catch(err => console.error(err));
  },[]);

  useEffect(() => {
    console.log(recomMoive);
  }, [recomMoive]);


  return (
    <>
      <Movies data={data} />
    </>
  );
};

export default Main;
