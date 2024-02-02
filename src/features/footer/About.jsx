import { useNavigate } from "react-router-dom";

import FooterHeading from "./FooterHeading";
import ListLayout from "./ListLayout";

function About() {
  const navigate = useNavigate();

  return (
    <ListLayout>
      <FooterHeading>About</FooterHeading>
      <ul>
        <li onClick={() => navigate("/about")}>About PathFinder</li>
        <li>For Business</li>
        <li>Partners</li>
        <li>Careers</li>
      </ul>
    </ListLayout>
  );
}

export default About;
