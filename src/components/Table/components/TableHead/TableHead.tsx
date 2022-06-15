import './styles.css';

function TableHead() {
  const data = ['Location', 'Location No.', 'Chargers', 'Country', 'Last Updated', 'Actions'];
  return (
    <div className="table-head-con">
      {data.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default TableHead;
