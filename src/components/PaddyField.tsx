import PaddyAnimation from './PaddyAnimation';

interface PaddyFieldProps {
  count?: number;
  className?: string;
}

const PaddyField = ({ count = 7, className = '' }: PaddyFieldProps) => {
  return (
    <div className={`flex items-end justify-center gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <PaddyAnimation
          key={index}
          delay={index * 150}
          size={index % 3 === 0 ? 'lg' : index % 2 === 0 ? 'md' : 'sm'}
          className={index % 2 === 0 ? 'translate-y-2' : ''}
        />
      ))}
    </div>
  );
};

export default PaddyField;
