import "./columns.styles.css";
import Cell from "../cell/cell.component";
import { roomsArray } from "../utils/data";

const Columns = ({ date, roomBookingData }) => {
  return (
    <div className="column-container">
      {roomsArray.map((room) => {
        return (
          <Cell roomBookingData={roomBookingData} room={room} date={date} />
        );
      })}
    </div>
  );
};

export default Columns;
