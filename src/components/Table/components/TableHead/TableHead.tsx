import './styles.css';

function TableHead({ data, width }: Props) {
  return (
    <div style={{ width }} className="table-head-con">
      {data.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <p className="table-head-action">Actions</p>
    </div>
  );
}

interface Props {
  data: Array<string>;
  width?: string;
}

export default TableHead;
