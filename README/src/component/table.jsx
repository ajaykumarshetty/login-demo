const Table = ({ headers, tableData }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {headers.map((data, i) => (
              <th key={data.title + i}>{data.title}</th>
            ))}
          </tr>

          {tableData.map((table, i) => (
            <tr key={table.id + i}>
              {headers.map((data2, j) => (
                <td key={data2.accessor + j}>{table[data2.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
