
import "./../css/ContactPage.css"; // Create and import CSS later

const ContactPage = () => {
  return (
    <section id="contact" style={{ padding: '50px 0', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      {/* Placeholder form - add form handling later */}
      <form style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows={4} style={{ width: '100%', padding: '8px' }}></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: '30px' }}>
        {/* Placeholder social icons */}
        <a href="#" style={{ margin: '0 10px' }}>LinkedIn</a>
        <a href="#" style={{ margin: '0 10px' }}>GitHub</a>
        <a href="#" style={{ margin: '0 10px' }}>Twitter</a>
        {/* Add Calendly embed later if needed */}
      </div>
    </section>
  );
};

export default ContactPage;
