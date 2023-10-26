import "./rows.styles.css";

import { dateArray } from "../utils/data";

import Columns from "../columns/columns.component";

const Rows = ({ roomBookingData }) => {
  return (
    <div className="row-container">
      {dateArray.map((date) => (
        <Columns
          key={date}
          roomBookingData={roomBookingData}
          date={parseInt(date.slice(0, 2))}
        />
      ))}
    </div>
  );
};

export default Rows;
