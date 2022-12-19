var personList = [
  {
    name: "Jim",
    years: 60
  },
  {
    name: "Rowan",
    years: 67
  },
  {
    name: "Jackie",
    years: 68
  },
  {
    name: "Chris",
    years: 51
  },
  {
    name: "Mike",
    years: 59
  }
];

function addYears(people) {
  for (var i = 0; i < people.length; i++) {
    people[i].years = people[i].years + 1;
  }
  return people;
}

function averageYears(people) {
  var totalYears = 0;
  for (var i = 0; i < people.length; i++) {
    totalYears = totalYears + people[i].years;
  }
  return totalYears / people.length;
}