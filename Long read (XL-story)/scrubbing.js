const section = document.querySelector('section.vid')
const vid = section.querySelector('video')

vid.pause()

const scroll = () => {
  const distance = window.scrollY - section.offsetTop
  const total = section.clientHeight - window.innerHeight

  let percentage = distance / total
  percentage = Math.max(0, percentage)
  percentage = Math.min(percentage, 1)

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage
  }
}

scroll()
window.addEventListener('scroll', scroll)

$(document).ready(function () {
  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});
