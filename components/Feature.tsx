type FeatureProps = {
  title: string;
  description: string;
};

export const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className='relative flex flex-col justify-between overflow-hidden rounded-md border border-t3-purple-200/20 bg-white/5 transition-colors hover:border-t3-purple-300/50'>
      <div className='flex justify-center items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20'>
        <p className='   bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text text-transparent     leading-6 text-t3-purple-200     text-2xl font-bold '>
          {title}
        </p>
      </div>
      <div className='m-6 text-sm text-t3-purple-100 subpixel-antialiased md:text-base'>
        {description}
      </div>
    </div>
  );
};
