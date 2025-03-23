import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <ReferenceField 
          source="unitId" 
          reference="units" 
          sx={{ minWidth: 300 }}
        />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
