import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" fullWidth />
        <SelectInput
          source="type"
          validate={[required()]}
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
          ]}
          fullWidth
        />
        <ReferenceInput source="lessonId" reference="lessons" fullWidth />
        <NumberInput source="order" validate={required()} label="Order" fullWidth />
      </SimpleForm>
    </Create>
  );
};
