/**
 *  This is a quick and easy table component you may want to play with sometime. It can help you see some of the re-usability capabilities of React.
 *  This component will generate a table based on nothing but a JS config object. See the object below and then the table-generation code.
 */

const dataset = [
  { id: 1, title: "This is Product 1", size: "Large", color: "Red" },
  { id: 2, title: "This is Product 2", size: "Medium", color: "Blue" },
  { id: 3, title: "This is Product 3", size: "Small", color: "Green" },
  { id: 4, title: "This is Product 4", size: "XLarge", color: "Yellow" }
]

export default function TableMaker(){
  
  return (
    <table className="table">

      {/* iterate over all the key values in any single record to get the column names  */}
      <thead>
        <tr>
          { Object.keys(dataset[0]).map( (key) => (
            <th scope="col">{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* iterate over the dataset so we can create 1 row per object  */}
        { dataset.map( (row) => (
          <tr key={row.id}>
            {/* within each row, iterate over each key so we can get the column value  */}
            { Object.keys(row).map( (key) => (
              <td key={key}>
                <span>{row[key]}</span>
              </td>
            ))}

          </tr>
        ))}
      </tbody>

    </table>
  )

}