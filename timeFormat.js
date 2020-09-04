export function normalTime(dateObj){
    let hh = dateObj.getHours();
    let mm = dateObj.getMinutes();
    if(hh > 12){
      hh -= 12;
    }
    if(mm < 10){
      mm = '0'+ mm;
    }
    return `${hh}:${mm}`;
  }
