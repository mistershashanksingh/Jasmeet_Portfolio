import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Database, Brain, BarChart3, GitBranch, Cloud } from "lucide-react";

const Skills = () => {
  useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      skills: ["Python", "Matlab", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      skills: ["Scikit-learn", "Tensorflow", "PyTorch"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="h-8 w-8" />,
      skills: ["Pandas", "NumPy", "Seaborn"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: ["PostgreSQL", "MySQL", "PSQL"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Github", "Jupyter", "VS Code"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cloud ML plateform",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["Google Vertex-ai", "Open-ai Model", "Google Cloud-imagen"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 aurora-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the data analytics stack, from data collection and analysis 
            to machine learning model deployment and cloud infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate stagger-${index + 1}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center scroll-animate">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  🏆
                </div>
                <h4 className="font-semibold text-gray-900">Prompt Design in Vertex AI </h4>
                <p className="text-sm text-gray-600">Machine Learning & AI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  📊
                </div>
                <h4 className="font-semibold text-gray-900">AI App With Gemini & Imagen</h4>
                <p className="text-sm text-gray-600">Machine Learning & AI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  🎯
                </div>
                <h4 className="font-semibold text-gray-900">Gen App With Gemini & Streamlit</h4>
                <p className="text-sm text-gray-600">Machine Learning & AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;