import "../styles/aboutMenu.css";

const subheadingsData = {
  1: [
    {
      title: "About Me",
      content: (
        <>
          <p>
            Hi, my name is Tarek, I am an undergraduate in software engineering,
            specialising in game programming. I have a very positive outlook and
            through my life experiences have managed to cultivate an ability to
            always find the lesson within my experiences, whether positive or
            negative. I absolutely love meeting and connecting with new people
            and have a strong enthusiasm for my field. I believe the sum of my
            experiences will be a successful career in software engineering.
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
            <br />
            Degree: Bachelor of Software Engineering (Games Programming)
            <br />
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
            - Minigame Micro Course.
            <br />
            - Game Programmer Course.
            <br />
            - Master Architects Course.
            <br />
            - Game Dev Mastery Course.
            <br />
            <br />
            Current course:
            <br />
            - Multiplayer Mastery Course.
            <br />
            <br />
            <div className="education-link-container">
              Link:{" "}
              <a
                href={"https://game.courses/level/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jason Weimann Courses Page
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
                Tom Looman Course Page
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
            Recommended to the role by one of my lecturers at Torrens
            University. I was given the opportunity to work with Kieron De Clouet 
            at Plushtown Studios. The goal of the project was to create digital
            environments and cut-scenes in Unreal Engine to be used in digital
            advertising campaigns for Palo Alto Networks. My task specifically
            was to reverse engineer previous work and to re-structure and
            organise the project for the team. I worked closely with the Kieron 
            to ensure that the exact vision of the client was achieved. I enjoyed 
            developing various iterations to allow Kieron to visualise potential 
            final deliverables, and discuss ammendments and changes that worked.
          </p>
        </>
      ),
    },
    {
      title: "Game Developer (2018-Current)",
      content: (
        <>
          <p>
            An active and key member from the idea generation/concept phase,
            through to publish and release. One project, "My Pet Rupreet", was
            made in collaboration with an artist in Argentina, a programmer in
            France, and two musicians based in Brazil and the United States of
            America. All of the gameplay elements were programmed by myself in
            C#. I was especially proud of the responsiveness in the dance
            mini-game, which was developed entirely by myself, with the artwork
            and music being provided by the other members of the team. Other
            projects, such as 'Imoto', 'Pug Amour', and 'Ninja VS Ninja', were
            all created with myself as creative director and project manager.
            All programming, game design, and game development were completed
            solo.
          </p>
        </>
      ),
    },
    {
      title: "Brand Ambassador: Design & Creative Tech (2019-Present)",
      content: (
        <>
          <p>
            Selected to represent Torrens University at PAX Melbourne 2018, the
            largest global gaming expo, and subsequently employed as a Brand
            Ambassador. My role involved representing and promoting the
            university to drive student intake/recruitment at the university and
            promote the design and creative tech courses. I also event managed
            University career path events for students, both at schools and
            careers conventions around South Australia. During the course of my
            employment I showcased my first ever game, Imoto, which generated
            positive interest and support.
          </p>
        </>
      ),
    },
  ],
};

export default subheadingsData;
