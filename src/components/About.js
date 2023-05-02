import React from "react";

const About = () => {
    return (
        <div className="md:w-9/12 w-11/12 mt-8 md:flex flex-col items-center md:gap-x-3 px-8">
            <h1 className="text-3xl text-center">About Me</h1>
            <div className="underlines md:bg-blue-700"></div>
            <div className="mt-8 md:flex md:gap-16">
                <div className="md:w-9/12">
                    <p className="mt-8 about_p_1 md:w-7/12 text-xl">
                        Experienced DevOps Engineer specializing in K8s, Docker,
                        Ansible, Terraform, Bash, AWS and Jenkins
                    </p>
                    <p>
                        I am a DevOps engineer with a passion for improving the
                        world, one project at a time. My areas of expertise
                        include K8s, Docker, Ansible, Terraform, Bash, AWS, and
                        Jenkins. I am dedicated to creating innovative solutions
                        that meet the needs of my clients and exceed their
                        expectations. With my skills and experience, I am ready
                        to help you make magic happen.
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:w-3/12 ">
                    <img
                        className="rounded"
                        src="./static/img/about.webp"
                        alt="Hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
