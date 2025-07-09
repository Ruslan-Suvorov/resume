import logo from "./logo.svg";
import email from "./email.svg";
import github from "./github.svg";
import tel from "./tel.svg";
import telegram from "./telegram.svg";
import linkedin from "./linkedin.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="skills">
          <img
            src="https://i.postimg.cc/JtVWM3gJ/photo.jpg"
            className="photo"
            alt="my-photo"
          />
          <p className="name">Ruslan Suvorov</p>
          <p className="position">JavaScript Full-Stack Developer</p>
          <h2>Hard Skills</h2>
          <ul>
            <li>JavaScript (ES5, ES6)</li>
            <li>TypeScript</li>
            <li>
              React.js <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>RTKQuery</li>
            <li>AXIOS</li>
            <li>React-Toastify</li>
            <li>Material UI</li>
            <li>React Bootstrap</li>
            <li>Styled Components</li>
            <li>React Hook Form</li>
            <li>Handlebars</li>
            <li>HTML / CSS / Sass / Bootstrap</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB (mongoose)</li>
            <li>Socket.io</li>
            <li>JSON Web Tokken</li>
            <li>bcrypt.js</li>
            <li>dotenv</li>
            <li>Postman, Insomnia (API platforms)</li>
            <li>Heroku (deploy)</li>
            <li>Render (deploy)</li>
            <li>GIT, GitHub, GitLab</li>
          </ul>
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication and Empathy</li>
            <li>Teamwork</li>
            <li>Approachability and Helpfullness</li>
            <li>Recilience and Flexibility</li>
            <li>Self-Organization</li>
            <li>Analitican and Critical Thinking</li>
            <li>Creativity</li>
          </ul>
          <h2>Languages</h2>
          <p>English - Intermediate (B1)</p>
          <p>Ukrainian - Native</p>
          <p>Russian - Native</p>
        </div>
        <div className="profile">
          <h2>Profile</h2>
          <ul>
            <li>
              Full-Satck JavaScript developer with expirience create SPA using
              MERN stack (MongoDB, Express.js, React.js, Node.js)
            </li>
            <li>
              Have a solid background in sales and customer relationship
              management.
            </li>
            <li>Ability to quickly learn and adaptation.</li>
            <li>
              I highly value progress and personal growth, and I approach every
              challenge with a focused determination to reach best result and
              emerge victorious.
            </li>
          </ul>
          <h2>Project Experience</h2>
          <div>
            <h3>Realtor</h3>
            <p className="stack">
              <b>Stack:</b> MongoDB, Express.js, React.js, Node.js, Redux
              Toolkit, Axios, Material UI, Google Auth, React-Toastify, JWT,
              bcrypt.js
            </p>
            <p>
              Single Page Application for realtors and clients. With custom
              authorization, ability to create and like advertisements,
              write/edit/delite comments, write/edit/delite reply to comment,
              edit profile.
            </p>
            <a
              className="App-link"
              href="https://github.com/Ruslan-Suvorov/react-realtor"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
          </div>

          <div>
            <h3>Bank</h3>
            <p className="stack">
              <b>Stack:</b> Node.js, Express.js, React.js, React-Router,
              TypeScript
            </p>
            <p>
              Single Page Application Banking. With notifications,
              authorization, ability to recive or send transaction, edit
              profile, and transactions history
            </p>
            <a
              className="App-link"
              href="https://github.com/Ruslan-Suvorov/Bank"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
          </div>

          <div>
            <h3>Chat</h3>
            <p className="stack">
              <b>Stack:</b> Node.js, MongoDB, Express.js, Socket.io, passport,
              JWT, bcrypt.js
            </p>
            <p>
              Website chat in real-time. With authorization, ability to send
              message in chat in real-time.
            </p>
            <a
              className="App-link"
              href="https://github.com/Ruslan-Suvorov/chat"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
          </div>
          <h2>Last Work Experience</h2>
          <h3>Crix Limited (sep 2024 - present)</h3>
          <p>Position: Front-End Developer</p>
          <ul>
            <li>Development a wide range of web sites using HTML, CSS, JS.</li>
            <li>
              Development and maintain web applications with different fuctional
              to identify customer needs and further process the resulting data.
            </li>
            <li>
              Write clean, efficient, and scalable code, following best
              practices and coding standards.
            </li>
            <li>Troubleshoot, test, and ensure overall software quality.</li>
            <li>
              Interaction with the back-end developer, PM, designer and other
              team members.
            </li>
            <li>
              Administrative work (creating report table, table maintenance,
              etc.)
            </li>
          </ul>
          <h3>IT-Brains School (jan 2023 - sep 2024)</h3>
          <p>Position: Curator of course Full-Stack JavaScript</p>
          <ul>
            <li>
              Accompany students during their studying (work in student telegram
              chats and support chat-bot)
            </li>
            <li>Participation in creating lessons</li>
            <li>
              Monitoring student progress and making recommendations for further
              studying
            </li>
            <li>
              Administrative work (creating lessons timetable, check student
              grades, etc.)
            </li>
            <li>
              Conducting organizational and regular meetings with students
              (online format)
            </li>
            <li>Checking code, helping with writing code, giving feedback</li>
            <li>
              Communication with all the students in groups, quick response to
              questions, response to new messages in chats, support of a
              friendly atmosphere.
            </li>
          </ul>
          <h2>Contact info</h2>
          <div className="contacts">
            <a href="tel:+380501375597" target="_blank" rel="noreferrer">
              <div className="contact">
                <img src={tel} className="icon" alt="icon" />
                &nbsp;tel: +380501375597
              </div>
            </a>
            <a href="https://t.me/RSuvorov" target="_blank" rel="noreferrer">
              <div className="contact">
                <img src={telegram} className="icon" alt="icon" />
                &nbsp;Telegram: https://t.me/RSuvorov
              </div>
            </a>
            <a
              href="https://github.com/Ruslan-Suvorov"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact">
                <img src={github} className="icon" alt="icon" /> &nbsp;GitHub:
                https://github.com/Ruslan-Suvorov
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ruslan-suvorov-1a1963324"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact">
                <img src={linkedin} className="icon" alt="icon" />
                &nbsp;Linkedin:
                https://www.linkedin.com/in/ruslan-suvorov-1a1963324
              </div>
            </a>
            <a
              href="mailto:ruslan.suvorov.it@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact">
                <img src={email} className="icon" alt="icon" />
                &nbsp;E-mail: ruslan.suvorov.it@gmail.com
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
