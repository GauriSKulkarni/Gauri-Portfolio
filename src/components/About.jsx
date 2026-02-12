import React from 'react';

const About = () => {
  const skills = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Next.js', 'GraphQL'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate Full Stack Developer with 3+ years of experience 
                  building web applications. I specialize in React, Node.js, and 
                  modern JavaScript technologies.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I love solving complex problems and creating elegant solutions
              that provide great user experiences. When I'm not coding, you can
              find me contributing to open-source projects or mentoring aspiring developers.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">10+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;