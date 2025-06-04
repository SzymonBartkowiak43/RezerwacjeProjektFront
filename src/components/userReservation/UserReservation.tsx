import React, { useEffect, useState } from "react";
import {
  getUserReservations,
  deleteReservation,
  updateReservation,
  getNearest5Reservations,
} from "../../Services/reservationService";
import "./UserReservation.css";
import header from "../header/Header";
import { useToast } from "../toastContext/ToastContext";

const UserReservations = () => {
  const [reservations, setReservations] = useState<any[]>([]);
  const [selectedReservation, setSelectedReservation] = useState<any | null>(
    null
  );
  const [availableDates, setAvailableDates] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const toast = useToast();

  useEffect(() => {
    if (email && token) {
      fetchReservations();
    }
  }, [email, token]);

  const fetchReservations = () => {
    getUserReservations(email!, token!)
      .then((data) => setReservations(data))
      .catch((error) => console.error("Error fetching reservations:", error));
  };

  const handleDeleteReservation = (id: string) => {
    if (token && email) {
      deleteReservation(id, email, token)
        .then(() => {
          toast("Reservation deleted successfully.");
          fetchReservations();
          closeModal();
        })
        .catch((error) => console.error("Error deleting reservation:", error));
    }
  };

  const handleUpdateReservation = (newDateTime: string) => {
    if (!selectedReservation) return;

    const updatedData = {
      reservationId: selectedReservation.reservationId,
      newReservationDate: newDateTime,
    };

    updateReservation(updatedData)
      .then(() => {
        toast("Reservation updated successfully.");
        fetchReservations();
        closeModal();
      })
      .catch((error) => console.error("Error updating reservation:", error));
  };

  const fetchNearestAvailableDates = () => {
    if (selectedReservation) {
      getNearest5Reservations(selectedReservation.reservationId)
        .then((data) => setAvailableDates(data))
        .catch((error) =>
          console.error("Error fetching nearest dates:", error)
        );
    }
  };

  const openModal = (reservation: any) => {
    setSelectedReservation(reservation);
    setAvailableDates([]);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedReservation(null);
    setAvailableDates([]);
    setShowModal(false);
  };

  return (
    <div className="user-reservations">
      <h2>Your Reservations</h2>

      {reservations.length > 0 ? (
        <div className="reservations-grid">
          {reservations.map((reservation) => (
            <div key={reservation.reservationId} className="reservation-card">
              <h3>{reservation.salonName}</h3>
              <p>
                <strong>Employee:</strong> {reservation.employeeName}
              </p>
              <p>
                <strong>Service:</strong> {reservation.offerName}
              </p>
              <p>
                <strong>Date and Time:</strong>{" "}
                {new Date(reservation.reservationDateTime).toLocaleString()}
              </p>
              <button onClick={() => openModal(reservation)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No reservations found.</p>
      )}

      {/* MODAL */}
      {showModal && selectedReservation && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h3>Reservation Details</h3>
            <p>
              <strong>Salon:</strong> {selectedReservation.salonName}
            </p>
            <p>
              <strong>Employee:</strong> {selectedReservation.employeeName}
            </p>
            <p>
              <strong>Service:</strong> {selectedReservation.offerName}
            </p>
            <p>
              <strong>Date and Time:</strong>{" "}
              {new Date(
                selectedReservation.reservationDateTime
              ).toLocaleString()}
            </p>

            <div className="button-group">
              <button
                className="change-button"
                onClick={fetchNearestAvailableDates}
              >
                Change Date
              </button>
              <button
                className="cancel-button"
                onClick={() =>
                  handleDeleteReservation(selectedReservation.reservationId)
                }
              >
                Cancel Reservation
              </button>
            </div>

            {availableDates.length > 0 && (
              <div className="available-dates">
                <h4>Available Dates</h4>
                <div className="available-dates-grid">
                  {availableDates.map((date, index) => (
                    <div key={index} className="available-date-card">
                      <p>
                        {date.date} — {date.startServices} to {date.endServices}
                      </p>
                      <button
                        onClick={() =>
                          handleUpdateReservation(
                            `${date.date}T${date.startServices}`
                          )
                        }
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default header(UserReservations, "Rezerwacje");
