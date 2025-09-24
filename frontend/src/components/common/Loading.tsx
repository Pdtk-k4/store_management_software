import React from 'react';
import { Spin } from 'antd';

interface LoadingProps {
  size?: 'small' | 'default' | 'large';
  tip?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'default', 
  tip = 'Đang tải...', 
  className = '' 
}) => {
  return (
    <div className={`flex justify-center items-center p-8 ${className}`}>
      <Spin size={size} tip={tip} />
    </div>
  );
};

export default Loading;