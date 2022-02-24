function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber > 42) {
    return streetNumber - 42;
  }
  else { 
    return 42 - streetNumber;
  }
} 

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  if (street1 > street2) {
    return (street1 - street2) * 264;
  }
  else { 
    return (street2 - street1) * 264;
  }
}

function calculatesFarePrice(street1, street2) {

  let distance = distanceTravelledInFeet(street1, street2);

  if (distance <= 400) {
   return 0;
  } 
  else if (distance > 400 && distance < 2000) {
    return ((2 * distance) - 800) / 100;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  } 
  else {
    return 'cannot travel that far';
  }
}