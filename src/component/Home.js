import styled from "styled-components";
import ImageSlide from "./ImageSlide";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovie } from "../feature/movie/movieSlice";
import { selectUserName } from "../feature/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // Create state variables for each type of movie
  const [recommends, setRecommends] = useState([]);
  const [newDisneys, setNewDisneys] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    // Firestore collection reference
    const movieCollection = collection(db, "movies");

    // Set up snapshot listener
    const unsubscribe = onSnapshot(movieCollection, (snapshot) => {
      const recommendsTemp = [];
      const newDisneysTemp = [];
      const originalsTemp = [];
      const trendingsTemp = [];

      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        switch (data.type) {
          case "recommend":
            recommendsTemp.push({ id: doc.id, ...data });
            break;
          case "new":
            newDisneysTemp.push({ id: doc.id, ...data });
            break;
          case "original":
            originalsTemp.push({ id: doc.id, ...data });
            break;
          case "trending":
            trendingsTemp.push({ id: doc.id, ...data });
            break;
          default:
            break;
        }
      });

      // Update state with the fetched data
      setRecommends(recommendsTemp);
      setNewDisneys(newDisneysTemp);
      setOriginals(originalsTemp);
      setTrendings(trendingsTemp);

      // Dispatch the data to Redux after the data is fetched
      dispatch(
        setMovie({
          recommend: recommendsTemp,
          newDisney: newDisneysTemp,
          original: originalsTemp,
          trending: trendingsTemp,
        })
      );
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [dispatch, userName]);
  return (
    <HomeContent>
      <ImageSlide />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </HomeContent>
  );
};

const HomeContent = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    position: absolute;
    background: url("/images/home-background.png") fixed;
    background-repeat: no-repeat;
    background-size: cover;
    inset: 0;
    opacity: 1;
    content: "";
    z-index: -1;
  }
`;

export default Home;
