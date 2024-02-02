import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.4rem;
`;

function SignupForm() {
  const { signup, isSigningUp } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ fullName, email, password, qualification }) {
    signup(
      { fullName, email, password, qualification },
      {
        onSettled: () => {
          reset();
          navigate(-1);
        },
      }
    );
  }

  function handleCancel() {
    reset();
    navigate(-1);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isSigningUp}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Qualification" error={errors?.qualification?.message}>
        <Input
          type="text"
          id="qualification"
          disabled={isSigningUp}
          {...register("qualification", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isSigningUp}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isSigningUp}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a  minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isSigningUp}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      {/* <FormRow full={true}> */}
      <ButtonDiv>
        {/* type is an HTML attribute! */}
        <Button
          size="large"
          onClick={handleCancel}
          variation="secondary"
          type="reset"
          disabled={isSigningUp}
        >
          Cancel
        </Button>
        <Button size="large" disabled={isSigningUp}>
          Create new user
        </Button>
      </ButtonDiv>

      {/* </FormRow> */}
    </Form>
  );
}

export default SignupForm;
