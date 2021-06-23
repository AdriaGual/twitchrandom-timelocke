import React from "react";
import { RiGithubLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";

function Footer() {
  return (
    <div className=" h-24 bg-black relative">
      <div class="grid grid-cols-5 absolute inset-0">
        <div></div>
        <div class="col-span-3 flex items-center">
          <div className="text-white">© 2021 by Adrià Gual</div>
          <div className=" flex-grow"></div>

          <div className="flex gap-4">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://github.com/AdriaGual"}
            >
              <RiGithubLine className="text-white" size={20}></RiGithubLine>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://twitter.com/walie_6"}
            >
              <RiTwitterLine className="text-white" size={20}></RiTwitterLine>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/adria_gual"}
            >
              <RiInstagramLine
                className="text-white"
                size={20}
              ></RiInstagramLine>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
