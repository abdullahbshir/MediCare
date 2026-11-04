import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";

function Home() {
  const services = [
    { icon: "🩺", title: "General Checkup", description: "Complete health checkups with experienced doctors." },
    { icon: "❤️", title: "Heart Specialist", description: "Professional care for your heart and cardiovascular health." },
    { icon: "🦷", title: "Dental Care", description: "Quality dental treatments for a healthy smile." },
    { icon: "👁️", title: "Eye Care", description: "Complete eye examinations and vision care." },
    { icon: "🧠", title: "Neurology", description: "Expert diagnosis and treatment for neurological conditions." },
    { icon: "💊", title: "Medicine", description: "Reliable medical advice and treatment." }
  ];

  const doctors = [
    { name: "Dr. John Smith", specialty: "Cardiologist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500" },
    { name: "Dr. Sarah Johnson", specialty: "Dentist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500" },
    { name: "Dr. Michael Brown", specialty: "Neurologist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500" }
  ];

  return (
    <div className="medicare">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-text">
            <span className="hero-label">WELCOME TO MEDICARE</span>
            <h1>Your Health Is Our <span>First Priority</span></h1>
            <p>
              We provide professional healthcare services with experienced
              doctors and modern medical facilities.
            </p>
            <a href="#contact" className="primary-btn">Book Appointment</a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900"
              alt="Medical healthcare"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section-padding" id="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900"
              alt="Doctor consulting patient"
            />
          </div>

          <div className="about-text">
            <span className="section-label">ABOUT US</span>
            <h2>We Provide The Best Medical Services</h2>
            <p>
              MediCare is committed to providing quality healthcare services.
              Our experienced medical professionals work hard to ensure every
              patient receives the care they deserve.
            </p>
            <ul>
              <li>✓ Experienced medical professionals</li>
              <li>✓ Modern medical equipment</li>
              <li>✓ Patient-focused healthcare</li>
              <li>✓ Affordable medical services</li>
            </ul>
            <a href="#contact" className="primary-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-padding" id="services">
        <div className="section-heading">
          <span className="section-label">OUR SERVICES</span>
          <h2>Our Medical Services</h2>
          <p>We provide quality healthcare for your entire family.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors section-padding" id="doctors">
        <div className="section-heading">
          <span className="section-label">OUR TEAM</span>
          <h2>Meet Our Expert Doctors</h2>
          <p>Our qualified doctors are here to take care of you.</p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section-padding" id="contact">
        <div className="section-heading">
          <span className="section-label">CONTACT US</span>
          <h2>Book Your Appointment</h2>
          <p>Contact us today for your medical consultation.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your appointment request has been received.");
            e.target.reset();
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <select required defaultValue="">
            <option value="" disabled>Select Service</option>
            <option>General Checkup</option>
            <option>Heart Specialist</option>
            <option>Dental Care</option>
            <option>Eye Care</option>
          </select>
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>MediCare</h2>
        <p>Your Health Is Our First Priority.</p>
        <p>© 2026 MediCare. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;