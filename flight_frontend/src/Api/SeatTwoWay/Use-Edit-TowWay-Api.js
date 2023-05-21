import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeTowWayData = async (formdata) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }http://64.226.73.12/api/seat/1/twoway
    const res = await BaseUrl.patch(`seat/${formdata.idapi}/twoway`,formdata.data);
    return res.data;
}

export {UseEditeTowWayData };
