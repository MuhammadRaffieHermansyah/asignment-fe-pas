const AllData = ({children}) => {
    const TableStyle = {
        margin : "100px auto",
        width : "1200px",
    }
    return (
        <table className="table table-striped table-hover" style={TableStyle}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {children} 
            </tbody>
        </table>
    )
}
export default AllData