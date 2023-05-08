import React from "react";

const Experience = () => {
    const experience = [
        {
            name: "DevOps ",
            body: "DevOps is a software development methodology that aims to increase the speed and quality of software delivery by fostering collaboration and communication between development, operations, and other stakeholders. It involves the use of automated tools and processes to streamline the entire software development lifecycle, from initial code development to deployment and maintenance.",
        },
        {
            name: "AWS solutions Architect",
            body: "As an AWS Solution Architect, I possess the expertise to design and deploy scalable, highly available, and fault-tolerant systems on the AWS platform. With a formal approach, I can help businesses optimize their cloud infrastructure and achieve their goals with AWS services.",
        },
        {
            name: "SRE, (Site Reliability Engineering)",
            body: "SRE, or Site Reliability Engineering, is a discipline that focuses on the intersection of software engineering and operations. SRE aims to create reliable and scalable systems through a combination of automation, monitoring, and incident response practices.",
        },
    ];

    return (
        <div className="md:flex flex-col items-center dark:bg-white dark:text-black bg-gray-900 text-white">
            <div
                id="experience"
                className="section md:w-9/12 w-11/12 mt-8 md:flex flex-col items-center md:gap-x-3 px-8"
            >
                <h1 className="md:mt-8 text-3xl text-center">
                    Work Experience
                </h1>
                <div className="underlines md:bg-blue-700"></div>
                <div className="mt-8 md:grid md:grid-cols-3 gap-3">
                    {experience.map((item) => (
                        <div className="dark:bg-gray-900 dark:text-white bg-gray-900 text-white dark:text-black  md:my-0 my-2 rounded p-8">
                            <h1 className="text-xl my-8 h-10">{item.name}</h1>
                            <p className="opacity-70">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
