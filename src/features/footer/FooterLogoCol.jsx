import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import Logo from "../../ui/Logo";

const LogoCol = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & p {
    margin-top: 2rem;
    padding: 0 1rem;
    font-size: 1.4rem;
    color: #d1d5db;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;

  & span {
    font-size: 2.8rem;
    color: #9ca3af;

    &:hover {
      color: #f3f4f6;
    }
  }
`;

function FooterLogoCol() {
  const navigate = useNavigate();

  return (
    <LogoCol>
      <Logo footer={true} />
      <SocialLinks>
        <span onClick={() => navigate("/home")}>
          <AiOutlineFacebook />
        </span>
        <span onClick={() => navigate("/home")}>
          <AiOutlineInstagram />
        </span>
        <span onClick={() => navigate("/home")}>
          <AiOutlineTwitter />
        </span>
      </SocialLinks>
      <p>
        Copyright &copy; <span>{new Date().getFullYear()}</span> by
        <br />
        PathFinder,Inc. All rights reserved.
      </p>
    </LogoCol>
  );
}

export default FooterLogoCol;
