export const convertDateToUnixTimesStamp = (date) => Math.floor(date.getTime() / 1000)

export const convertUnixTimesStampToDate = (unixTimesStamp) => { 
    const miliseconds = unixTimesStamp / 1000;
    return new Date(miliseconds).toLocaleDateString()
}

export const createDate = (date, days, weeks, months, years ) => { 
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
}