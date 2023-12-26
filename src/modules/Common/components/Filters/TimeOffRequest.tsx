const TimeOffRequest = (props:any) => {

    //Dispute Type Filter 
    const filterRequest = (e: any) => {
        const filterRequestData = props.data.filter((curElem:any) => {
            return curElem.Request_type === e;
        })
        props.setData(filterRequestData);
    }

    return (
        <>
            <select className="selectFilter">
                <option onClick={() => props.setData(props.data)}>All Request</option>
                <option onClick={() => filterRequest("Paid Time Off")}>Paid Time Off</option>
                <option onClick={() => filterRequest("Unpaid Time Off")}>Unpaid Time Off</option>
            </select> 
        </>
    );

}

export default TimeOffRequest;
