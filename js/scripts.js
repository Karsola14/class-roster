// My Scripts


// Data source for roster of students
const url = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data);

    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
        <figure>
          <figcaption> ${student.Name} </figcaption>
          <img src="${student.Image}" alt="Student Name">
          <p> ${student.Emoji} </p>
          <p> ${student.Quote} </p>
          <p> ${student.Superpower} </p>
          <p> ${student.Color} </p>
        </figure>
        `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });