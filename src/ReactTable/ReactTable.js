import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Spinner, Button } from "reactstrap";
function Table({ loading, columns, data, size }) {
  console.log("table", data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    nextPage,

    previousPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,

      initialState: { pageSize: size ? size : 10, pageIndex: 0 },
    },

    useSortBy,
    usePagination
  );

  return (
    <>
      <div style={{ height: "500px" }} className="pt-1 pb-5">
        <table {...getTableProps()} className="rt-table ">
          <thead className="rt-thead -header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                {headerGroup.headers.map((column, key) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="rt-resizable-header-content heading">
                      {column.render("Header")}
                    </div>

                    <div className="input">
                      {headerGroup.headers.length - 1 !== key &&
                      column.canFilter
                        ? column.render("Filter")
                        : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <div className="progress"> {loading && <Spinner size={30} />}</div>
          <tbody {...getTableBodyProps()} className="rt-tbody">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <div className="d-flex justify-content-between fixed-bottom ">
            <div className="-previous">
              <Button
                type="button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="-btn"
              >
                Previous Page
              </Button>
            </div>

            <div className="-next">
              <Button
                type="button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="-btn"
              >
                Next page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

export default Table;
