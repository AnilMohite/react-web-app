import Style from '../assets/styles/styles.module.css'
import ContactStyle from '../assets/styles/contact.module.css'
import React,{useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your logic to handle form submission here
        console.log('Form submitted:', formData);
      };
    return (
        <div className={Style.container}>
             <div className={ContactStyle.contact_page}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className={ContactStyle.form_group}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className={ContactStyle.form_group}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className={ContactStyle.form_group}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
        </div>
    );
};
  
export default Contact;