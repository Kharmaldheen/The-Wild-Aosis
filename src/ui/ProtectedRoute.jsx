import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2. if there's no autheticated user, then redirect to the login page. navigate function can only be called in a callback function or in a useEffect
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading]
  );

  //3. while loading the authenticated user is happening, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
