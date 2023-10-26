import "./cell.styles.css";

const Cell = ({ room, date, roomBookingData }) => {
  let name = "";
  if (
    roomBookingData[date] !== undefined &&
    roomBookingData[date][room] !== undefined
  ) {
    name = roomBookingData[date][room][0];
  }

  return (
    <div className="cell-container">
      <span>{name}</span>
    </div>
  );
};

export default Cell;
