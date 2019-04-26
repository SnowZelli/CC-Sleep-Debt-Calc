const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day) {
      case 'monday':
      return 7;
      break;
      case 'tuesday':
      return 6.5;
      break;
      case 'wednesday':
      return 7;
      break;
      case 'thursday':
      return 6.5;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 8;
      break;
      default:
      return 'Error';
    }
  };

const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');

const getIdealSleepHours = idealHours => idealHours * 7;
;

const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(7.5);
    if(actualSleepHours === idealSleepHours) {
        console.log(`You got a healthy amount of sleep this week!`);
    } else if(actualSleepHours < idealSleepHours) {
        console.log(`Your sleep debt is ${idealSleepHours - actualSleepHours} hours this week. Sleep some more!`);
    } else if(actualSleepHours > idealSleepHours) {
        console.log(`You slept ${actualSleepHours - idealSleepHours} more hours than you planned. Good job!`)
    } else {
        console.log (`Error!`);
    }
};

calculateSleepDebt();