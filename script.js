var tl = gsap.timeline();

tl.from('.heart-img1',{
  duration: 2,
  width: 0,
  ease: 'ExpoeaseInOut',
  opacity: 0

},'-+=0.5')

tl.from('.black-imgbich',{
  duration: 2,
  width: 0,
  ease: 'ExpoeaseInOut',
  opacity: 0

},'-+=0.9')

tl.from('.heart-img2',{
  duration: 2,
  width: 0,
  ease: 'ExpoeaseInOut',
  opacity: 0

},'-+=1.2')







// -----------------------------------
var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")


main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"

    cursor.style.top = dets.y + "px"

})
