import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';
const ROOT_URL = 'https://api.indeed.com/ads/apisearch?';
const QUERY_PARAMS = {
    publisher: '9187345048530956',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q : 'javascript'
};

const buildUrl = (zip)=>{
    const query = qs.stringify({...QUERY_PARAMS, l: zip})
    return `${ROOT_URL}${query}`;
     
}
export const fetchJobs = (region) => async dispatch => {
    try{
        let zip = await reverseGeocode(region);
        const url = buildUrl(zip);
        let { data }= await axios.get(url);
        dispatch ({type: FETCH_JOBS, payload: data});
        console.log(data)
    }catch(e){
        console.error(e);
    }

};