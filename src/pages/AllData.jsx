import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalStore from "../components/ModalStore";

const AllData = ({ children, onRefresh }) => {
  const TableStyle = {
    margin: "0px auto",
    width: "1200px",
  };
  const ButtonStyle = {
    marginTop: "100px",
  };
  const [showStore, setShowStore] = useState(false);

  const modalStoreShow = () => {
    setShowStore(true);
  };
  const modalStoreClose = () => setShowStore(false);

  return (
    <>
      <div className="" style={ButtonStyle}>
        <Button
          variant="success"
          onClick={() => {
            modalStoreShow();
          }}
        >
          Add Data
        </Button>
      </div>
      <table className="table table-striped table-hover" style={TableStyle}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Duration</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <ModalStore
        show={showStore}
        onHide={modalStoreClose}
        onRefresh={onRefresh}
      />
      ;
    </>
  );
};
export default AllData;
