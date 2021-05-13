export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((x, y) => {
         return x.cases >  y.cases ? -1 : x.cases  < y.cases ? 1 : 0;
        // return x.cases > y.cases ? -1 : 1;
    })
    return sortedData;
}