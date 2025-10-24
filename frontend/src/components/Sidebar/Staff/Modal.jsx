import React from "react";

const Modal = ({ isVisible, onClose, lastTransaction }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <div className="success-icon">✅</div>
          <h3 className="success-title">Payment Successful!</h3>
          <p className="success-amount">
            Total:{" "}
            <span className="amount">
              ₱{lastTransaction.total_payment?.toFixed(2)}
            </span>
          </p>
          <button onClick={onClose} className="continue-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
