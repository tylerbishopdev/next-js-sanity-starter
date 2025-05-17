

const NotFound = () => {
  return (
    <div className="loader flex flex-col items-center justify-center h-[45rem] w-full mb-56">
      <div className="flex flex-col items-center">
        <div className="blackhole w-auto h-auto">
          <div className="blackhole-circle h-auto w-auto"></div>
          <div className="blackhole-disc h-auto w-auto"></div>
        </div>

        <div className="mt-6 w-full max-w-[600px] text-center">
          <h2 className="text-9xl font-bold mb-2 dark:drop-shadow-black drop-shadow-white drop-shadow-2xl font-mono text-foreground">404</h2>
          <p className="text-4xl font-bold font-mono dark:drop-shadow-black drop-shadow-white drop-shadow-2xl ">Page Not Found.</p>
          <p className="text-lg  font-medium font-mono dark:drop-shadow-black drop-shadow-white drop-shadow-2xl ">... and we looked everywhere</p>
          <div className="pt-10">
            <a href="/" className="text-lg dark:drop-shadow-black font-bold drop-shadow-white font-medium  drop-shadow-black drop-shadow-2xl mt-10 text-accent hover:brightness-150">back to home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;