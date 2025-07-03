import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  useScrollAnimation();

  const education = [
    {
      degree: "Master of Science in Data Analytics",
      institution: "AMITY University, Noida",
      period: "2023 - 2025",
      cgpa: "8.5/10",
      description: "Specialized in Machine Learning, Deep Learning, and Statistical Analysis. Completed thesis on 'Detecting depression using time series modeling techniques applied to EEG'.",
      courses: ["Advanced Machine Learning", "Deep Learning", "Statistical Methods", "Big Data Analytics", "Data Mining"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "AMITY University, Noida",
      period: "2020 - 2023",
      cgpa: "10/10",
      description: "Strong foundation in computer science with focus on mathematics, statistics, and programming.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Statistics", "Linear Algebra"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white aurora-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in data analytics, computer science, and advanced analytics.
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow scroll-animate stagger-${index + 1}`}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                      <span className="text-gray-600">{edu.period}</span>
                      <span className="hidden sm:block text-gray-400">•</span>
                      <span className="text-green-600 font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm border border-blue-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    🎓
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
