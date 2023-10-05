import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";

import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import FormRowLabel from "../../ui/FormRowLabel";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdateUserDataForm() {
  const { updateUser, updating } = useUpdateUser();
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email = "",
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName)
      updateUser(
        { fullName, avatar },
        {
          onSuccess: () => {
            setAvatar(null);
            e.target.reset();
          },
        }
      );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowLabel label="Email address">
        <Input value={email} disabled />
      </FormRowLabel>
      <FormRowLabel label="Full name">
        <Input
          type="text"
          value={fullName}
          disabled={updating}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRowLabel>
      <FormRowLabel label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          disabled={updating}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRowLabel>
      <FormRowLabel>
        <Button
          disabled={updating}
          type="reset"
          variation="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={updating}>
          {updating ? <SpinnerMini /> : "Update account"}
        </Button>
      </FormRowLabel>
    </Form>
  );
}

export default UpdateUserDataForm;
