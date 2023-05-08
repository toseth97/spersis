import React from "react";

const Services = () => {
    const services = [
        {
            name: "DevOps Engineering for Better Operations",
            body: "As a DevOps engineer, I am committed to helping organizations achieve their goals by streamlining their development and operations processes. My expertise lies in Kubernetes (K8s), Docker, Ansible, Terraform, Bash, AWS, and Jenkins. I leverage these technologies to build and maintain reliable, scalable, and secure infrastructure that supports continuous integration and delivery (CI/CD) pipelines.",
            img: "./static/img/Devops_engineer.webp",
        },
        {
            name: "Cloud Infrastructure Engineering Services",
            body: "As a DevOps engineer specializing in cloud engineering, I offer my expertise in creating and managing cloud-based solutions that are tailored to meet the unique needs of each of my clients. I understand that the cloud can be a complex and intimidating space, which is why I strive to simplify the process and help my clients achieve their goals as seamlessly as possible.",
            img: "./static/img/Cloud_infrastructure.webp",
        },
        {
            name: "IT Management Solutions Provider",
            body: "As an IT manager, my goal is to ensure that all technological aspects of a company are running smoothly and efficiently. I take on the responsibility of overseeing the IT department and managing the various operations, from network security to software development. My expertise lies in identifying unique challenges and implementing effective solutions that drive growth, streamline processes, and enhance productivity.",
            img: "./static/img/it_Management.webp",
        },
    ];

    return (
        <div
            id="services"
            className="section md:w-9/12 w-11/12 mt-8 md:flex flex-col items-center md:gap-x-3 px-8"
        >
            <h1 className="md:mt-8 text-3xl text-center">
                What Services I'm Providing
            </h1>
            <div className="underlines md:bg-blue-700"></div>
            <div className="mt-8 md:grid md:grid-cols-3 gap-16">
                {services.map((item) => (
                    <div>
                        <img
                            className="rounded"
                            src={item.img}
                            alt={item.name}
                        />
                        <h1 className="text-xl my-8 h-10">{item.name}</h1>
                        <p className="opacity-60 mb-8">{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
