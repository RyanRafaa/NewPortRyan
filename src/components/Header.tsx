

export const Header = (): JSX.Element => {
  return (
    <section className="grid grid-cols-3 mt-4 px-4 fixed w-full z-50">
      <div className="col-span-1 flex items-center">
            <img src="/public/logo.svg" alt="" />
      </div>

      <div className="col-span-2 hidden lg:block">
        <div className="bg-black w-full h-12 rounded-full shadow-md shadow-neutral-800/10 flex justify-between gap-4 px-12 items-center">
            <a href="" className="text-white">Home</a>
            <a href="" className="text-white">About</a>
            <a href="" className="text-white">Projects</a>
            <a href="" className="text-white">Contact</a>
            <a href="" className="text-white">My links</a>
            <a href=""><img src="/public/control.svg" alt="" className="object-cover h-10" /></a>
        </div>
      </div>
      <div className="col-span-2 lg:hidden flex justify-end px-2 ">
        
            <a href=""><img src="/public/control.svg" alt="" className="object-cover h-8" /></a>
        
      </div>
    </section>
  );
};
