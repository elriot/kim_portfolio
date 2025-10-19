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
                        A passionate developer with experience in building dynamic and responsive web applications using React. I enjoy solving complex problems and continuously learning new technologies to create intuitive user experiences.
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