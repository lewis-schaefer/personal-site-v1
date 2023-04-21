import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <h1>Lewis Schaefer</h1>
        <h2>Full Stack Developer</h2>
        <div className="container">
          <p>This site is still under development; however, below are links to my LinkedIn, Github, Email and final Le Wagon Bootcamp project.</p>
        </div>
        <div className="container">
          <a href="https://www.linkedin.com/in/lewis-schaefer/" className="linkedin-icon" target="_blank"></a>
          <a href="https://github.com/lewis-schaefer" className="github-icon" target="_blank"></a>
          <a href="mailto:lewis@lhrs.co.uk" className="mail-icon" target="_blank"></a>
        </div>
        <div className="container">
          <a href="https://www.my-day-out.me" className="mdo-logo" target="_blank">
            <div className="mdo-icon"></div>
            <h3 className="mdo-title">My Day Out</h3>
          </a>
        </div>
        <div className="container project">
          <p><em>My Day Out</em> is a group project for a platform that plans a day of activities in a destination of the user's choosing, anywhere in the world, all using live location and public transit data.</p>
          <p>I put in a considerable amount of extra time into the platform, extending my learning well beyond the scope of the bootcamp to realise our original idea.</p>
          <p>As well as developing practices and techniques for collaborative working, I gained experience refining algorithmic solutions to satisfy processing time and API call budget constraints.</p>
          <p>Personally responsible for the backend functionality, including service classes for:</p>
          <ul>
            <li>Forming a sensible itinerary of event categories from input user location, time/date and interests</li>
            <li>Calling APIs to search for local options, populate each event with a location based on the interest category of each event and accessing a picture of the location</li>
            <li>Calling API to generate live public transit instructions, ensuring all event timings reflect the travel duration</li>
            <li>Allowing the user to asynchronously edit the order or times of events, and change event locations or add custom locations</li>
            <li>Cross-referencing and informing users of time conflicts for event times and location opening hours</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
