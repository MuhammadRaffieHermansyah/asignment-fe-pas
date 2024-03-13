const Home = ({ children, movies }) => {
  const containerStyle = {
    marginTop : "30cm",
    width: "100%",
    background : "transparent",
    border : "none"
  };
  const rowStyle = {
    // display : "flex",
    // alignItems : "center",
    // justifyContent : "center",
    // marign : "10px auto"
  }
  return (
    <>
    <div className="container" style={containerStyle}>
      <div className="row" style={rowStyle}>{children}</div>
    </div>
    </>
  );
};
export default Home;
