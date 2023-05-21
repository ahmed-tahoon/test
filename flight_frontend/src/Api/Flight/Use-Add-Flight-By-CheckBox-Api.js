import BaseUrl from '../../BaseUrl/BaseUrl'


const UseAddFlightByCheckBoxtData = async (formdata) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.post(`users/${formdata.id}/country`,formdata.data);
    return res.data;
}

export {UseAddFlightByCheckBoxtData };
