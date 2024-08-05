import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="mohamed" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="ahmed"
        />
        <FormRow type="text" name="location" defaultValue="cairo" />
        <FormRow type="email" name="email" defaultValue="mohamed@mohamed.com" />
        <FormRow type="password" name="password" defaultValue="123456" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
