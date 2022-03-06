const projects = [
    {
        id: 0,
        name: "Tryg",
        client_location: "Norway",
        description: "Online solution for creating insurance for pets, home and other items.",
        technologies: ["VueJS", "VueX", "GraphQL", "Bootstrap 4", "SASS"],
        responsibilities: [
            "Developing application interface.",
            "Unit testing.",
            "Storybook."
        ]
    },
    {
        id: 1,
        name: "LahiTapiola",
        client_location: "Finland",
        description: "Online solution for creating life insurance policies and their maintenance.",
        technologies: ["Angular 8", "Node JS", "MongoDB", "Bootstrap 4", "SASS"],
        responsibilities: [
            "Creating application user interface.",
            "API development with microservice architecture with Node JS and MongoDB.",
            "Integrating Angular application with custom third party UI components.",
            "Unit testing."
        ]
    },
    {
        id: 2,
        name: "Petronas",
        client_location: "Malaysia",
        description: "Web platform to display the statistical analysis of trade in a petroleum based company.",
        technologies: ["React JS", "Redux", "Redux Saga", "D3.js", "SASS"],
        responsibilities: [
            "Creating new React components with Redux Saga, JSS and SASS.",
            "Created custom chart elements with D3 js.",
            "Implemented declarative D3 chart.",
            "Implemented polling using redux saga."
        ]
    },
    {
        id: 3,
        name: "HR Application - Web",
        client_location: "India",
        description: "Web platform to manage the employee details within an institution.",
        technologies: ["Angular 6", "SASS", "Bootstrap 4"],
        responsibilities: [
            "Developing application UI.",
            "Developing application architecture",
            "Integrating application with Bootstrap 4, SASS.",
            "Deploying the Project in production environment."
        ]
    },
    {
        id: 4,
        name: "3D Floor Plan Manager",
        client_location: "US",
        description: "Web platform to create 3D Plans with objects inside the plan.",
        technologies: ["Angular 5", "Three.js", "SASS", "Bootstrap 4"],
        responsibilities: [
            "Integrating the Angular 5 Application with Custom library build with Three.js",
            "Building core angular layout with an independent module, component, services.",
            "Writing custom directives.",
            "Creating three-dimensional geometries and rendering in 3D screen",
            "Writing custom implementation for 3D screen scaling, combined geometry creation.",
            "Deploying the Project in production environment",
        ]
    },
    {
        id: 5,
        name: "Customer Shopping mobile application",
        client_location: "Canada",
        description: "Mobile application for customer shopping.",
        technologies: ["Ionic 3", "SASS", "Bootstrap 3"],
        responsibilities: [
            "Application front-end development.",
            "PayPal integration implemented.",
            "Chat integration with socket io.",
            "Custom filter integration for filtering loop data.",
        ]
    },
    {
        id: 6,
        name: "Online tool for vehicle dealerships to create customer deals",
        client_location: "Canada",
        description: "An online platform for creating deals with vehicle dealerships",
        technologies: ["Angular JS", "JavaScript", "CSS", "Bootstrap"],
        responsibilities: [
            "Application front-end development.",
            "Implementation of dynamic deal price calculation with user added accessories for a deal.",
            "Workflow implementation for data sharing between angular controllers.",
            "Exporting the customer invoices in form of pdf and csv reports.",
            "Google analytics integration.",
        ]
    },
    {
        id: 7,
        name: "HR Application",
        client_location: "India",
        description: "Cross-platform mobile application for HR managers to track the employee data.",
        technologies: ["Ionic", "JavaScript", "CSS"],
        responsibilities: [
            "Application front-end development.",
            "User data creation and population.",
            "Integrated application with custom toast element.",
            "Angular chart integration.",
            "Google analytics integration.",
            "Building application in android and ios platforms.",
        ]
    },
    {
        id: 8,
        name: "Online Tool For Automated Web Testing",
        client_location: "Canada",
        description: "An online tool for testing web applications",
        technologies: ["Angular JS", "JavaScript", "CSS"],
        responsibilities: [
            "Application front-end development.",
            "Angular tab implementation for creating and editing the application data",
            "Integration with Java spring backend to extract web contents",
            "Testing the application in various environments.",
        ]
    },
    {
        id: 9,
        name: "An Entrepreneur Solution For Vineyards",
        client_location: "Canada",
        description: "An entrepreneur solution for Vineyards to track the entire process included in winemaking to wine distribution.",
        technologies: ["Kendo UI", "JavaScript", "jQuery", "CSS"],
        responsibilities: [
            "Application front-end design and developments",
            "Creating user forms for accepting user data for different stages of wine creation",
            "Creating custom dropdown with user filter option and select all filtered option.",
            "Exporting data in pdf, png, excel formats",
        ]
    },
    {
        id: 10,
        name: "Orthodontist Application",
        client_location: "Canada",
        description: "An entrepreneur solution for Vineyards to track the entire process included in winemaking to wine distribution.A web application for patients to submit the records to an orthodontist and an admin site for the orthodontist to track their patient records",
        technologies: ["HTML", "CSS", "jQuery", "JavaScript"],
        responsibilities: [
            "Development of application front end.",
            "Integration of web application with camera with multi-browser compatibility",
            "Image compression from front-end to reduce user network usage",
            "Admin site creation with data tables, charts, server-side filtering",
        ]
    },
    {
        id: 11,
        name: "Mobile Application To Read Sensor Values via Bluetooth",
        client_location: "US",
        description: "A mobile application to read sensor parameters and display the records and history of the same",
        technologies: ["Angular JS", "Javascript", "CSS", "Cordova"],
        responsibilities: [
            "Application front-end development.",
            "Creating user forms, grids and history view for records.",
            "Integration with chart elements for plotting the records.",
            "Build preparation for android devices.",
        ]
    },
    {
        id: 12,
        name: "Microcontroller script editor",
        client_location: "US",
        description: "A web based script editor for a microcontroller device which allows programming the device",
        technologies: ["HTML", "JavaScript", "jQuery", "CSS"],
        responsibilities: [
            "Creating a script editor for Microprocessor programming.",
            "Creating custom syntax parsing for all the keywords available for the microprocessor.",
            "Error highlighting implementation for the script editor.",
            "Exporting script to a local file with cross-browser compatibility.",
            "Importing script to a script editor by parsing an external file.",
        ]
    }
];

export default projects;