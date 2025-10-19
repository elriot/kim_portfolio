import { useRef, useState } from "react";
import "./ContactPage.css";

export const ContactPage = () => {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:spkim8901@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="page-container">
            <div className="contact-card">
                <div className="contact-header">
                    <h2>Get in Touch</h2>
                    <p>
                        If you'd like to talk about a project, or just say hello, feel free to reach out below!
                    </p>
                </div>
                <form className="contact-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputSubject" className="form-label">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="form-input"
                            id="inputSubject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputContent" className="form-label">
                            Message
                        </label>
                        <textarea
                            rows="8"
                            className="form-input"
                            id="inputContent"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="contact-button">
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};