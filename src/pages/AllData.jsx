const AllData = ({children}) => {
    return (
        <>
        <table className="table table-striped table-hover m-5">
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
        </>
    )
}
export default AllData