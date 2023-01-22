/*
  This array of objects contains three main objects representing three different people, each of which includes properties such as `id`, `name`, `age`, `address`, `hobbies`, and `jobs`. The `address` property is an object with properties such as `street`, `city`, `state`, and `zip`, and the `hobbies` and `jobs` properties are arrays. The `jobs` property is an array of objects, each of which includes properties such as `company`, `position`, `startDate`, `endDate`, and `responsibilities`.
*/

const data = [
  {
    id: 1,
    name: "John Smith",
    age: 30,
    address:
    {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    },
    hobbies: ["reading", "hiking", "traveling"],
    jobs: [
      {
        company: "Acme Inc.",
        position: "Developer",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        responsibilities: ["Developing web applications", "Debugging code", "Writing documentation"]
      },
      {
        company: "Beta Corp.",
        position: "Senior Developer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of developers", "Mentoring junior developers", "Improving codebase"]
      }
    ]
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    hobbies: ["cooking", "gardening", "yoga"],
    jobs: [
      {
        company: "Gamma LLC.",
        position: "QA Engineer",
        startDate: "2019-01-01",
        endDate: "2021-12-31",
        responsibilities: ["Testing web applications", "Creating test cases", "Providing feedback"]
      },
      {
        company: "Delta Inc.",
        position: "Senior QA Engineer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of QA engineers", "Developing automation tests", "Improving quality processes"]
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: "60001"
    },
    hobbies: ["fishing", "camping", "surfing"],
    jobs: [
      {
        company: "Epsilon Inc.",
        position: "Data Analyst",
        startDate: "2018-01-01",
        endDate: "2020-12-31",
        responsibilities: ["Analyzing data", "Creating reports", "Providing insights"]
      },
      {
        company: "Zeta Corp.",
        position: "Senior Data Analyst",
        startDate: "2021-01-01",
        endDate: null,
        responsibilities: ["Leading a team of data analysts", "Developing machine learning models", "Improving data processes"]
      }
    ]
  }
];

// Question 1: Extract a list of all the people's names from the data.

// Question 2: Get all the job titles for the people.

// Question 3: Find the average age of the people.

// Question 4: Get all the unique cities where the people live.

// Question 5: Extract a list of all the people's hobbies in alphabetical order.

// Question 6: Get the total number of years of experience for all the people in the data.

// Question 7: Extract all the names of the people who live in California and have a job as a "Senior QA Engineer" and have "cooking" as a hobby, and sort them alphabetically.

// Question 8: Extract all the responsibilities of the people who live in Chicago and are currently employed as "Senior Data Analysts".

// Question 9: Extract all the people who have "hiking" as a hobby and create a new field "job_experience" which is the sum of the number of months they have worked in each job.

// Question 10: Extract all the people who have "surfing" as a hobby and create a new field "job_titles" which is an array of all the positions the person has held and another new field "current_job" which is the current job if they have one or "Not currently employed" if they do not.

// Question 11: Extract all the people who have "traveling" as a hobby, and create a new field "most_recent_job" which is an object containing the company, position, and start date of their most recent job.

// Question 12: Extract all the people who have "yoga" as a hobby, and create a new field "job_history" which is an array of objects containing the company, position, start date, and end date of all the jobs they have held.

// Question 13: Extract all the people who have "fishing" as a hobby, and create a new field "job_duration" which is an array of the number of months they have worked in each job