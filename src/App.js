import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "./component/moviecomponent";
export const API_KEY = "6a2d8bb";

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 0.7rem;
  font-size: 1.6rem;
  font-weight: bolder;
  box-shadow: 0px 3px 6px 0 #555;
  align-items: center;
`;
const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 10px;
  margin-right: 0px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 5px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 33%;
  background-color: #333;
  align-items: center;
`;

const SearchImg = styled.img`
  width: 25px;
  height: 25px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  margin-left: 15px;
  width: -webkit-fill-avalable;
  overflow: hidden;
  align-items: center;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [time, updatetime] = useState();
  const [MovieList, updateMovieList] = useState([]);

  const fetchmovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${`man`}}&apikey=6a2d8bb`
    );
    console.log(res);
    updateMovieList(res.data.Search);
  };

  console.log(searchQuery);
  useEffect(() => {
    fetchmovie();
  }, []);

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
    console.log(searchString);
    if (searchString === "") {
      fetchmovie();
    }
  };

  const onTextChange = (event) => {
    clearTimeout(time);
    updateSearchQuery(event.target.value);
    const Timeout = setTimeout(() => {
      fetchData(event.target.value);
    }, 500);
    updatetime(Timeout);
  };

  return (
    <Container>
      <Head className="searchbox">
        <Appname>
          <MovieImg src="https://yt3.ggpht.com/COFiJwgK2ytUmR0beZj7W8JuSPIMh13MtsEdaA8rHeJPqihHtFDy2_N_wFWXdTY8FAJaoGtoKQ=s900-c-k-c0x00ffffff-no-rj" />
          M<div style={{ color: "red" }}>8</div>flix
        </Appname>
        <SearchBox className="searchBox">
          <SearchImg src="https://www.pngitem.com/pimgs/m/559-5590045_search-magnifier-search-icon-no-background-hd-png.png" />
          <SearchInput
            placeholder="Search Movies"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Head>
      <MovieListContainer>
        {MovieList?.length ? (
          MovieList.map((movie, index) => (
            <MovieComponent key={index} movie={movie} />
          ))
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ height: "105px" }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58c61f47-aa9c-4ed6-a0bc-cddac050cfc8/d7fhxtl-198c37c7-d2ab-4177-b024-69a015df0973.jpg/v1/fill/w_800,h_280,q_75,strp/cute_avengers_by_acberdec_d7fhxtl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4YzYxZjQ3LWFhOWMtNGVkNi1hMGJjLWNkZGFjMDUwY2ZjOFwvZDdmaHh0bC0xOThjMzdjNy1kMmFiLTQxNzctYjAyNC02OWEwMTVkZjA5NzMuanBnIiwiaGVpZ2h0IjoiPD0yODAiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzU4YzYxZjQ3LWFhOWMtNGVkNi1hMGJjLWNkZGFjMDUwY2ZjOFwvYWNiZXJkZWMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.15mZbq3f83ZFwxsPa3voh7mDw2-AJljXlapgJkQNRzg"
            />
            <h3 style={{ color: "#fff" }}>Film Not Found 404</h3>
          </div>
        )}
      </MovieListContainer>
    </Container>
  );
}

export default App;
