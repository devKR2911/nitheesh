const experienceList: any[] = [
    {
        id: 0,
        designation: "IT Analyst.",
        company: {
            name: "TATA Consultancy Services",
            link: "https://www.tcs.com/",
        },
        description: "Full Stack developer with proficiency in technologies like Angular 8, React JS, Vue JS, Node JS, MongoDB, D3, SASS, Redux Saga.",
        startDate: "10-10-2018",
        endDate: null,
    },
    {
        id: 1,
        designation: "Senior Software Engineer.",
        company: {
            name: "Triassic Solutions Private Ltd.",
            link: "http://www.triassicsolutions.com/",
        },
        description: "Frontend developer with proficiency in technologies like Angular 6, Angular JS, Ionic 3, Ionic, Kendo UI, HTML, jQuery, Javascript, Bootstrap 3, Bootstrap 4.",
        startDate: "07-07-2014",
        endDate: "09-24-2018",
    }
]

function getDate(date: string) {
    if (!date) {
        return "Present";
    }
    const dateObj = new Date(date);
    const dateStr = `${dateObj.toLocaleString('default', { month: 'long' })} ${dateObj.getFullYear()}`
    return dateStr;
}

function getExperience() {
    experienceList.forEach((experience: any) => {
        experience.experienceStr = `${getDate(experience.startDate)} - ${getDate(experience.endDate)}`
    })
}

getExperience();

export default experienceList;