function removeDuplicates(data) {
    let uniQ = data.filter((item,
        index) => data.indexOf(item) === index);
    return uniQ
}

module.exports={removeDuplicates}
