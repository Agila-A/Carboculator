import regimg from '../../assets/RegistrationPage/Regpage2.png';

const RegistrationPage1 = () => {
  const inputContainerStyle = { margin: "10px 20px" };

  const inputStyle = {
    width: "100%",
    paddingLeft: "2.5rem",
    padding: "0.7rem",
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    outline: "none",
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", margin: 0, padding: 0, backgroundColor: "rgba(239, 255, 252, 1)" }}>

      {/* Left Side Form */}
      <div style={{ width: "50vw", height: "100vh", justifyItems: "center",alignContent:"center" }}>
        
        <div style={{ margin:"30px",backgroundColor: "white", width: "40vw", height: "80vh", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",borderRadius:"10px" }}>
          <h1 style={{ textAlign: "center",paddingTop:"30px" , fontSize: "30px", fontWeight: 700, color: "black"}}>
          REGISTRATION
          </h1>
          <p style={{ paddingLeft:"10px",fontWeight: 500, fontSize: "20px",margin: "13px",color: "rgb(170, 179, 191)"}}>   
            USER DETAILS
          </p>

          {/* Input Fields */}
          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Your Name" />
          </div>

          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter Your Email" />
          </div>

          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter Your Phone Number" />
          </div>

          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Your Company Name" />
          </div>

          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter Your Password" />
          </div>

          <div style={inputContainerStyle}>
            <input className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Your Role" />
          </div>

          <div style={inputContainerStyle}>
            <button style={{
              padding: "10px 30px 10px 30px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
              marginLeft:"490px"
              
            }}>
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div style={{ width: "50vw", height: "100vh" ,}}>
        <img src={regimg} alt="Registration Visual" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

    </div>
  );
};

export default RegistrationPage1;
