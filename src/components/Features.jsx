// src/components/home/Features.jsx
import React from 'react';
import { MdAddTask, MdList, MdEdit, MdDelete, MdCheckCircle, MdTrendingUp } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      icon: <MdAddTask className="text-4xl text-primary" />,
      title: 'Add Tasks',
      description: 'Quickly add tasks with title, description, and status'
    },
    {
      icon: <MdList className="text-4xl text-primary" />,
      title: 'View All Tasks',
      description: 'See all your tasks in a clean, organized layout'
    },
    {
      icon: <MdEdit className="text-4xl text-primary" />,
      title: 'Update Status',
      description: 'Change task status from To Do to In Progress to Done'
    },
    {
      icon: <MdDelete className="text-4xl text-primary" />,
      title: 'Delete Tasks',
      description: 'Remove tasks you no longer need'
    },
    {
      icon: <MdCheckCircle className="text-4xl text-primary" />,
      title: 'Track Progress',
      description: 'Monitor your productivity and task completion'
    },
    {
      icon: <MdTrendingUp className="text-4xl text-primary" />,
      title: 'Stay Organized',
      description: 'Keep all your tasks in one place and stay on top of things'
    }
  ];

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
          <p className="text-base-content/60 mt-2">Everything you need to manage your tasks efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="card-title text-lg">{feature.title}</h3>
                <p className="text-base-content/60 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;