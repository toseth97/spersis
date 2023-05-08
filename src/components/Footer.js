import React from "react";

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className="w-full bg-white text-black z-10 dark:bg-gray-900 px-16 dark:text-white dark:text-white flex items-center flex-col py-2">
            <div className="w-full md:flex items-center justify-between text-center">
                <div>
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
                </div>
                <div>
                    <p>© Copyright {date}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
