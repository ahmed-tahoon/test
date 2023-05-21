import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetcountryNavBarApi = async ({queryKey}) => {
    const [id,_]=queryKey
    console.log(id);
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get(`users/${id}/all-countries`);
    return res.data;
}

export {UseGetcountryNavBarApi};
