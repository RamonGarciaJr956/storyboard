import React from 'react';

interface MasonryLayoutProps {
  children: React.ReactNode;
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="break-inside-avoid">
          {child}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;