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
          <img src="${student.Image}" alt="Student Name">
          <header> ${student.Name} </header>
          <p> <span> Emoji: </span> ${student.Emoji} </p>
          <p> <span> Quote: </span> ${student.Quote} </p>
          <p> <span> Superpower: </span> ${student.Superpower} </p>
          <p> <span> Favorite Color: </span> ${student.Color} </p>
        </figure>
        `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });