import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const input = document.querySelector('#datetime-picker')

input.addEventListener('click', onclick)







// flatpickr(selector, options)

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };