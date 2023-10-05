import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowLabel from "../../ui/FormRowLabel";
import Input from "../../ui/Input";
import useSignUp from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isLoading } = useSignUp();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowLabel label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRowLabel>

      <FormRowLabel label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid  email address",
            },
          })}
        />
      </FormRowLabel>

      <FormRowLabel
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minumum of 8 characters",
            },
          })}
        />
      </FormRowLabel>

      <FormRowLabel
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password ||
              "This field should be the same as the password field",
          })}
        />
      </FormRowLabel>

      <FormRowLabel>
        {/* type is an HTML attribute! */}
        <Button
          disabled={isLoading}
          onClick={reset}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRowLabel>
    </Form>
  );
}

export default SignupForm;
