import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-10 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* College Education */}
          <div className="border p-4 rounded">
            <h3 className="text-xl font-bold">
              I.K. Gujral Punjab Technical University
            </h3>
            <p className="italic">
              Bachelor’s of Engineering: Computer Science and Engineering
            </p>
            <p>(Sep 2021 - Oct 2025)</p>
            <p className="mt-2">
              A renowned institution recognized for advancing technical
              education and innovation under the aegis of the Government of
              Punjab.
            </p>
            <h4 className="text-lg font-semibold mt-4">Relevant Coursework:</h4>
            <ul className="list-disc list-inside">
              <li>Object Oriented Programming Systems</li>
              <li>Data Structures and Algorithms</li>
              <li>Software Design</li>
              <li>Computer Networking</li>
              <li>Database Management Systems</li>
              <li>Operating Systems</li>
              <li>Discrete Mathematics</li>
              <li>Digital Electronics</li>
            </ul>
          </div>

          {/* Senior Secondary Education */}
          <div className="border p-4 rounded">
            <h3 className="text-xl font-bold">
              Govt. Senior Secondary School, Boys Nangal Township
            </h3>
            <p className="italic">Senior Secondary (Non-Med, PCM)</p>
            <p>(Passed: 2021, Obtained: 82%)</p>
            <p className="mt-2">
              Successfully completed my 12th grade with a focus on Physics,
              Chemistry, and Mathematics.
            </p>

            <h3 className="text-xl font-bold mt-6">
              Govt. High School, Daroli
            </h3>
            <p className="italic">High School (10th Grade)</p>
            <p>(Passed: 2019, Obtained: 75%)</p>
            <p className="mt-2">
              Completed 10th grade, covering all subjects including Computer
              Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
