

export const Header = (): JSX.Element => {
  return (
    <section className="grid grid-cols-3 mt-4 px-4 fixed w-full z-50">
      <div className="col-span-1 flex items-center">
            <img src="logo.svg" alt="" />
      </div>

      <div className="col-span-2 hidden lg:block">
        <div className="bg-black w-full h-12 rounded-full shadow-md shadow-neutral-800/10 flex justify-between gap-4 px-12 items-center">
            <a href="#Home" className="text-white opacit">Home</a>
            <a href="#About" className="text-white">About</a>
            <a href="#Projects" className="text-white">Projects</a>
            <a href="#MyLinks" className="text-white">My links</a>
            <a href="/game" target="_blank"><img src="control.svg" alt="" className="object-cover h-10" /></a>
        </div>
      </div>
      <div className="col-span-2 lg:hidden flex justify-end px-2 ">
        
            <a href="/game" target="_blank"><img src="control.svg" alt="" className="object-cover h-8" /></a>
        
      </div>
    </section>
  );
};
