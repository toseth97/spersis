import React from "react";

const HeroPage = () => {
    return (
        <div
            id="home"
            className="md:w-9/12 w-11/12 mt-8 md:flex md:items-center"
        >
            <div className="md:w-7/12">
                <h1 className="text-6xl mb-8 full_name">I'm Samuel Persis</h1>
                <p className="mt-8">
                    I am a DevOps engineer who aims to improve the world by
                    focusing on K8s, Docker, Ansible, Terraform, Bash, AWS and
                    Jenkins, and I am ready to work with you to create something
                    amazing.
                </p>
                <button className="hire_me mt-8">
                    <a
                        href="/"
                        class="block w-full py-1 pl-3 px-4 pr-4 text-white hover:bg-blue-700 bg-blue-500 rounded md:border-0"
                    >
                        Hire me...
                    </a>
                </button>
            </div>
            <div className="mt-8 md:mt-0">
                <img
                    className="rounded-full"
                    src="./static/img/heropg.jpg"
                    alt="Hero"
                />
            </div>
        </div>
    );
};

export default HeroPage;
