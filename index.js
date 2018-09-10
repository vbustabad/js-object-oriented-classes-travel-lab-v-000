class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear() - 1);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

//   blocksTravelled() {
//     return ((`${this.beginningLocation.horizontal}` - `${this.endingLocation.horizontal}`) + (`${this.beginningLocation.vertical}` - `${this.endingLocation.vertical}`));
//   }
//
//   estimatedTime() {
//     return ;
//   }
// }
