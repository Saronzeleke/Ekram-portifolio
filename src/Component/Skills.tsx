import React, { useState } from 'react';
import { skills } from '../data/data';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft'>('hard');

  const hardSkills = skills.filter(skill => skill.category === 'hard');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
        <span className="text-gold-600 dark:text-gold-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-gold-500 to-gold-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive blend of technical expertise and soft skills that drive successful 
            digital marketing campaigns and create impactful brand designs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('hard')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'hard'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'soft'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'hard' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Managing Social Media Accounts
                </h3>
                {hardSkills.slice(0, 5).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Running Digital Marketing Campaigns
                </h3>
                {hardSkills.slice(5).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'soft' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Communication & Leadership
                </h3>
                {softSkills.slice(0, 4).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Management & Adaptability
                </h3>
                {softSkills.slice(4).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why These Skills Matter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My combination of technical expertise and soft skills enables me to not only execute 
              successful marketing campaigns and create stunning designs, but also to communicate 
              effectively with clients, manage projects efficiently, and adapt to the ever-changing 
              digital landscape. This holistic approach ensures that every project delivers both 
              creative excellence and measurable business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;