// import './dispute.css';

const AllRequest = (props:any) => {

    //Dispute Type Filter 
    const filterRequest = (e: any) => {
        const filterRequestData = props.data.filter((curElem:any) => {
            return curElem.status === e;
        })
        props.setData(filterRequestData);
    }

    return (
        <>
            <select className="selectFilter">
                <option onClick={() => props.setData(props.data)}>All Request</option>
                <option onClick={() => filterRequest("Pending")}>Pending</option>
                <option onClick={() => filterRequest("Approved")}>Approved</option>
                <option onClick={() => filterRequest("Reject")}>Reject</option>
            </select> 
        </>
    );

}

export default AllRequest;
