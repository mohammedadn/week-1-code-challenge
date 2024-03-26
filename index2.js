function speedDetector (speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;
    // Check if the driver  more than 12 demerits if yes, it will return License suspended

  const maxDemerit = 12;
// Check if the speed is less than 70
  if (speed < speedLimit +  kmPerDemerit) {
      console.log("ok");
      return "ok";
  }
   //   if speed is 70 or below, it will return ok

  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit)
// Calculate the number of demerits using Math.floor
  if (demeritPoints > maxDemerit) {
      console.log('license suspended');
      // for every 5km/s above the speed limit, one demerit point is executed
  }else {
      console.log('points' + demeritPoints);
  }


}
// Check the speed

speedDetector(62);
speedDetector(42);
speedDetector(82);
speedDetector(100);
speedDetector(122);
speedDetector(227);
speedDetector(140);









  

