var mycountdownFunc = setInterval(function () {
    var now = new Date().getTime();
    var remainingTime = new Date("AUGUST 15, 2024 12:00:00").getTime() - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = ""
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "TIME UP!!!"
    }
    }, 1000 );