//Need to create Variables
//Need to create Functions
//Need a way to input text on certain hours
//Need a way to change the text input 
//Need to create Special Functions
//+/- Logic

$(document).ready(function () {
  //save button and local storage
  $('.saveBtn').on('click', function () {
    let value = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
    $('.notification').removeClass('hide');
    $('.notification').addClass('show');
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  })
  //get current hours loop time blocks and check if have moved past current time block
  function hourUpdate() {
    let curretHour = moment().hours();
    $('.time-block').each(function () {
      let hourBlock = parseInt($(this).attr('id').split('-')[1]);

    if (hourBlock < curretHour) {
      $(this).addClass('previous');
    } else if (hourBlock === curretHour) {
      $(this).removeClass('previous');
      $(this).addClass('current');
    } else {
      $(this).removeClass('previous');
      $(this).removeClass('current');
      $(this).addClass('toBe');
    }
    });
  }
  hourUpdate();
  const clock = setClock(hourUpdate, 15000);
  //display current day
  $('#currentday').text(moment().format('dddd, MMMM Do'));
  //load saved data from local storage
  $('#hour07 .description').val(localStorage.getItem('hour07'));
  $('#hour08 .description').val(localStorage.getItem('hour08'));
  $('#hour09 .description').val(localStorage.getItem('hour09'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  $('#hour18 .description').val(localStorage.getItem('hour18'));
  $('#hour19 .description').val(localStorage.getItem('hour19'));
});

