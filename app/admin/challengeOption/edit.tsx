import {
  BooleanInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" fullWidth />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" fullWidth />
        <TextInput source="imageSrc" label="Image URL" fullWidth />
        <TextInput source="audioSrc" label="Audio URL" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
