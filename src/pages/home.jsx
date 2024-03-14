const Home = ({ children }) => {
  const containerStyle = {
    marginTop: "30cm",
    width: "100%",
    background: "transparent",
    border: "none",
  };
  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="row d-flex align-items-center justify-content-around">
          {children}
        </div>
      </div>
    </>
  );
};
export default Home;
