import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  margin-top: 1rem;
  text-align: center;
  width: 25rem;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

function Logo({ footer }) {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  let src = isDarkMode
    ? "/logo-pathfinder-dark.png"
    : "/logo-pathfinder-light.png";

  if (footer) src = "/logo-pathfinder-dark.png";

  return (
    <StyledLogo onClick={() => navigate("/home")}>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
