import { Table } from "modules/ui";
import { studentMockDataColumns, studentMockDataData } from "../mockData";

export const StudentsTable = () => (
  <Table columns={studentMockDataColumns} data={studentMockDataData} />
);
