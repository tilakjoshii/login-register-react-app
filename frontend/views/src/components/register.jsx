import {useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import '../assets/css/register.css';
// import User from '../../../../backend/models/registerUser';

function Register() {
   const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = userData;

    try {
      const res = await fetch("/backend/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      // Check the response data for success or specific error messages
      if (data.status === 422 || !data) {
        throw new Error(data.message);
      }

      // Registration successful
      window.alert('Registered Successfully!');
      navigate("/login");
    } catch (error) {
      console.error("Error in postData:", error.message);
      window.alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="wrapper">
        <h2>Registration</h2>
        <form  method='post'>
          <div className="input-box">
            <input type="text" name='name' placeholder="Enter your name" required 
            value={userData.name}
            onChange={handleInputs}/>
          </div>
          <div className="input-box">
            <input type="text" name='email' placeholder="Enter your email" required 
            value={userData.email}
            onChange={handleInputs}/>
          </div>
          <div className="input-box">
            <input type="password" name='password' placeholder="Create password" required 
            value={userData.password}
            onChange={handleInputs}/>
          </div>
          <div className="input-box">
            <input type="password" name='cpassword' placeholder="Confirm password" required 
            value={userData.cpassword}
            onChange={handleInputs}/>
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button" onClick={postData}>
            <input type="submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
