import profile from "../images/profile.jpg";
import "./AboutPage.css";
import { AiFillLinkedin, AiOutlineFolderOpen } from "react-icons/ai";
import resume from "../files/resume.pdf";

export const AboutPage = () => {
    return (
        <div className="page-container">
            <div className="about-me-card">
                <div className="profile-image-container">
                    <img className="profile-image" src={profile} alt="Soopin Kim profile" />
                </div>
                <div className="profile-details">
                    <h1 className="name-tag">SOOPIN KIM</h1>
                    <h2 className="job-tag">Software Developer</h2>
                    <p className="profile-bio">
                        Hello, I'm Soopin Kim, a software developer with a passion for well-architected code. With broad experience across web and application development, I enjoy refactoring complex systems to improve their quality and maintainability. 
												<p className="mb-2"></p>
												My approach is rooted in applying OOP principles and design patterns to build robust solutions. This same passion for growth led me to independently learn React to expand my expertise in modern web development.
                    </p>
                    <div className="button-container">
                        <button
                            className="about-button primary"
                            onClick={() => { window.open('https://www.linkedin.com/in/soopin-kim-9099a426a/', '_blank'); }}
                        >
                            <AiFillLinkedin />LinkedIn
                        </button>
                        <button
                            className="about-button secondary"
                            onClick={() => { window.open(resume, '_blank'); }}
                        >
                            <AiOutlineFolderOpen />Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}