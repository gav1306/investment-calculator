const UserInputs = ({ onChange, input }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInputs;
