import {UserTypes, Sales} from './data.json';
const data = {UserTypes, Sales}

export const getData = (chartName) =>{
    return data[chartName];
}
// [{"x":1, "y":2} ,{"x":5, "y":12} ,{"x":1, "y":7}],