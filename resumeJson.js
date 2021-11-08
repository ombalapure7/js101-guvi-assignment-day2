const resumeData = {
  header: {
    name: "Om Balapure",
    githubLink: "ombalapure@github.com",
    emailLink: "ombalapure@gmail.com",
  },

  education: {
    postGraduation: {
      institute: "CDAC KP Bangalore",
      startDate: "Aug 2019",
      endData: "Feb 2020",
    },
    graduation: {
      institute: "DMIETER",
      startDate: "Aug 2015",
      endData: "Feb 2019",
    },
  },

  experience: [
    {
      name: "Stratus",
      startData: "Mar 2020",
      endDate: "NA",
      designation: "SWE 1",
      domain: ["Front end dev", "Test automation"],
    },
  ],

  skills: {
    programmingLanguages: ["Java", "PERL", "Javascript"],
    libraries: ["Jackson", "Mongoose", "NodeJS", "ReactJS"],
    databases: ["MySQL", "MongoDB"],
    tools: ["qTest", "POSTMAN", "Swagger"],
  },

  projects: [
    {
      name: "Blood cell counter",
      technology: ["MATLAB"],
      description:
        "Counts RBC, WBC and Platelets from the image of a blood smear",
    },
    {
      name: "Meme Share",
      technology: [
        "Spring Boot",
        "MongoDB",
        "Spring Data",
        "Swagger",
        "JUnit",
        "Mockito",
      ],
      description:
        "A meme sharing platform, where registered users can share memes and admins can activate/deactivate a user and delete memes",
    },
  ],
};

for (let ele in resumeData) {
  console.log(resumeData[ele]);
}
