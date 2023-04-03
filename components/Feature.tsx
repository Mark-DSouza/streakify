type FeatureProps = {
  title: string;
  children: React.ReactNode;
};

export const Feature: React.FC<FeatureProps> = ({ title, children }) => {
  return (
    <div className='overflow-hidden rounded-xl border bg-white/5 border-t3-purple-300/50 min-w-[24rem] min-h-[20rem]'>
      <div className='flex justify-center items-center p-4 bg-white/20'>
        <p className='bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold '>
          {title}
        </p>
      </div>

      {children}
      {/* <div className='m-6 text-sm text-t3-purple-100 subpixel-antialiased md:text-base'>
        {description}
      </div> */}
    </div>
  );
};
