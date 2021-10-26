module.exports = {
  logStart() {
    console.log('Bot has been satarted ....');
  },
  sortStringsFromObj(arrOfObjects, key) {
    arrOfObjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  },
  getCurrentDateAndTime() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + Math.abs(date.getTimezoneOffset()));
    return date;
  }
};
