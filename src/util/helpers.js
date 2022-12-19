import moment  from "moment/moment";


const convertDateToOurFormat = (date) => {
    if(date){
        return moment(date).format('MM-DD-YYYY')
    }
    return; 
}


export  const helpers = {
    convertDateToOurFormat
} 