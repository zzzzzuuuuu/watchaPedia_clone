import Movies from "../components/Movies";
// import {DATA} from "../assets/Data";
import axios from "axios";
import {useState, useEffect} from "react";

const Main = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWFmZTc2ZmFjYzcwYjViZTRjYTNiMzhkNzYyMmI3MyIsInN1YiI6IjY0NjM5MjY4ZWY4YjMyMDE3MmQ2YWUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EG5wm03hasTF7T4Z65DUGjck_OiGkTAoCNsxojXdsuM'
      }
    };


    axios.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
      .then(response => {
        // console.log(response);
        setData(response.data.results);
      })
      .catch(err => console.error(err));}
  ,[]);

  return (
    <>
      <Movies data={data} />
    </>
  );
};

export default Main;
