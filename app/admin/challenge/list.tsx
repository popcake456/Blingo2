import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

export const ChallengeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit" sx={{ "& .RaDatagrid-rowCell": { minWidth: 200 } }}>
        <NumberField source="id" />
        <TextField source="question" sx={{ minWidth: 250 }} />
        <SelectField
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
          ]}
          sx={{ minWidth: 200 }}
        />
        <ReferenceField
          source="lessonId"
          reference="lessons"
          sx={{ minWidth: 250 }}
        />
        <NumberField source="order" sx={{ minWidth: 100 }} />
      </Datagrid>
    </List>
  );
};