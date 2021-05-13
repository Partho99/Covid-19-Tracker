export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((x, y) => {

      /*  No, -1, 0, and 1 in a comparison function are used to tell the caller how the first value should be sorted in relation to the second one.
        -1 means the first goes before the second, 1 means it goes after, and 0 means they're equivalent.
        The sort function uses the comparisons in the function you pass it to sort the function.
        For instance, if you wanted to sort in reverse order, you could make line 3 return 1; and line 5 return -1.
      */

         return x.cases <  y.cases ? 1 : x.cases  > y.cases ? -1 : 0;
        // return x.cases > y.cases ? -1 : 1;
    })
    return sortedData;
}