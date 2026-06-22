type Props = {
  config: any[];
  data: any[];
};


const Table = ({config, data}: Props) => {
  const renderRows = data.map((company) => {
      return (
        <tr key={company.cik}>
          {config.map((val: any, index: number) => {
            return <td key={index} className="p-3">{val.render(company)}</td>;
          })}
          
        </tr>
      );
  });
  const renderedHeaders = config.map((config: any) => {
    return(
      <th className="p-4 text-lef text-xs font-medium text-fray-500 uppercase tracking-wider"
      key={config.label}>
        {config.label}
      </th>
    );
  })
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p -6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide+gray-200 m-5">{renderedHeaders}</thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  )
}

export default Table