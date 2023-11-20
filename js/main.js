(() => {

  //variables
  const model = document.querySelector("#model");
  let spinner = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`;
  //     <template id="hotspot-template">
  //       <div class="TemplateHotspotAnnotation">
  //         <h3 class="hotspot-heading"></h3>
  //         <p class="hotspot-description"></p>

  // const hotspots = document.querySelectorAll(".Hotspot");
  // const hotspotTemplate = document.querySelector("#hotspot-template");


  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  function loadMaterialInfo() {
    //make ajax call
    //this will be place inside a promise/ .then()
      fetch("https://swiftpixel.com/earbud/api/materials")
        .then(response => response.json())
        .then(materials => {
          // console.log(materials);
        
        materials.forEach(material => {
        //make a copy of the template
        const clone = materialTemplate.content.cloneNode(true);

        //fill the template
        const materialHeading = clone.querySelector('.material-heading');
        materialHeading.textContent = material.heading;

        const materialDescription = clone.querySelector('.material-description');
        materialDescription.textContent = material.description;

        //append the populated template to the ul
        materialList.appendChild(clone);
        });
      })
      .catch(error => {
        console.error(error); //catch and report any errors
        alert("Oops, something went wrong. Please try again later.");
      })
  }

  loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();