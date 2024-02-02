import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button variation="secondary" onClick={() => navigate(-1)}>
      Go Back
    </Button>
  );
}

export default GoBackButton;
