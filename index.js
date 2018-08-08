// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driverName){
    return name.toLowerCase() === driverName.toLowerCase()
  });
};