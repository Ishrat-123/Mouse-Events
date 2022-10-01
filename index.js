const containerEl = document.querySelector(".container");
/*querySelector() method returns the first element that matches a
  CSS selector. */

window.addEventListener("mousemove",
(event) =>{
   containerEl.innerHTML = `
   <div class="mouse-event" >
   ${event.clientX}
   <h4>Mouse X Position(px)</h4>
    </div>
    <div class="mouse-event" >
    ${event.clientY}
   <h4>Mouse Y Position(px)</h4>
</div>
   `
})