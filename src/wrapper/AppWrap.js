import React from "react";
import { NavigationDots, SocialMedia } from "../components";

// HOC: wraps a section with shared layout — section id (for #hash nav), SocialMedia sidebar, copyright, NavigationDots.
// Usage: export default AppWrap(MySection, 'sectionId', 'optionalClassNames');
const AppWrap = (Component, idName, classNames) => {
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">{new Date().getFullYear()} John Doe</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  }

  return HOC;
};

export default AppWrap;
