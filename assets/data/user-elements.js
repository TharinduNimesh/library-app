const grades = [];
for (let i = 1; i < 14; i++) {
  grades.push({
    label: `Grade - ${i}`,
    value: i,
  });
}

const roles = [
  {
    label: "Administrative Staff",
    value: 1,
  },
  {
    label: "Clerical Staff",
    value: 2,
  },
  {
    label: "Finance and Accounting",
    value: 3,
  },
  {
    label: "Human Resources",
    value: 4,
  },
  {
    label: "Facilities and Maintenance",
    value: 5,
  },
  {
    label: "IT and Technical Support",
    value: 6,
  },
  {
    label: "Security",
    value: 7,
  },
  {
    label: "Transportation",
    value: 8,
  },
  {
    label: "Health and Wellness",
    value: 9,
  },
  {
    label: "Cafeteria Staff",
    value: 10,
  },
  {
    label: "Librarians and Library Assistants",
    value: 11,
  },
  {
    label: "Student Support Services",
    value: 12,
  },
  {
    label: "Public Relations and Communication",
    value: 13,
  },
  {
    label: "Event Planning and Coordination",
    value: 14,
  },
  {
    label: "Sports and Recreation",
    value: 15,
  },
  {
    label: "Arts and Culture",
    value: 16,
  },
  {
    label: "Community Engagement",
    value: 17,
  },
  {
    label: "Special Education Assistants",
    value: 18,
  },
  {
    label: "Technology Integration Specialists",
    value: 19,
  },
  {
    label: "Registrar",
    value: 20,
  },
];

const elements = [
  [],
  [
    {
      type: "input",
      label: "Registration Number",
      icon: "material-symbols-light:app-registration-outline-sharp",
      placeholder: "2305x",
      name: "index"
    },
    {
      type: "select",
      placeholder: "Select The Grade",
      label: "Grade",
      icon: "majesticons:academic-cap-line",
      options: grades,
      name: "grade"
    },
    {
      type: "input",
      label: "Class",
      icon: "majesticons:home-line",
      placeholder: "B",
      name: "class"
    },
  ],
  [
    {
      type: "input",
      label: "NIC Number",
      icon: "material-symbols-light:app-registration-outline-sharp",
      placeholder: "764523xxxV",
      name: "index"
    },
    {
      type: "select",
      label: "Grade",
      placeholder: "Select The Grade",
      icon: "majesticons:academic-cap-line",
      options: grades,
      name: "grade"
    },
    {
      type: "input",
      label: "Class",
      icon: "majesticons:home-line",
      placeholder: "B",
      name: "class"
    },
  ],
  [
    {
      type: "input",
      label: "NIC Number",
      icon: "material-symbols-light:app-registration-outline-sharp",
      placeholder: "764523xxxV",
      name: "index"
    },
    {
      type: "select",
      label: "Sraff Role",
      placeholder: "Select The Staff Position",
      icon: "material-symbols-light:card-travel-outline-sharp",
      options: roles,
      name: "role_id"
    },
  ],
];

export default elements;
