if (localStorage.getItem("tasks") == null) {
  localStorage.setItem("tasks", "[]");
}

// Click on Add Button -> Event Detection

$("#add").click(() => {
  var task = $("#my-task").val();

  var arr = JSON.parse(localStorage.getItem("tasks"));
  var date = sendDate();

  arr.push({ task, date });
  localStorage.setItem("tasks", JSON.stringify(arr));
  location.reload();
});

// Gets The Date

function sendDate() {
  const d = new Date();
  switch (d.getMonth()) {
    case 0:
      return `${d.getDate()} - January - ${d.getFullYear()}`;

    case 1:
      return `${d.getDate()} - February - ${d.getFullYear()}`;

    case 2:
      return `${d.getDate()} - March - ${d.getFullYear()}`;

    case 3:
      return `${d.getDate()} - April - ${d.getFullYear()}`;

    case 4:
      return `${d.getDate()} - May - ${d.getFullYear()}`;

    case 5:
      return `${d.getDate()} - June - ${d.getFullYear()}`;

    case 6:
      return `${d.getDate()} - July - ${d.getFullYear()}`;

    case 7:
      return `${d.getDate()} - August - ${d.getFullYear()}`;

    case 8:
      return `${d.getDate()} - September - ${d.getFullYear()}`;

    case 9:
      return `${d.getDate()} - October - ${d.getFullYear()}`;

    case 10:
      return `${d.getDate()} - November - ${d.getFullYear()}`;

    case 11:
      return `${d.getDate()} - December - ${d.getFullYear()}`;
  }
}

// Append The HTML Document

function addTask() {
  var arr = JSON.parse(localStorage.getItem("tasks"));

  if (arr.length == 0) return;

  // var id = 0;

  arr.forEach(() => {
    $("#home").append(
      `<div class="inner"><div class="date">${this.date}</div><br><p>${this.task}</p></div>`
    );
    id++;
  });
}
