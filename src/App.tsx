import { useState, useEffect } from "react";

import Menu from "./components/Menu";
import learningAssignments from "./data/learningAssignments";

{
  /* Graduating from university in 2023 and attempting to break into
              the CS industry experiencing both mass layoffs due to ecomonic
              factors as well as the rise of AI is instense, So I decided to
              focus on learning and practicing AWS to expand my skillset and
              increase my chances of landing a job in the industry which has
              resulted in completely transforming the way I think about software
              development and the cloud. Now poccessing absolute confidence in
              my ability to build and maintain scalable, secure, and highly
              available cloud solutions and front-end applications. This leaves
              me with the need to create portfolio projects to showcase my
              skills and knowledge before I can actually start applying for
              jobs. Anyways, I decided to take it a step further and using
              ChatGPT, I generated a list of 100 learning assignments to
              complete over the next 100 days to further my knowledge and skills
              in the industry where I either have no experience or need to
              improve. */
}

function App() {
  return (
    <>
      <div className="relative top-0 h-dvh w-screen overflow-y-scroll font-mono p-[4vw] sm:p-6 md:p-8 lg:p-9 xl:p-10 bg-[#212121] text-white">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between /text-gray-200">
            <p className="text-xl">100 days of development</p>
            <div className="flex flex-col items-end text-base sm:text-lg">
              <p>
                Start <span className="hidden sm:inline-block">date</span>:
                3/1/24
              </p>
              <p>
                End <span className="hidden sm:inline-block">date</span>:
                7/13/24
              </p>
            </div>
          </header>

          <Menu open={false} title="About me" top={true}>
            <p className="mt-4 ml-12">
              My name is Matthew, last year I graduated from Southern New
              Hampshire University with a degree in Data Analytics. I am highly
              proficient in Data Science, Math, Data Structures + Algorithms,
              TypeScript, Node.js, React.js, TailwindCSS, Microservices, Docker,
              Linux, and AWS. After university, I decided to focus on learning
              and practicing AWS and became 3x AWS certified as a Solutions
              Architect Associate, Developer Associate, and SysOps Administrator
              Associate. I specialize in scalable cloud solutions, developing
              responsive, user-centric applications with dynamic content, and
              building maintainable microservice architectures utilizing AWS and
              DevOps practices.
            </p>
          </Menu>
          <Menu open={false} title="The goal of this project">
            <p className="mt-4 ml-12">
              After graduating from Southern New Hampshire University in 2023
              with a degree in Data Analytics, I quickly recognized the
              challenges posed by the current job market in computer science,
              intensified by widespread layoffs and the transformative impact of
              artificial intelligence. During my time at university, I
              endeavored to master web development, delving into CSS, Vanilla
              JS, React, Next.js, database implementation, and algorithms + data
              structures. My job search on LinkedIn revealed two critical
              insights: a high demand for expertise in serverless technologies
              and DevOps, contrasted with an oversupply of frontend developers.
              Faced with the daunting prospect of competing against hundreds for
              a single interview slot, I realized the urgent need to broaden my
              skill set.
            </p>
            <p className="mt-4 ml-12">
              Driven by curiosity and a determination to excel, I ventured into
              the realm of AWS. Through a combination of resources including
              ChatGPT, YouTube, and AWS's official documentation, I dedicated
              myself to intensive study and hands-on practice. This effort
              culminated in achieving all three associate-level AWS
              certifications, fundamentally reshaping my understanding of
              software development and the cloud. Now, I am equipped with the
              knowledge and confidence to design, build, and deploy
              sophisticated solutions, ranging from dynamic social feeds with
              user authentication to scalable, fault-tolerant backends, all
              architectured in AWS and deployed as infrastructure as code (IaC).
            </p>
            <p className="mt-4 ml-12">
              Looking to the future, I recognize the importance of further
              enhancing my credentials and skill set before entering the tech
              industry. My immediate goals include obtaining the AWS Solutions
              Architect Professional certification, refining my expertise in
              data structures and algorithms, developing new portfolio projects
              to showcase my skills, and broadening my understanding of computer
              science. This exploration will not only revisit and fortify my
              knowledge in familiar areas such as Linux, AWS, and React but also
              extend into new territories. I plan to engage with other
              JavaScript frameworks, dive into additional programming languages,
              and consolidate my grasp on essential concepts.
            </p>
            <p className="mt-4 ml-12">
              To navigate this comprehensive learning journey, I've leveraged AI
              to outline 100 tailored assignments that will serve as my roadmap.
              This structured approach allows me to systematically expand my
              technical foundation while creating tangible evidence of my
              capabilities through portfolio projects. Documenting this process
              will not only demonstrate my dedication to continuous learning and
              adaptation but also highlight my unique ability to navigate and
              contribute to the evolving landscape of technology. This
              initiative is more than just a personal challenge; it's a
              strategic effort to position myself as a highly competent and
              versatile candidate, ready to make significant contributions in
              the realm of cloud computing and software development.
            </p>
          </Menu>
          <Menu open={false} title="100 Learning Assignments">
            <div className="mt-4 ml-12">
              {learningAssignments.map((item, index) => (
                <p key={index}>
                  {index + 1}: {item}
                </p>
              ))}
            </div>
          </Menu>
          <Menu open={false} title="Conclusive thoughts: After the fact">
            <p className="mt-4 ml-12">
              I still am working on this project and have not yet reached the
              end :)
            </p>
          </Menu>
          <Menu day={1} date="3/4/24" />
          <Menu day={2} date="3/5/24" />
        </div>
      </div>
    </>
  );
}

export default App;
