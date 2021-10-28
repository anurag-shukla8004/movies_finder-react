import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  /* color: #444; */
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const Moviecomponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  console.log(props.movie);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <MovieContainer
          className="flip-card-front"
          // onClick={() => {
          //   props.onMovieSelect(imdbID);
          // }}
        >
          <CoverImage src={Poster}></CoverImage>
          <MovieName style={{ color: "#fff" }}>{Title}</MovieName>
          <InfoColumn>
            <MovieInfo style={{ color: "#fff" }}>Year: {Year}</MovieInfo>
            <MovieInfo style={{ color: "#fff" }}>Type: {Type}</MovieInfo>
          </InfoColumn>
        </MovieContainer>

        <MovieContainer
          style={{ alignItems: "flex-start" }}
          className="flip-card-back"
          // onClick={() => {
          //   props.onMovieSelect(imdbID);
          // }}
        >
          <CoverImage style={{ height: "240px" }} src={Poster}></CoverImage>
          <MovieName style={{ marginBottom: "0px" }}>
            Name: <span style={{ color: "white" }}> {Title}</span>{" "}
          </MovieName>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            Year: <span style={{ color: "#fff" }}>{Year}</span>
          </MovieInfo>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            Type:<span style={{ color: "#fff" }}> {Type}</span>{" "}
          </MovieInfo>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            IMDb rating: <span style={{ color: "#fff" }}> 8.9</span>
          </MovieInfo>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            Language:
            <span style={{ color: "#fff" }}> Hindi | English</span>
          </MovieInfo>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            watch:<span style={{ color: "#fff" }}> Cinemas</span>{" "}
          </MovieInfo>
          <MovieInfo style={{ paddingBottom: "2px" }}>
            Watch Time:<span style={{ color: "#fff" }}> 1.50 hours</span>
          </MovieInfo>
        </MovieContainer>
      </div>
    </div>
  );
};

export default Moviecomponent;
