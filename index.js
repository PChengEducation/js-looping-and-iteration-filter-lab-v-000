// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driverName){
    return name.toLowerCase() === driverName.toLowerCase()
  });
};

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(driverName){
    return driverName.slice(0, letters.length) === letters;
  });
};

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name
  });
};