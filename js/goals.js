const goal = [{
    text: ["Complete 2nd Code Louisville Advanced JavaScript Course", "Complete Intro VueJS Udemy Course", "Complete Intro PHP/Laravel Udemy Course", "Complete Human-Computer Interaction (UX) Course"],
    targetDate: ["April 2022", "April 2022", "May 2022", "Summer 2022"]
  }]
  
  const goals = document.getElementById("goals");

  goals.innerHTML =
  `<ul class="goallist">
    <li> <strong>Goal:</strong> ${goal[0].text[0]} <br> <strong>Target Date:</strong> ${goal[0].targetDate[0]}<li>
    <br>
    <li> <strong>Goal:</strong> ${goal[0].text[1]} <br> <strong>Target Date:</strong> ${goal[0].targetDate[1]}<li>
    <br>
    <li> <strong>Goal:</strong> ${goal[0].text[2]} <br> <strong>Target Date:</strong> ${goal[0].targetDate[2]}<li>
    <br>
    <li> <strong>Goal:</strong> ${goal[0].text[3]} <br> <strong>Target Date:</strong> ${goal[0].targetDate[3]}<li>
  </ul>`
