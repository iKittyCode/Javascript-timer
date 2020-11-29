
var timer_label = document.getElementById('timer')
var counter = 0
var time_left = 60

timer_label.innerHTML = time_left - counter 
var interval = setInterval(TickTock, 1000)
function TickTock() {
counter++

timer_label.innerHTML = time_left - counter
if (time_left - counter == 0) {
alert("Timer is over")

clearInterval(interval)

}
}
