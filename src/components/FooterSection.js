import React from 'react';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 py-4 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Developed by Yagiz Sereflioglu
        </div>
        <div className="flex items-center">
          <a href="https://github.com/ygzsrf" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yagizsereflioglu/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
