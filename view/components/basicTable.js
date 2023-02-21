import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { COLUMNS, IF_ung_vien } from "../data/info_uv";
export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => IF_ung_vien, [IF_ung_vien]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  // console.log(data);
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  cursor: pointer;
  td,
  th {
    border: 1px solid #ddd;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #6f7e98;
    color: white;
  }
  td {
    font-size: var(--font-medium);
  }
`;
