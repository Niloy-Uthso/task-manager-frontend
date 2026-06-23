// src/components/home/HowItWorks.jsx
import React from 'react';
import { MdPersonAdd, MdTask, MdCheckCircle } from 'react-icons/md';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MdPersonAdd className="text-5xl text-primary" />,
      step: 'Step 1',
      title: 'Create an Account',
      description: 'Sign up for free and start managing your tasks'
    },
    {
      icon: <MdTask className="text-5xl text-primary" />,
      step: 'Step 2',
      title: 'Add Your Tasks',
      description: 'Create tasks with title, description, and status'
    },
    {
      icon: <MdCheckCircle className="text-5xl text-primary" />,
      step: 'Step 3',
      title: 'Track Progress',
      description: 'Update status and watch your productivity grow'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-base-content/60 mt-2">Get started in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-2">
                    {step.icon}
                  </div>
                  <span className="badge badge-primary">{step.step}</span>
                  <h3 className="card-title text-lg">{step.title}</h3>
                  <p className="text-base-content/60 text-sm">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-base-content/20">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;