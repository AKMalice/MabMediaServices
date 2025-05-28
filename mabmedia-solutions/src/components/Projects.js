import React, { useState } from 'react';
import gc1 from '../images/gc1.png';
import gc2 from '../images/gc2.png';
import gc3 from '../images/gc3.png';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import ua1 from '../images/ua1.png';
import ua2 from '../images/ua2.png';
import ua3 from '../images/ua3.png';
import ah1 from '../images/ah1.png';
import ah2 from '../images/ah2.png';
import ah3 from '../images/ah3.png';


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Global Chess Academy",
      category: "Education",
      image: gc1,
      mockups: [
        gc2,
        gc3,
      ],
      description: "A comprehensive chess academy website with event registration, content management, and student engagement features.",
      link: "https://www.globalchessacademy.co.in/",
      benefits: [
        "Interactive event registration system for chess tournaments",
        "Admin dashboard for managing registrations and content",
        "Media gallery for showcasing chess events and achievements",
        "Analytics dashboard for tracking user engagement",
      ]
    },
    {
      id: 2,
      title: "Princess Fashion Institute",
      category: "Education",
      image: p1,
      mockups: [
        p2,
        p3,
      ],
      description: "An ERP system for a fashion institute with course management and WhatsApp integration for instant client communication.",
      link: "https://princessfashioninstitute.com/",
      benefits: [
        "Comprehensive course catalog and management",
        "Student inquiry and registration system",
        "WhatsApp integration for instant client communication",
        "Admin dashboard for content management"
      ]
    },
    {
      id: 4,
      title: "AP State Urdu Academy",
      category: "Government",
      image: ua1,
      mockups: [
        ua2,
        ua3,
      ],
      description: "A government website for promoting Urdu language and culture, featuring events, magazines, job listings, and workshop information.",
      link: "https://apstateurduacademy.com/",
      benefits: [
        "Event management and promotion system",
        "Digital magazine publishing platform",
        "Job openings and recruitment portal",
        "Workshop and scheme information center",
        "Organization overview and cultural content"
      ]
    },
    {
      id: 3,
      title: "Al Hasanain School",
      category: "Education",
      image: ah1,
      mockups: [
        ah2,
        ah3,
      ],
      description: "A comprehensive school ERP system for managing student data, marks, classes, and generating report cards.",
      link: "https://alhasanainschool.com/",
      benefits: [
        "Student data and attendance management",
        "Marks and grade tracking system",
        "Class and section management",
        "Automated report card generation",
        "Teacher and staff management portal"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Take a look at some of our recent projects and the success stories from our satisfied clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="card overflow-hidden group"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <button 
                  className="text-primary font-medium hover:underline flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {activeProject.mockups.map((mockup, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={mockup} 
                        alt={`${activeProject.title} Mockup ${index + 1}`} 
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Project Overview</h4>
                  <p className="text-gray-600">{activeProject.description}</p>
                  
                  <div className="mt-4">
                    <a 
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center"
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Project Benefits</h4>
                  <ul className="space-y-3">
                    {activeProject.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
