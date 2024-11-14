import styled from "styled-components";
import { auth, googleProvider } from "../firebase.js";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
// Import useHistory from react-router-dom, not react-redux
import { useNavigate } from "react-router-dom"; // useNavigate replace the history
import { signInWithPopup } from "firebase/auth";
import {
  selectUserName,
  // selectUserEmail,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetail,
} from "../feature/user/userSlice.js";
import { useEffect } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Directly dispatch the user data to the store
        dispatch(
          setUserLoginDetail({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", // This forces the account selection screen
    });
    if (!username) {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          dispatch(
            setUserLoginDetail({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            })
          );
          console.log(user.photoURL);
        })
        .catch((erros) => {
          alert(erros.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          console.log("User logged out");
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="originals" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="moives" />
              <span>MOIVES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="seriess" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={userphoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  flex-flow: row nowrap;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      max-width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      line-height: 1.08;
      letter-spacing: 1.42px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-raduis: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        position: absolute;
        right: 0px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  letter-spacing: 2px;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  :text-transform: uppercase;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;
  width: 110px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;

  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
  }
`;

export default Header;
