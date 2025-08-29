import React, { useState, useMemo } from 'react';

const steps = [
  { label: 'Beginning' },
  { label: 'In Progress' },
  { label: 'Completed' },
];


const ProgressSteps = React.memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  // To change the color of the progress bar words, modify the 'wordColor' variable below.
  // Example: const wordColor = '#FF790C';
  const wordColor = '#FF790C';

  // Calculate bar width based on active step
  const barWidth = useMemo(() => `${(activeStep / (steps.length - 1)) * 100}%`, [activeStep]);

  return (
    <div className="w-full flex flex-col plus-jakarta-sans items-center py-10">
      {/* To change the color of the progress bar words, edit the 'wordColor' variable above. */}
      <div className="relative w-full max-w-2xl flex flex-col items-center" style={{ height: '80px' }}>
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full" style={{ transform: 'translateY(-50%)' }} />
        {/* Animated orange bar */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-orange-500 rounded-full transition-all duration-500"
          style={{ width: barWidth, transform: 'translateY(-50%)' }}
        />
        {/* Step circles */}
        <div className="flex w-full justify-between relative z-10">
          {steps.map((step, idx) => (
            <button
              key={step.label}
              className="flex flex-col items-center focus:outline-none"
              onClick={() => setActiveStep(idx)}
              aria-label={`Go to ${step.label}`}
              style={{ position: 'relative', top: '0' }}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
                  activeStep === idx
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-orange-500 bg-white text-orange-500'
                }`}
                style={{ marginBottom: '-7px' }}
              >
                {activeStep === idx ? (
                  <span className="w-6 h-6 rounded-full bg-white" />
                ) : (
                  <span className="w-6 h-6 rounded-full bg-orange-500 opacity-0" />
                )}
              </div>
              <span
                className={`mt-2 font-semibold text-lg transition-colors duration-300`}
                style={{ color: activeStep === idx ? wordColor : '#444' }}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProgressSteps;
