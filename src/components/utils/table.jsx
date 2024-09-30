import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";

function TableComponent({ columns,data }) {
  // Initialize pageIndex state
  const [pageIndex, setPageIndex] = useState(0);

  // Unconditionally use the useTable and usePagination hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of rows, use page to display only the current page's rows
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex: currentPageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex }, // Set initial page index
    },
    usePagination
  );

  // Handle loading or missing data
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the table */}
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  key={column.id}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination mt-4 flex items-center justify-between">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Previous
        </button>
        <span className="text-sm">
          Page{" "}
          <strong>
            {currentPageIndex + 1} of {Math.ceil(data.length / 10)}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TableComponent;
