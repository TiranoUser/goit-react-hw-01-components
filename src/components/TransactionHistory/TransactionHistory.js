import {
  SectionTable,
  Table,
  TableHead,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ deals }) => {
  return (
    <SectionTable>
      <Table>
        <thead>
          <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
          </tr>
        </thead>
        <tbody>
          {deals.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </SectionTable>
  );
};

// <tr>
//   <td>Invoice</td>
//   <td>125</td>
//   <td>USD</td>
// </tr>
// <tr>
//   <td>Withdrawal</td>
//   <td>85</td>
//   <td>USD</td>
// </tr>
