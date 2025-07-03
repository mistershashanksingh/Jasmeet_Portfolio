import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database } from "lucide-react";

const Projects = () => {
  useScrollAnimation();

  const projects = [
    {
      title: "Trifid-portal-demo",
      description: "This project is a fully AI-powered marketing analytics dashboard tailored for creative and digital marketing agencies like Trifid Media. It is built to track campaign performance, compare multi-platform data, and interact with insights via a streamlined user interface.",
      technologies: ["Python", "Pandas", "Streamlit", "Altair", "Langchain", "OpenAI"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      metrics: ["Campaign Click-Through Rate (CTR)", "Conversion Rate", "Return on Ad Spend (ROAS)"],
      githubRepo: "https://github.com/Jasmeet0810/trifid-portal-demo",
      liveDemo: "https://trifid-app-demo-nexrqdv48xzbpdnwthqplp.streamlit.app/",
      detailsFile: "https://github.com/Jasmeet0810/trifid-portal-demo/blob/main/README.md"
    },
    {
      title: "Handwritten-Digital-Recognition",
      description: "Handwritten Digit Recognition This project implements a machine learning model for recognizing handwritten digits using the MNIST dataset.The model takes grayscale images of digits (0–9) and predicts the correct numerical labelusing a trained neural network or classical machine learning algorithm.",
      technologies: ["Python", "Numpy", "Pytorch", "Google-colab", "Torchvision", "Matplotlib"],
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      metrics: ["Accuracy", "Precision", "Recall"],
      githubRepo: "https://github.com/Jasmeet0810/Handwritten-Digital-Recognition",
      liveDemo: "https://github.com/Jasmeet0810/Handwritten-Digital-Recognition/blob/main/Handwritten_Digital_Recognition.ipynb",
      detailsFile: "https://github.com/Jasmeet0810/Handwritten-Digital-Recognition/blob/main/README.md"
    },
    {
      title: "Depression-Detection-Using-Time-Series-Model",
      description: "This project focuses on detecting depression using time series modeling techniques applied to EEG data.By analyzing brainwave patterns over time, we aim to build accurate and robust models to classify depressive and non-depressive states.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "PyTorch", "xgboost"],
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      metrics: ["Accuracy", "F1-Score", "Sensitivity (Recall for depressive cases)"],
      githubRepo: "https://github.com/Jasmeet0810/Depression-Detection-Using-Time-Series-Model",
      liveDemo: "https://github.com/Jasmeet0810/Depression-Detection-Using-Time-Series-Model/tree/main/Models",
      detailsFile: "https://github.com/Jasmeet0810/Depression-Detection-Using-Time-Series-Model/blob/main/README.md"
    },
    {
      title: "Real-Estate-Price-Estimator-Square-Footage-Rooms-Based-Regression",
      description: "Real Estate Price Estimator A simple Linear Regression model to predict real estate prices based on square footage and number of rooms. Built with pandas, scikit-learn, and seaborn, and fully runnable in Google Colab.",
      technologies: ["Python", "Pandas", "Matplot", "Seaborn", "scikit-learn"],
      icon: <Database className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
      metrics: ["Mean Absolute Error (MAE)", "Mean Squared Error (MSE)", "R² Score"],
      githubRepo: "https://github.com/Jasmeet0810/Real-Estate-Price-Estimator-Square-Footage--Rooms-Based-Regression.",
      liveDemo: "https://github.com/Jasmeet0810/Real-Estate-Price-Estimator-Square-Footage--Rooms-Based-Regression./blob/main/Main..ipynb",
      detailsFile: "https://github.com/Jasmeet0810/Real-Estate-Price-Estimator-Square-Footage--Rooms-Based-Regression./blob/main/README.md"
    }
  ];

  const handleGithubClick = (repoUrl: string) => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveDemoClick = (demoUrl: string) => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewDetailsClick = (detailsUrl: string) => {
    window.open(detailsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-white aurora-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of data science projects demonstrating expertise in machine learning,
            data analysis, and end-to-end solution development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate stagger-${index + 1}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white`}>
                  {project.icon}
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 hover:text-grey-100"
                    onClick={() => handleGithubClick(project.githubRepo)}
                    title="View GitHub Repository"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 hover:bg-gray-100"
                    onClick={() => handleLiveDemoClick(project.liveDemo)}
                    title="View Live Demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  className={`bg-gradient-to-r ${project.color} text-white hover:opacity-90 flex-1`}
                  onClick={() => handleViewDetailsClick(project.detailsFile)}
                >
                  View Details
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 transition duration-300 ease-in-out hover:bg-grey-100 hover:shadow-md"
                  onClick={() => handleLiveDemoClick(project.liveDemo)}
                >
                  Live Demo
                </Button>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects</h3>
            <p className="text-gray-600 mb-6">
              Explore my complete portfolio on GitHub to see additional projects,
              code samples, and contributions to open-source data science tools.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
              onClick={() => window.open('https://github.com/Jasmeet0810', '_blank', 'noopener,noreferrer')}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;