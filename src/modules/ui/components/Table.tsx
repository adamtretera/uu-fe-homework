import { styled } from "styles";

const TableStyled = styled("table", {
  margin: 0,
  width: "100%",
  borderCollapse: "collapse",
});

const Tr = styled("tr", {
  borderBottom: "2px solid black",
});

const Td = styled("td", {
  border: "2px solid black",
  padding: "1rem",

  height: "1rem",
});

const Th = styled("th", {
  padding: "1.2rem",
  backgroundColor: "$tableBackgroundColor",
  textAlign: "left",
  border: "2px solid black",

  height: "1rem",
});

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
};

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>): JSX.Element => {
  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((item) => (
            <Th key={`row-${item.key.toString()}`}>{item.header}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <Tr key={`row-${index}`}>
              {columns.map((column, index2) => (
                <Td key={`cell-${index2}`}>
                  <>{row[column.key]}</>
                </Td>
              ))}
            </Tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default Table;
