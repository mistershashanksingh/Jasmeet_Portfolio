import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import myImage from "../assets/mypic.jpeg";

const About = () => {
  useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white aurora-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Data Analytics with a strong foundation in analytics, machine learning,
            and artificial intelligence, dedicated to solving real-world problems through data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-animate-left">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-[258px] h-[258px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto">
                  <img
                    src={myImage}
                    alt="Professional"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-600 mt-4">Professional Photo</p>
            </div>
          </div>

          <div className="space-y-6 scroll-animate-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I recently completed my Masters in Data Anlytics with a focus on Machine Learning and AI.
                My academic journey has equipped me with strong analytical skills and a deep understanding
                of statistical methods, programming, and data visualization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about using data to tell compelling stories and drive business decisions.
                My goal is to bridge the gap between complex data analysis and practical business solutions,
                making insights accessible and actionable for stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg scroll-animate-scale stagger-1">
                <h4 className="font-semibold text-blue-900 mb-2">Education</h4>
                <p className="text-sm text-blue-700">Masters in Data Analytics</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg scroll-animate-scale stagger-2">
                <h4 className="font-semibold text-purple-900 mb-2">Focus Areas</h4>
                <p className="text-sm text-purple-700">ML, AI & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
