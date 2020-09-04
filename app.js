// import { normalTime }  from "./timeFormat";

const time = document.getElementById("time");
const zoltar = document.getElementById("give-zoltar-a-quarter");

zoltar.addEventListener("click", () => {
  const breakStart = new Date();
  const breakEnd = new Date(breakStart.getTime() + 15*60000);
  console.log(normalTime(breakStart));  
  time.textContent = normalTime(breakEnd);
});

function normalTime(dateObj){
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