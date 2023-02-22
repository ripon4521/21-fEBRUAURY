/* change and update camera movements
   such as transform, rotate, scale.
 */
function apply(i, o, u) {
  var output;
  if (u) {
    output = i.value + (u + "");
  } else {
    output = Number(i.value);
  }
  document.documentElement.style.setProperty(o, output);
  i.nextElementSibling.innerHTML = output;
}

window.addEventListener("load", function () {
  // apply default values
  apply(z_axis, "--z", "deg");
  apply(perspective, "--p", "px");
});
