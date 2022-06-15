import TableHead from './components/TableHead/TableHead';
import TableItems from './components/TableItems/TableItems';

function Table() {
  const data = [
    {
      location: 'Aalscholver',
      id: 112233,
      noChargers: 5,
      country: 'NLD',
      lastUpdated: '5 months ago',
      chargers: 2
    },
    {
      location: 'Aalscholver',
      id: 112244,
      noChargers: 5,
      country: 'NLD',
      lastUpdated: '5 months ago',
      chargers: 5
    }
  ];
  return (
    <>
      <TableHead />
      <TableItems locations={data} />
    </>
  );
}

export default Table;
