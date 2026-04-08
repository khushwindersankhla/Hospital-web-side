import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Calendar, AlertCircle, Star, MessageCircle, Home, Info, Stethoscope, Users, Building2, CheckCircle, ClipboardList, ImageIcon, Send, Clock, Award } from 'lucide-react';

const HospitalWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', department: '', message: ''
  });
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you soon.');
    setAppointmentForm({ name: '', email: '', phone: '', date: '', time: '', department: '', message: '' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! Thank you for contacting us.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  // Navigation Menu
  const Navigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-b from-white to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setCurrentPage('home'); setMenuOpen(false); }}>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900">Rana Hospital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { name: 'Home', page: 'home' },
              { name: 'About', page: 'about' },
              { name: 'Services', page: 'services' },
              { name: 'Doctors', page: 'doctors' },
              { name: 'Departments', page: 'departments' },
              { name: 'Facilities', page: 'facilities' },
              { name: 'Blog', page: 'blog' },
              { name: 'Contact', page: 'contact' }
            ].map(item => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`font-medium transition-colors ${currentPage === item.page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('appointment')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            {[
              { name: 'Home', page: 'home' },
              { name: 'About', page: 'about' },
              { name: 'Services', page: 'services' },
              { name: 'Doctors', page: 'doctors' },
              { name: 'Departments', page: 'departments' },
              { name: 'Appointment', page: 'appointment' },
              { name: 'Emergency', page: 'emergency' },
              { name: 'Facilities', page: 'facilities' },
              { name: 'Testimonials', page: 'testimonials' },
              { name: 'Gallery', page: 'gallery' },
              { name: 'Blog', page: 'blog' },
              { name: 'Contact', page: 'contact' }
            ].map(item => (
              <button
                key={item.page}
                onClick={() => { setCurrentPage(item.page); setMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg font-medium text-gray-700"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div>
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-600 via-cyan-500 to-green-400 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative z-10">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Rana Hospital</h1>
            <p className="text-lg text-white/90 mb-6">Your trusted healthcare partner providing world-class medical services with compassion and excellence.</p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setCurrentPage('appointment')}
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Book Now
              </button>
              <button
                onClick={() => setCurrentPage('emergency')}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Emergency
              </button>
            </div>
          </div>
          <div className="hidden lg:block flex-1 text-center">
            <div className="w-64 h-64 bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center animate-pulse">
              <Stethoscope className="w-32 h-32 text-white opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Highlights */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: AlertCircle, title: '24/7 Emergency', desc: 'Round-the-clock emergency services' },
            { icon: Stethoscope, title: 'Expert Doctors', desc: 'Highly qualified medical professionals' },
            { icon: Building2, title: 'Modern Facilities', desc: 'State-of-the-art medical equipment' }
          ].map((service, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Expert Doctors' },
              { number: '100K+', label: 'Happy Patients' },
              { number: '50+', label: 'Departments' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-400 to-cyan-500 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-lg mb-8">Contact us now for immediate help and expert consultation</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 bg-white text-cyan-600 font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );

  // About Us Page
  const AboutPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Rana Hospital</h1>
          <p className="text-gray-600">Pioneering healthcare excellence in Jaipur since 1999</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1999, Rana Hospital has been a beacon of hope and healing in Jaipur. With over two decades of excellence, we have grown from a small clinic to a comprehensive multi-specialty hospital.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We remain committed to providing world-class healthcare with compassion, integrity, and innovation. Our team of dedicated professionals works tirelessly to ensure patient comfort and recovery.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-80 flex items-center justify-center">
            <Hospital className="w-40 h-40 text-blue-600 opacity-30" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" /> Our Mission
            </h3>
            <p className="text-gray-600">To provide accessible, affordable, and high-quality healthcare services to every individual in our community, with emphasis on patient care and satisfaction.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" /> Our Vision
            </h3>
            <p className="text-gray-600">To be a leading healthcare institution known for excellence in medical practice, research, education, and service to society.</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Integrity', 'Excellence', 'Compassion', 'Innovation'].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Services Page
  const ServicesPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="text-gray-600">Comprehensive medical services under one roof</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Emergency Care', icon: AlertCircle, desc: '24/7 emergency services with trained paramedics' },
            { title: 'General Surgery', icon: Stethoscope, desc: 'Expert surgical interventions and procedures' },
            { title: 'Internal Medicine', icon: Users, desc: 'Comprehensive medical care for adults' },
            { title: 'Pediatrics', icon: Users, desc: 'Specialized care for children and infants' },
            { title: 'Orthopedics', icon: Award, desc: 'Bone, joint, and musculoskeletal care' },
            { title: 'Cardiology', icon: Star, desc: 'Heart and cardiovascular disease treatment' },
            { title: 'Neurology', icon: Building2, desc: 'Brain and nervous system care' },
            { title: 'Gastroenterology', icon: Stethoscope, desc: 'Digestive system disorder treatment' },
            { title: 'Radiology', icon: ImageIcon, desc: 'Advanced imaging and diagnostic services' },
            { title: 'Laboratory', icon: ClipboardList, desc: 'Complete pathology and lab services' },
            { title: 'ICU', icon: AlertCircle, desc: 'Intensive care with advanced monitoring' },
            { title: 'Physical Therapy', icon: Users, desc: 'Rehabilitation and physical fitness' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <service.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Doctors Page
  const DoctorsPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Our Doctors</h1>
          <p className="text-gray-600">Meet our team of experienced medical professionals</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Rajesh Kumar', spec: 'Cardiology', exp: '20+ years' },
            { name: 'Dr. Priya Singh', spec: 'Neurology', exp: '18+ years' },
            { name: 'Dr. Amit Patel', spec: 'Orthopedics', exp: '15+ years' },
            { name: 'Dr. Isha Sharma', spec: 'Pediatrics', exp: '12+ years' },
            { name: 'Dr. Vikas Gupta', spec: 'General Surgery', exp: '22+ years' },
            { name: 'Dr. Neha Verma', spec: 'Gastroenterology', exp: '14+ years' },
            { name: 'Dr. Suresh Yadav', spec: 'Radiology', exp: '16+ years' },
            { name: 'Dr. Anjali Mishra', spec: 'Internal Medicine', exp: '13+ years' },
            { name: 'Dr. Rohit Singh', spec: 'Physical Therapy', exp: '11+ years' }
          ].map((doctor, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Users className="w-24 h-24 text-blue-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{doctor.spec}</p>
                <p className="text-gray-600 text-sm">{doctor.exp}</p>
                <button
                  onClick={() => setCurrentPage('appointment')}
                  className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Departments Page
  const DepartmentsPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Our Departments</h1>
          <p className="text-gray-600">Specialized medical departments with expert teams</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {[
            { name: 'Cardiology', staff: '12 Doctors', beds: '25 Beds', desc: 'Advanced cardiac care and interventions' },
            { name: 'Neurology', staff: '8 Doctors', beds: '20 Beds', desc: 'Brain and nervous system treatment' },
            { name: 'Orthopedics', staff: '10 Doctors', beds: '30 Beds', desc: 'Bone and joint surgery services' },
            { name: 'Pediatrics', staff: '9 Doctors', beds: '18 Beds', desc: 'Child and infant care' },
            { name: 'General Surgery', staff: '15 Doctors', beds: '35 Beds', desc: 'General and emergency surgery' },
            { name: 'ICU', staff: '20 Doctors', beds: '40 Beds', desc: 'Intensive care with critical support' }
          ].map((dept, i) => (
            <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.desc}</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm text-gray-500">Medical Staff</p>
                      <p className="font-bold text-gray-900">{dept.staff}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available Beds</p>
                      <p className="font-bold text-gray-900">{dept.beds}</p>
                    </div>
                  </div>
                </div>
                <Building2 className="w-16 h-16 text-blue-600 opacity-20 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Appointment Booking Page
  const AppointmentPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="text-gray-600">Schedule your consultation with our expert doctors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Info</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <Phone className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-bold text-gray-900">988988989</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-bold text-gray-900">Jaipur, India</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <Clock className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Hours</p>
                <p className="font-bold text-gray-900">24/7 Available</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleAppointmentSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={appointmentForm.name}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={appointmentForm.email}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={appointmentForm.phone}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <select
                  required
                  value={appointmentForm.department}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, department: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>General Surgery</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="date"
                  required
                  value={appointmentForm.date}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="time"
                  required
                  value={appointmentForm.time}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <textarea
                placeholder="Additional message (optional)"
                value={appointmentForm.message}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // Emergency Page
  const EmergencyPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-red-900">Emergency Services</h1>
          <p className="text-red-700">24/7 Emergency Support - Available Always</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Emergency Contact */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-12 rounded-3xl text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Emergency Hotline</h2>
            <p className="text-2xl font-bold mb-6">988988989</p>
            <p className="text-lg mb-8">Call immediately for emergency assistance</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.open('tel:988988989')}
                className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Call Now
              </button>
              <button
                onClick={() => window.open('https://wa.me/988988989')}
                className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Trauma & Accidents', time: 'Immediate' },
            { title: 'Chest Pain', time: 'Immediate' },
            { title: 'Stroke Symptoms', time: 'Immediate' },
            { title: 'Severe Bleeding', time: 'Immediate' },
            { title: 'Difficulty Breathing', time: 'Immediate' },
            { title: 'Poisoning', time: 'Immediate' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border-l-4 border-red-500">
              <AlertCircle className="w-6 h-6 text-red-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-red-600 font-semibold">Response: {service.time}</p>
            </div>
          ))}
        </div>

        {/* Ambulance Service */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ambulance Service</h2>
          <p className="text-gray-600 mb-6">Our emergency ambulance service is available 24/7 with trained paramedics and life-support equipment.</p>
          <button
            onClick={() => window.open('tel:988988989')}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
          >
            Request Ambulance
          </button>
        </div>
      </div>
    </div>
  );

  // Facilities Page
  const FacilitiesPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Our Facilities</h1>
          <p className="text-gray-600">State-of-the-art medical equipment and infrastructure</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { title: 'ICU Beds', desc: '40 fully equipped intensive care beds with continuous monitoring' },
            { title: 'Operation Theaters', desc: '10 modern operation theaters with advanced equipment' },
            { title: 'Diagnostic Lab', desc: 'Complete pathology services with automated analyzers' },
            { title: 'Radiology', desc: 'CT scan, MRI, X-ray, and ultrasound facilities' },
            { title: 'Pharmacy', desc: '24/7 pharmacy with complete drug inventory' },
            { title: 'Blood Bank', desc: 'Complete blood banking and transfusion services' }
          ].map((facility, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.desc}</p>
            </div>
          ))}
        </div>

        {/* Advanced Equipment */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Equipment</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['Advanced CT Scanner', 'MRI Machine', '3D Ultrasound', 'Digital X-ray', 'Echocardiography', 'Ventilators', 'Defibrillators', 'Patient Monitors', 'Infusion Pumps'].map((equipment, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-900">
                ✓ {equipment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Testimonials Page
  const TestimonialsPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Patient Testimonials</h1>
          <p className="text-gray-600">Stories from our satisfied patients</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Rajesh Sharma', rating: 5, review: 'Excellent care and professional staff. My surgery went perfectly!' },
            { name: 'Priya Verma', rating: 5, review: 'Very clean facility and caring doctors. Highly recommended!' },
            { name: 'Amit Singh', rating: 5, review: 'Best hospital in Jaipur. Emergency team was amazing!' },
            { name: 'Neha Gupta', rating: 5, review: 'Great experience from admission to discharge. Thank you!' },
            { name: 'Vikas Yadav', rating: 5, review: 'Affordable prices and quality treatment. Very satisfied!' },
            { name: 'Anjali Mishra', rating: 5, review: 'Doctor Rajesh was excellent. Recovery has been smooth!' }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <p className="font-bold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Gallery Page
  const GalleryPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600">Tour our hospital facilities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Emergency Ward', 'Operation Theater', 'ICU Setup', 'Patient Rooms', 'Waiting Area', 'Pharmacy',
            'Diagnostic Lab', 'Reception', 'Cafeteria', 'Garden Area', 'Conference Room', 'Entrance Lobby'
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-100 to-cyan-100 h-64 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all cursor-pointer group overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ImageIcon className="w-20 h-20 text-blue-400 opacity-50" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <p className="text-white font-bold">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Blog Page
  const BlogPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Health Tips & Blog</h1>
          <p className="text-gray-600">Learn about health and wellness</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Heart Health Tips', excerpt: 'Learn how to maintain a healthy heart through diet and exercise.', category: 'Cardiology' },
            { title: 'Managing Diabetes', excerpt: 'Practical tips for managing blood sugar levels and living with diabetes.', category: 'Endocrinology' },
            { title: 'Back Pain Relief', excerpt: 'Discover exercises and treatments for chronic back pain.', category: 'Orthopedics' },
            { title: 'Mental Health Matters', excerpt: 'Understanding stress, anxiety, and how to seek help.', category: 'Mental Health' },
            { title: 'Nutrition Guide', excerpt: 'A complete guide to balanced diet and nutrition for wellness.', category: 'Nutrition' },
            { title: 'Sleep Better Tonight', excerpt: 'Tips to improve sleep quality and beat insomnia naturally.', category: 'Wellness' }
          ].map((article, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-blue-300" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">{article.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600">Get in touch with us anytime</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Rana Hospital, Jaipur, India</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">988988989</p>
              <p className="text-sm text-gray-500">24/7 Available</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@ranahospital.com</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">24 Hours / 7 Days</p>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">f</button>
                <button className="w-12 h-12 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all">𝕏</button>
                <button className="w-12 h-12 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all">📷</button>
                <button className="w-12 h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">▶</button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={contactForm.subject}
              onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <textarea
              placeholder="Your Message"
              required
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
          <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Rana Hospital, Jaipur, India</p>
              <button
                onClick={() => window.open('https://maps.google.com/?q=Jaipur')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-6 h-6" />
              <span className="font-bold">Rana Hospital</span>
            </div>
            <p className="text-gray-400">Your trusted healthcare partner providing excellent medical services.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => setCurrentPage('doctors')} className="block hover:text-white transition-colors">Doctors</button>
              <button onClick={() => setCurrentPage('contact')} className="block hover:text-white transition-colors">Contact</button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Information</h3>
            <div className="space-y-2 text-gray-400">
              <p>Jaipur, India</p>
              <p>988988989</p>
              <p>Available 24/7</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-600 rounded hover:bg-blue-700 transition-all">f</button>
              <button className="w-10 h-10 bg-blue-400 rounded hover:bg-blue-500 transition-all">𝕏</button>
              <button className="w-10 h-10 bg-pink-600 rounded hover:bg-pink-700 transition-all">📷</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rana Hospital. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );

  // WhatsApp Button
  const WhatsAppButton = () => (
    <button
      onClick={() => window.open('https://wa.me/988988989')}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center z-40"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );

  // Render Current Page
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'doctors': return <DoctorsPage />;
      case 'departments': return <DepartmentsPage />;
      case 'appointment': return <AppointmentPage />;
      case 'emergency': return <EmergencyPage />;
      case 'facilities': return <FacilitiesPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'gallery': return <GalleryPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Navigation />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Icon component for Hospital
const Hospital = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 6v12c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-4zm0 2l8 3v9c0 4.42-3.58 8-8 8s-8-3.58-8-8V7l8-3z" />
  </svg>
);

export default HospitalWebsite;
