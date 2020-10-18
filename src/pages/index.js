import React from "react"

import Logo from "./tim.jpg";
import "./styles.css";


const AboutPage = () => (
    <main>
    <img class="photo" src={Logo} alt="website logo" />
    <h2 class="center">Software Professional in Iowa</h2>
    <p>Tim is a Software Developer and Agile Coach for Lean TECHniques, Inc. He has worked in software development in several industries including financial, fundraising, insurance, telecommunications and agriculture. He has played several roles including Agile Coach, Tech Lead, Project Manager, Architect, Software Developer, Database Administrator, and Business Analyst. His real passion is to work with people to understand their context and help them by introducing incremental improvements to get better at delivering software.</p>
    <p>Prior to his work with Lean TECHniques, Tim was a Software Developer and Tech Lead at Iowa Student Loan immersed in a culture of Extreme Programming where he learned many valuable practices including Test-Driven Development, Pair Programming, Refactoring, and Continuous Integration. While at Iowa Student Loan, Tim was interviewed by Gojko Adzic and his story is featured as a case-study in the book Specification by Example.</p>
    <p class="center">
      <a href={'https://twitter.com/timander'}>twitter</a> | <a href={'https://www.linkedin.com/in/timandersen/'}>linkedin</a> | <a href={'https://github.com/timander'}>github</a> | <a href={'mailto:tim@timandersen.net'}>email</a>
    </p>
  </main>
)

export default AboutPage