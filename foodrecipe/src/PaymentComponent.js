import React, { useState } from 'react';

const PaymentComponent = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('creditCard'); // Default method
  const [otp, setOtp] = useState(''); // State for OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // State to track if OTP has been sent

  const handlePayment = () => {
    // Perform payment processing logic here based on the selected method
    // For credit card, simulate sending OTP
    if (selectedMethod === 'creditCard') {
      console.log('Payment details submitted:', cardNumber, expiryDate, cvc);
      setIsOtpSent(true); // Simulate OTP sent
    }
  };

  const handleOtpSubmit = () => {
    // Simulate OTP verification
    console.log('OTP submitted:', otp);
    // If OTP is correct, proceed with payment
    alert('Successful payment done'); // Show success message
    setIsOtpSent(false); // Reset OTP sent state
  };

  return (
    <div>
      <h2>Choose Payment Option</h2>
      <div>
        <label>Payment Method:</label>
        <select value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="phonepee">PhonePe</option>
          <option value="googlepay">Google Pay</option>
          <option value="paytm">Paytm</option>
          {/* Add more payment methods as needed */}
        </select>
      </div>
      {selectedMethod === 'creditCard' && (
        <>
          <div>
            <label>Card Number:</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </div>
          <div>
            <label>CVC:</label>
            <input type="text" value={cvc} onChange={(e) => setCVC(e.target.value)} />
          </div>
          {!isOtpSent ? (
            <button onClick={handlePayment}>Proceed to Payment</button>
          ) : (
            <>
              <div>
                <label>Enter OTP:</label>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <button onClick={handleOtpSubmit}>Submit OTP</button>
            </>
          )}
        </>
      )}
      {/* Add other payment methods' input fields here */}
    </div>
  );
};

export default PaymentComponent;
