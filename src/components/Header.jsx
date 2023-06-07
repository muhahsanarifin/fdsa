import React from "react";
import * as content from "../utils/contents";

const Header = () => {
  const { logo, links } = content.header;

  return (
    <div className="navbar bg-[#ffffff] rounded-[16px]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{logo}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="font-[600]">
              <summary>Link</summary>
              <ul className="p-2 bg-base-100">
                {links.easy_peasy.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank">
                      {link.media}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
