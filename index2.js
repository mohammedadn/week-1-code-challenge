function lookSpeed(speed) {
    // Check if the speed is less than 70
    if (speed <= 70) {
      console.log("Ok");
    //   if speed is 70 or below, it will return ok
    } else {
      const demerits = Math.floor((speed - 70) / 5);
  // Calculate the number of demerits using Math.floor
      
  if (demerits > 12) {
        console.log("License suspended");
     // Check if the driver  more than 12 demerits if yes, it will return License suspended
     } else {
        console.log(`Points: $[demerits]`);
      }
    }
  }
//   for every 5km/s above the speed limit, one demerit point is executed
  
  const speed = parseInt(prompt("Look speed of the car: "));
  
  // Check the speed
  lookSpeed(112);
  console.log(lookSpeed(112))

  

