import React from "react";

const Welcome = () => {
  return (
    <section className="md:px-14 p-4">
      <div className="w-full flex md:flex-row flex-col items-center my-14 gap-10">
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold font-mono mb-6">
            Welcome to{" "}
            <span className="text-blue-600">GetWell Clinic Center</span>
          </h1>
          <p className="text-md">
            Health centers are community-based and patient-directed
            organizations that deliver comprehensive, culturally competent,
            high-quality primary health care services to the nation’s most
            vulnerable individuals and families, including people experiencing
            homelessness, agricultural workers, residents of public housing, and
            veterans.
            <br />
            <br /> Health centers integrate access to pharmacy, mental health,
            substance use disorder, and oral health services in areas where
            economic, geographic, or cultural barriers limit access to
            affordable health care. By emphasizing coordinated care management
            of patients with multiple health care needs and the use of key
            quality improvement practices, including health information
            technology, health centers reduce health disparities.
          </p>
        </div>
        <div className="w-full md:w-2/5 text-center">
          <img
            src="https://i.ibb.co/M2wcTXP/Portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-corridor.jpg"
            alt="welcome-face"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
