export const Application = () => {
  return (
    <>
      <h1> Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select A Country</option>
            <option value="US">United States</option>
            <option value="GB">United kingdom</option>
            <option value="CD">Canada</option>
            <option value="AU">Australia</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" /> I agree to terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
