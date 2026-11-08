// Singer information stored in a JavaScript object (JSON-style data).
const singers = [
  {
    name: "Taylor Swift",
    song: "Love Story",
    dateOfBirth: "December 13, 1989",
    hometown: "West Reading, Pennsylvania"
  },
  {
    name: "The Weeknd",
    song: "Blinding Lights",
    dateOfBirth: "February 16, 1990",
    hometown: "Toronto, Canada"
  },
  {
    name: "Adele",
    song: "Rolling in the Deep",
    dateOfBirth: "May 5, 1988",
    hometown: "London, England"
  },
  {
    name: "Bruno Mars",
    song: "Just the Way You Are",
    dateOfBirth: "October 8, 1985",
    hometown: "Honolulu, Hawaii"
  },
  {
    name: "Ed Sheeran",
    song: "Shape of You",
    dateOfBirth: "February 17, 1991",
    hometown: "Halifax, England"
  }
];

// Add one table row for every singer when the page loads.
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("singer-table-body");

  singers.forEach((singer) => {
    const row = document.createElement("tr");

    const values = [
      singer.name,
      singer.song,
      singer.dateOfBirth,
      singer.hometown
    ];

    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
});
