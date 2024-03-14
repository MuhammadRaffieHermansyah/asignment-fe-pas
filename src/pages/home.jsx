const Home = ({ children  }) => {
  const containerStyle = {
    marginTop : "30cm",
    width: "100%",
    background : "transparent",
    border : "none"
  };
  const rowStyle = {
    // display : "flex",
    // alignItems : "center",
    justifyContent : "space-around",
    // marign : "10px auto"
  }
  return (
    <>
    <div className="container" style={containerStyle}>
      <div className="row d-flex align-items-center justify-content-around" style={rowStyle}>{children}</div>
    </div>
    </>
  );
};
export default Home;
