import React, { useState } from 'react';
import '../styles/MortgageCalculator.css';

const MortgageCalculator: React.FC = () => {
    const [price, setPrice] = useState(300000);
    const [downPayment, setDownPayment] = useState(60000);
    const [years, setYears] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);

    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
        loanAmount > 0
            ? (loanAmount *
                monthlyRate *
                Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
            : 0;

    return (
        <div className="calculator-container">
            <h2>Mortgage Calculator</h2>
            <div className="calculator-form">
                <label>
                    Home Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    />
                </label>
                <label>
                    Down Payment:
                    <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(+e.target.value)}
                    />
                </label>
                <label>
                    Loan Term (Years):
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(+e.target.value)}
                    />
                </label>
                <label>
                    Interest Rate (%):
                    <input
                        type="number"
                        step="0.01"
                        value={interestRate}
                        onChange={(e) => setInterestRate(+e.target.value)}
                    />
                </label>
            </div>

            <div className="result">
                <p>
                    Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong>
                </p>
            </div>
        </div>
    );
};

export default MortgageCalculator;
