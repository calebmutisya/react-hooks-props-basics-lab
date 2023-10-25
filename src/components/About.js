import React from "react";
import Links from "./Links"

import user from "../data/user";
function About(props) {
  if (!props.bio) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
    } else {
    // show published content
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={user.links.github} linkedin={user.links.linkedin}/>
      </div>
    );
  }
}

export default About;
