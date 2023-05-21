import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetSeatTwoWayApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("Seat/two-way");
    return res.data;
}

export {UseGetSeatTwoWayApi};
