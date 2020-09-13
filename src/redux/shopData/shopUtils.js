export const SelectCollection = (data, collection) => {
    return data.filter(item => item.collection === collection)
}