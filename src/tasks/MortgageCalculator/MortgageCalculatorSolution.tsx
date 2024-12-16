import { ChangeEvent, useState } from "react";

export const MortgageCalculatorSolution = () => {
  const [fields, setFields] = useState({
    loanAmount: 1000,
    loanTerm: 10,
    interestRate: 7,
  });
  const { loanAmount, loanTerm, interestRate } = fields;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalPayment = monthlyPayment * totalPayments;

  const totalInterest = totalPayment - loanAmount;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: +e.target.value,
    }));

  return (
    <div>
      <form
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label htmlFor="loan-amount">Loan amount ($)</label>
          <input
            value={fields.loanAmount}
            defaultValue={1000}
            min={1}
            type="number"
            id="loan-amount"
            name="loanAmount"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label htmlFor="loan-term">Loan term (years)</label>
          <input
            value={fields.loanTerm}
            defaultValue={10}
            min={1}
            type="number"
            id="loan-term"
            name="loanTerm"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label htmlFor="interest rate">Interest rate (%)</label>
          <input
            value={fields.interestRate}
            min={1}
            defaultValue={7}
            type="number"
            id="interest-rate"
            name="interestRate"
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <p>Monthly mortgage payment: {monthlyPayment.toFixed(2)}$</p>
        <p>Total payment amount: {totalPayment.toFixed(2)}$</p>
        <p>Total interest paid: {totalInterest.toFixed(2)}$</p>
      </div>
    </div>
  );
};
