const grades = [{
  label: 'select your grade',
  value: 0,
}];
for (let i=1; i < 14; i++) {
  grades.push({
    label: `Grade - ${i}`,
    value: i,
  });
}

const elements = [
  [],
  [
    {
      type: "input",
      label: "mobile",
      icon: "majesticons:phone-dial-line",
      placeholder: "071 000 00xx",
    },
    {
      type: "select",
      label: "Grade",
      icon: "majesticons:academic-cap-line",
      options: grades
    },
    {
      type: "input",
      label: "Class",
      icon: "majesticons:home-line",
      placeholder: "B",
    },
  ],
];

export default elements;