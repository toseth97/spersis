import React from "react";

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className="w-full bg-white text-black z-10 dark:bg-gray-900 px-16 dark:text-white dark:text-white flex items-center flex-col py-2">
            <div className="w-full md:flex items-center flex-col justify-center text-center">
                <div className="flex justify-evenly text-center items-center md:w-3/12">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="http://linkedin.com/in/samuelpersis"
                    >
                        <i class="bx text-3xl mx-2 bxl-linkedin-square"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/SPersis"
                    >
                        <i class="bx bxl-github text-3xl mx-2"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/samuel_persis?igshid=ZDdkNTZiNTM="
                    >
                        <i class="bx text-3xl mx-2 bxl-instagram-alt"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/Sam_Persis"
                    >
                        <i class="bx text-3xl mx-2 bxl-twitter "></i>
                    </a>
                </div>
                <div className="opacity-70 text-sm my-4">
                    <p>© Copyright {date}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
