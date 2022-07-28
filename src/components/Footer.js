import React from 'react';

function Footer() {
  return (
    <footer className="container p-5 mx-auto">
      <div className="flex flex-col-reverse items-center justify-center sm:flex-row">
        <span className="text-xs">TM &amp; &copy; Lucasfilm Ltd. All Rights Reserved</span>
        <a className="inline-block mb-4 text-xs sm:mb-0 sm:ml-4" href="https://www.starwars.com/">
          Star Wars Offcial Website
        </a>
      </div>
    </footer>
  );
}

export default Footer;
