import "../styles/aboutMenu.css";

const subheadingsData = {
  1: [
    {
      title: "About Me",
      content: (
        <>
          <p>
            Passionate software engineer, specialising in game programming. My life 
            experiences have become invaluable sources of inspiration and have enabled 
            me to curate innovative ideas and apply my critical thinking skills to 
            software design and development. My understanding of user and player centred 
            design enables me to create and develop enjoyable software and gaming 
            experiences. I have a strong portfolio of work experience with clientele 
            in the education, marketing, film, and gaming industries. Displaying agility 
            and strong attention to detail when writing clean and scalable code, even while 
            working under pressure to meet project deadlines.
          </p>
        </>
      ),
    },
  ],
  2: [
    {
      title: "2023 Bachelors Degree",
      content: (
        <>
          <p>
            Institution: Torrens University Australia
            <br /><br />
            Degree: Bachelor of Software Engineering (Games Programming)
            <br />
            <br />
            <div className="education-link-container">
              Link:{" "}
              <a
                href={"https://www.torrens.edu.au/courses/design/bachelor-of-software-engineering-game-programming"}
                target="_blank"
                rel="noopener noreferrer"
              >
                TUA Course Page
              </a>
            </div>
          </p>
        </>
      ),
    },
    {
      title: "C#/Unity Online Courses (2020 - Present)",
      content: (
        <>
          <p>
            Instructor: Jason Weimann
            <br />
            <br />
            Completed courses:
            <br />
            - Minigame Micro.
            <br />
            - Game Programmer.
            <br />
            - Master Architects.
            <br />
            - Game Dev Mastery.
            <br />
            <br />
            Current course:
            <br />
            - Multiplayer Mastery.
            <br />
            <br />
            <div className="education-link-container">
              Link:{" "}
              <a
                href={"https://game.courses/level/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jason Weimann Courses
              </a>
            </div>
          </p>
        </>
      ),
    },
    {
      title: "C++/Unreal Engine Online Course (2022)",
      content: (
        <>
          <p>
            Instructor: Tom Looman
            <br />
            <br />
            Completed course:
            <br />
            Game Development in C++ with Unreal Engine
            <br />
            <br />
            <div className="education-link-container">
              Link:{" "}
              <a
                href="https://courses.tomlooman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tom Looman Course
              </a>
            </div>
          </p>
        </>
      ),
    },
  ],
  3: [
    {
      title: "Unreal Developer (2022-2023)",
      content: (
        <>
          <p>
            Working with Kieron De Clouet at Plushtown Studios for the Palo Alto 
            Networks project. The goal of the project was to create digital 
            environments and cut-scenes in Unreal Engine to be used in digital 
            advertising campaigns. Problem-solved to reverse engineer previous work 
            and to re-structure and organise the project environment for the team. 
            I enjoyed developing various iterations to allow Kieron to visualise 
            potential final deliverables, and discuss ammendments and changes where 
            required. I worked to ensure that the client's expectations and final 
            vision was achieved.
          </p>
        </>
      ),
    },
    {
      title: "Game Developer (2018-Present)",
      content: (
        <>
          <p>
            The "My Pet Rupreet" project
            was developed in collaboration with an artist based in Argentina, 
            a programmer based in France, and two musicians based in Brazil 
            and USA. Using C# and the Unity Engine, I programmed various 
            gameplay elements. I was especially proud with the responsiveness of 
            the dance mini-game I developed independently, utilising the artwork
            and music provided by other team members. I created 'Imoto', a 
            stealth-inspired 2D platformer, independently from the concept 
            phase through to the publish and release phase. Various other game projects were 
            developed locally with all programming, game design, and development, 
            completed solo.
          </p>
        </>
      ),
    },
    {
      title: "Design & Creative Tech Ambassador (2019-Present)",
      content: (
        <>
          <p>
            After winning a creative competition held by Torrens University. I was
            elected to represent the Design and Creative Tech faculty at PAX 
            Melbourne 2018, the largest global gaming expo. I subsequently was 
            employed as Brand Ambassador. My role involved representing and promoting 
            the university and the Design and Creative Tech courses to generate student 
            intake/recruitment. I also event managed university career path events for 
            students, both at schools and careers conventions across South Australia. 
            During the course of my employment I showcased my first game, 'Imoto', 
            which generated positive interest and support.
          </p>
        </>
      ),
    },
  ],
};

export default subheadingsData;
