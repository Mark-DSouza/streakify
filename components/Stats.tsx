const Stats = () => (
  <div className='flex justify-center items-center gap-8 my-7 mx-7 h-full'>
    <div className='flex flex-col gap-5 items-center h-full justify-between'>
      <p className='text-3xl'>👍</p>
      <div className='score positive'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl font-bold text-green-400'>151</p>
          <p className='text-3xl font-medium text-green-400'>days</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-5 items-center'>
      <p className='text-3xl'>👎</p>
      <div className='score negative'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl font-bold text-rose-600'>3</p>
          <p className='text-3xl font-medium text-rose-600'>days</p>
        </div>
      </div>
    </div>
    {/* <span class="text-[hsl(200,100%,60%)] astro-IGGOON27"> full-stack,</span> */}
  </div>
);

export default Stats;
