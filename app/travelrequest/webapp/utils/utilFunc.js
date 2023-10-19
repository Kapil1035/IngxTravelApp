sap.ui.define([
  "sap/ui/core/format/NumberFormat"], function (NumberFormat) {
"use strict";
return {
  myFormatterFunction: function (inp) {
    if (inp) {
      return inp.toUpperCase();
    }
  },

  formatCurrency: function (amount, currCode) {
    var oCurrencyFormat = NumberFormat.getCurrencyInstance();

     return oCurrencyFormat.format(amount, currCode); // output: EUR 12,345.68
  },
  convertDate: function (mmddyyDate) {
    // Split the input date string into components
    const components = mmddyyDate.split('/');
  
    // Ensure that the components array has exactly three elements
    if (components.length !== 3) {
      return "Invalid Date";
    }
  
    // Extract month, day, and year
    const month = parseInt(components[0]);
    const day = parseInt(components[1]);
    let year = parseInt(components[2]);
  
    // Adjust the year if necessary (assuming the year is within a certain range)
    if (year < 100) {
      // Convert two-digit year to four-digit year (adjust the range as needed)
      if (year >= 0 && year <= 29) {
        year += 2000;
      } else {
        year += 1900;
      }
    }
  
    // Create a Date object with the parsed components
    const date = new Date(year, month - 1, day+1);
  
    // Format the date to "yyyy-MM-dd"
    const formattedDate = date.toISOString().split('T')[0];
  
    return formattedDate;
  }
};
});





  
  // Example usage:
//   const mmddyyDate = "10/17/21"; // Sample date in "mm/dd/yy" format
//   const convertedDate = convertDate(mmddyyDate);
//   console.log(convertedDate); // Output: "2021-10-17"


  