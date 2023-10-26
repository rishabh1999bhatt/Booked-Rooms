import "./hotel-rooms.styles.css";
import { useState, useEffect } from "react";

import { roomsArray, dateArray, reservationData, rooms } from "./utils/data";

import Rows from "./rows/rows.component";

const HotelRooms = () => {
  const [roomBookingData, setRoomBookingData] = useState({});

  useEffect(() => {
    function parseDate(dateString) {
      const [day, month, year] = dateString.split("-");
      return new Date(`${month}-${day}-${year}`);
    }
    const bookingData = {};
    reservationData.forEach((reservation) => {
      const checkInDate = parseDate(reservation.checkIn);
      const checkOutDate = parseDate(reservation.checkOut);

      for (
        let currentDate = new Date(checkInDate);
        currentDate < checkOutDate;
        currentDate.setDate(currentDate.getDate() + 1)
      ) {
        const dateString = currentDate.toLocaleDateString();

        reservation.rooms.forEach((roomId) => {
          const room = rooms.find((r) => r.id === roomId);
          if (!bookingData[dateString.slice(3, 5)]) {
            bookingData[dateString.slice(3, 5)] = {};
          }
          if (!bookingData[dateString.slice(3, 5)][room.name]) {
            bookingData[dateString.slice(3, 5)][room.name] = [];
          }

          bookingData[dateString.slice(3, 5)][room.name].push(
            reservation.guestName
          );
        });
      }
    });
    setRoomBookingData(bookingData);
  }, []);

  return (
    <div className="hotel-rooms-container">
      <div className="dates-container">
        {dateArray.map((date) => (
          <div className="date-box" key={date}>
            {date}
          </div>
        ))}
      </div>
      <Rows roomBookingData={roomBookingData} />
      <div className="room-number-container">
        {roomsArray.map((room) => (
          <div className="date-box" key={room}>
            {room}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelRooms;
