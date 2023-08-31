import { useRef, useState } from "react"
import "./ContactPage.css"
import { AiOutlineMail } from "react-icons/ai"

export const ContactPage = () => {
    const subjectRef = useRef();
    const contentRef = useRef();
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const onSubjectInput = () => {
        setSubject(subjectRef.current.value);
    }
    const onContentInput = () => {
        setContent(contentRef.current.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(subject, content);
        const mailtoLink = `mailto:spkim8901@gmail.com?subject=${subject}&body=${content}`;
        window.location.href = mailtoLink;
    }
    return <div className="page-container">
        <div className="contact-page-container">
            <h2>
                If you'd like to get in touch <br />
                or have any questions<br />
                feel free to reach out below!
            </h2>
            <form className="input-form row g-3" onSubmit={onSubmit}>
                <div className="row label">
                    <label
                        htmlFor="inputSubject"
                        className="form-label">
                        - Subject
                    </label>
                </div>
                <div className="row">
                    <input
                        type="text"
                        className="form-control"
                        id="inputSubject"
                        value={subject}
                        onChange={onSubjectInput}
                        ref={subjectRef} />
                </div>
                <div className="row label">
                    <label
                        htmlFor="inputContent"
                        className="form-label">
                        - Content
                    </label>
                </div>
                <div className="row">
                    <textarea
                        rows="9"
                        type="email"
                        className="form-control input-content"
                        id="inputContent"
                        value={content}
                        onChange={onContentInput}
                        ref={contentRef} />
                </div>
                <div className="col-12">
                    <button
                        type="submit" 
                        className="email-button">
                        Send Email
                    </button>
                </div>
            </form>
        </div>
    </div>
}