import profile from "../images/profile.jpg"
import "./AboutPage.css"
import "./common.css"
import { AiFillLinkedin,AiOutlineFolderOpen } from "react-icons/ai";
import resume from "../files/resume.pdf";

export const AboutPage = () => {
    return (
        <div className="page-container about-me-container page-container-height">
            <div className="profile-image-container item">
                <img className="profile-image" src={profile} alt="here"></img>
            </div>
            <div className="item">
                <p className="name-tag">SOOPIN KIM</p>
                <p className="job-tag">Software Developer</p>
                <div className="button-container">
                    <button
                        className="about-button linked-in"
                        onClick={() => { window.open('https://www.linkedin.com/in/soopin-kim-9099a426a/', '_blank'); }}
                    >
                        <AiFillLinkedin />View Profile
                    </button>
                    <button
                        className="about-button resume"
                        onClick={() => { window.open(`${resume}`, '_blank'); }}
                    >
                        <AiOutlineFolderOpen />View Resume
                    </button>
                </div>
            </div>

        </div>
    )
}
