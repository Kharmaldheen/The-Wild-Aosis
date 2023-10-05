import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowLabel from "../../ui/FormRowLabel";

function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { updateUser, updating } = useUpdateUser();

  function onSubmit({ password }) {
    console.log(password);
    updateUser({ password }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowLabel
        label=" New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={updating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowLabel>

      <FormRowLabel
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={updating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRowLabel>
      <FormRowLabel>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={updating}>
          {updating ? <SpinnerMini /> : "Update password"}
        </Button>
      </FormRowLabel>
    </Form>
  );
}

export default UpdatePasswordForm;
