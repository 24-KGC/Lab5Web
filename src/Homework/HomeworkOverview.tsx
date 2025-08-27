import React from 'react';
import Homework1 from './Homework1.tsx';
import Homework2 from './Homework2.tsx';
import Homework3 from './Homework3.tsx';

export default function HomeworkOverview() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Lab 5 Homework Overview</h1>
      <Homework1 />
      <Homework2 />
      <Homework3 />
    </div>
  );
}
