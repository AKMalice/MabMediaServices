import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "MabMedia transformed our business with a stunning e-commerce platform. Sales increased by 150% in the first quarter after launch, and the user experience has received outstanding feedback from our customers.",
      author: "Ahmed Khan",
      position: "CEO, TechStyle",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 2,
      content: "The custom ERP solution developed by MabMedia has streamlined our operations and improved efficiency by 40%. Their team understood our complex requirements and delivered a system that perfectly fits our needs.",
      author: "Sophia Williams",
      position: "Operations Director, Global Manufacturing",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 3,
      content: "Working with MabMedia on our healthcare portal was a seamless experience. Their attention to detail, security focus, and innovative approach resulted in a platform that has improved patient satisfaction scores by 35%.",
      author: "Dr. Imran Malik",
      position: "Medical Director, HealthFirst Clinic",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
    },
    {
      id: 4,
      content: "Our educational institution needed a comprehensive learning management system, and MabMedia delivered beyond our expectations. The platform is intuitive, feature-rich, and has made remote learning effective and engaging.",
      author: "Aisha Mahmood",
      position: "Principal, Excellence Academy",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 4,
    },
    {
      id: 5,
      content: "MabMedia's expertise in developing our real estate listing portal has been instrumental in our market expansion. The advanced search features and virtual tours have given us a competitive edge in the industry.",
      author: "James Wilson",
      position: "Director, Premium Properties",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      rating: 5,
    },
    {
      id: 6,
      content: "The restaurant ordering system developed by MabMedia has revolutionized our business model. Online orders have increased by 85%, and the integration with our kitchen management system has improved service times significantly.",
      author: "Fatima Ali",
      position: "Owner, Spice Fusion Restaurant",
      avatar: "https://randomuser.me/api/portraits/women/89.jpg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Don't just take our word for it. Here's what our clients have to say about our software development services.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Featured Testimonial */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md relative">
            <div className="absolute -top-5 left-10 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <div className="flex mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-gray-600 italic text-lg mb-6">"{testimonials[currentIndex].content}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-500">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our satisfied clients and experience the MabMedia difference in software development services.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
