import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './contact.module.css';


const Contact = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [subject , setSubject] = useState("");
    const [message , setMessage] = useState("");




    const handleOnContactForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:2000/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name , email , subject , message })
            });

            const data = await response.json();

            if (response.status === 200) {
                alert('We have sent your query to the server');
            } else {
                alert(data.message || 'An error occurred during fetching the contact api');
            }
        } catch (err) {
            console.error('Error during contcat fetch:', err);
            alert('An error occurred on contact. Please try again later.');
        }

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }





    return(
        <>
            <div className={styles["contact-container"]}>
                <div className={styles["contact-sub-container"]}>

                    <div className={styles["contact-sec-1"]}>
                            <div className={styles["sec-1-text"]}>
                                <p>CONTACT</p>
                                <h2>NEED HELP?<span style={{color : "red"}}>CONTACT US</span></h2>
                            </div>
                    </div>

                    <div className={styles["contact-google-map"]}>
                                <iframe
                                    style={{ border: 0, width: "100%", height: "350px" }}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    title="Google Map"
                                ></iframe>
                    </div>

                    <div className={styles["contact-sec-3"]}>
                        <div className={styles["box"]}>
                                    <div className={styles["box-part-1"]}>
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                    </div>
                                    <div className={styles["box-part-2"]}>
                                    <span style={{fontSize : "1.5rem"}}>Our Address :-</span> <br/>
                                    Bilsi Road Bisauli,Badaun<br/>
                                    UttarPradesh
                                </div>
                        </div>

                        <div className={styles["box"]}>
                            <div className={styles["box-part-1"]}>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div className={styles["box-part-2"]}>
                                    <span style={{fontSize : "1.5rem"}}>Email Us :-</span> <br/>
                                    devkussu43@gmail.com
                                </div>
                        </div>

                        <div className={styles["box"]}>
                            <div className={styles["box-part-1"]}>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className={styles["box-part-2"]}>
                                    <span style={{fontSize : "1.5rem"}}>Call Us :-</span> <br/>
                                    tele - 91+ 8534855208
                                </div>
                        </div>

                        <div className={styles["box"]}>
                            <div className={styles["box-part-1"]}>
                                <i className="fa fa-share-alt" aria-hidden="true"></i>
                                    </div>
                                    <div className={styles["box-part-2"]}>
                                    <span style={{fontSize : "1.5rem"}}>Opening Hours :-</span> <br/>
                                    Full Time Open Web (24*7 hours)
                                </div>
                        </div>
                    </div>


                    <div className={styles["contact-sec-4"]}>
                        <form onSubmit={handleOnContactForm} className={styles['contact-form']}>
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your full name' />
                            <br/>
                            <br/>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                            <br/>
                            <br/>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Enter your subject' />
                            <br/>
                            <br/>
                            <label htmlFor="message">Message</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter you message' />
                            <br/>
                            <br/>
                            <div className={styles["contact-btn"]}>
                                <button type="submit" className={styles['btn']}>Send</button>
                            </div>
                        </form>
                    </div>

                    <div className={styles["go-back-to-home"]}>
                        <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                        <Link to={"/home"} className='link-to-home'>go back to home</Link>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Contact;
