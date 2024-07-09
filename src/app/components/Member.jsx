import React from 'react';
import Image from 'next/image';

const Member = () => {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      description: 'Software Engineer'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150',
      description: 'UI/UX Designer'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      image: 'https://via.placeholder.com/150',
      description: 'Project Manager'
    },
    {
      id: 4,
      name: 'Alice Wisdlliams',
      image: 'https://via.placeholder.com/150',
      description: 'QA Specialist'
    }
  ];

  return (
    <div className="member-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="member-card bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="w-full h-48 overflow-hidden rounded-t-lg" >
          <Image
            src={member.image}
            alt={member.name}
            className="rounded-t-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rounded-t-lg"
            width={500}
            height={300}
          />
          </div>
          <div className="p-4">
            <h3 className="text-black text-lg font-medium mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;