import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

const Label = styled.label`
  font-weight: 500;
`;

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { createCabin, isCreating } = useCreateCabin();

  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isCreating || isEditing;

  // const onSubmit = (data) => ;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabin: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  const onError = (errors) => console.log(errors);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow error={errors?.name?.message}>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message}>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.regularPrice?.message}>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The price should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.discount?.message}>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message}>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isCreating && "Adding..."}

          {!isCreating && !isEditSession && "Create new cabin"}
          {isEditing && "Editing.."}
          {isEditSession && !isEditing && "Edit cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
