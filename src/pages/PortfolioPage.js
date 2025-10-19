import "./PortfolioPage.css";
import { portfolioData } from "../data/portfolioData";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { FaUnity } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const buttonComponents = {
  github: { icon: <AiOutlineGithub />, text: "Github" },
  live: { icon: <AiOutlineLink />, text: "Live Web" },
  unity: { icon: <FaUnity />, text: "Play" },
  youtube: { icon: <IoLogoYoutube />, text: "Demo" },
};

export const Portfolio = () => {
  return (
    <div className="page-container mt-5">
      <div className="card-container">
        {portfolioData.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-img">
              <a href={project.image} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="card-img-top" alt={`${project.title} app`} />
              </a>
            </div>
            <div className="card-body">
              <div className="card-main-content">
                <h5 className="card-title">{project.title}</h5>
                <div className="card-description">
                  {project.description.map((line, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
                </div>
              </div>

              <div className="tech-stack-container">
                {/* <h6 className="tech-stack-title">Tech Stack</h6> */}
                <div className="card-teck-inidividual">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card-buttons">
                {project.links.map((link, index) => {
                  const buttonInfo = buttonComponents[link.type];
                  if (!buttonInfo) return null;

                  return (
                    <button
                      key={index}
                      className={`card-button ${link.type !== 'github' ? 'button-web' : ''}`}
                      onClick={() => { window.open(link.url, "_blank") }}
                    >
                      {buttonInfo.icon}
                      <span>{buttonInfo.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};