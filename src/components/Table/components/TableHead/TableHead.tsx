import './styles.css';

function TableHead({ data, width }: Props) {
  return (
    <div style={{ width }} className="table-head-con">
      {data.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

interface Props {
  data: Array<string>;
  width?: string;
}

export default TableHead;
