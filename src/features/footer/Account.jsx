import { useNavigate } from "react-router-dom";

import ListLayout from "./ListLayout";
import FooterHeading from "./FooterHeading";

import { useUser } from "../authentication/useUser";

function Account() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  return (
    <ListLayout>
      <FooterHeading>Account</FooterHeading>
      <ul>
        <li onClick={() => navigate("/signup")}>Create Account</li>
        {!isAuthenticated && (
          <li onClick={() => navigate("/login")}>Sign in</li>
        )}
        <li>iOS app</li>
        <li>Android app</li>
      </ul>
    </ListLayout>
  );
}

export default Account;
