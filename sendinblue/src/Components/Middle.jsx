

function BasicExample() {
  return (
    <div style={{marginTop: "50px" }}>
      <div style={{ width: "400px", marginLeft: "200px", lineHeight: "60px" ,fontWeight:"bold"}}>
        <h1 style={{ fontSize: "60px",color:"#091E3F" }}>Get personal with your customers.</h1>
      </div>
      <div style={{ width: "400px", marginLeft: "200px" ,marginTop:"20px" }} >
        <p style={{ fontSize: "20px" ,color:"#0606469",fontFamily:"OpenSans-Regular" }}>
          Keep your growing audience engaged by always sending the perfect
          message at the right time, in the right place.
        </p>

      </div>
      <div style={{ width: "400px", marginLeft: "200px" ,marginTop:"30px" }}>
        <button style={{borderRadius:"25px",padding:"10px 20px",backgroundColor:"#0092FF",border:"none"}}>Take a free test drive!</button>
      </div>
      <div>
        <video autoPlay>
            <source src="https://youtu.be/SO534nXDFQQ" type="video/mp4"/>
        </video>
        </div>
    </div>
   
  );
}

export default BasicExample;
