import { Header } from "../../components/Header";
import { useEffect, useState } from 'react';
import "./Home.css";
import MyCarousel from "../../components/ui/carouselProjects";




export const Home = () => {
  const TextAnimation = ({ texts, onFinish }:any) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');


    useEffect(() => {
      let index = 0;
      let intervalId: any;

      const animateText = () => {
        intervalId = setInterval(() => {
          if (index <= texts[currentTextIndex].length) {
            setDisplayText(texts[currentTextIndex].substring(0, index));
            index++;
          } else {
            clearInterval(intervalId);
            setTimeout(() => {

              setCurrentTextIndex((prevIndex) =>
                prevIndex < texts.length - 1 ? prevIndex + 1 : prevIndex
              );
              onFinish();
            }, 100);
          }
        }, 100);
      };

      animateText();


      return () => clearInterval(intervalId);
    }, [texts, currentTextIndex, onFinish]);

    return <span>{displayText}</span>;
  };


  const TextsOne = ['Hi, my name is'];
  const TextsTwo = ['Ryan Rafael'];
  const TextsThree = ["i'm a"];
  const TextsFour = ['Developer'];


  const [textOneFinished, setTextOneFinished] = useState(false);
  const [textTwoFinished, setTextTwoFinished] = useState(false);
  const [textThreeFinished, setTextThreeFinished] = useState(false);
  const [textFourFinished, setTextFourFinished] = useState(false);
  const [Finished, setFinished] = useState(false);

  const handleTextOneFinish = () => {
    setTextOneFinished(true);
  };

  const handleTextTwoFinish = () => {
    setTextTwoFinished(true);
  };

  const handleTextThreeFinish = () => {
    setTextThreeFinished(true);
  };
  const handleTextFourFinish = () => {
    setTextFourFinished(true);
    setFinished(true);
  };



 



  return (
    <div className="overflow-clip">
      <Header />






      <div className="h-[100vh] relative flex justify-center items-center" id="section1" >



        <div className="absolute bottom-0 right-0 triangle-two z-10 "></div>
        <img src="/public/ryan.png" alt="" className="xl:h-[90%] h-[70%] absolute bottom-0 left-0 " />
        <div className="bg"></div>

        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>

        <div className="w-full flex flex-col sm:justify-center h-3/4 items-center gap-2 text-start md:h-1/2 z-10 text-white font-extrabold">
          <div>
            <h3 className="text-sm md:text-2xl">
              {textOneFinished ? TextsOne : <TextAnimation texts={TextsOne} onFinish={handleTextOneFinish} />}
            </h3>
            {textOneFinished && (
              <h1 className="text-4xl md:text-6xl lg:text-9xl ">
                {textTwoFinished ? TextsTwo : <TextAnimation texts={TextsTwo} onFinish={handleTextTwoFinish} />}
              </h1>
            )}
          </div>
          {textTwoFinished && textOneFinished && (
            <div className="flex flex-row sm:gap-8 gap-2">
              <h3 className="text-sm md:text-2xl">
                {textThreeFinished ? TextsThree : <TextAnimation texts={TextsThree} onFinish={handleTextThreeFinish} />}
              </h3>
              {textThreeFinished && textTwoFinished && textOneFinished && (
                <h1 className="text-4xl md:text-6xl lg:text-9xl ">
                  {textFourFinished ? TextsFour : <TextAnimation texts={TextsFour} onFinish={handleTextFourFinish} />}
                </h1>
              )}
            </div>
          )}
          {textFourFinished && textThreeFinished && textTwoFinished && textOneFinished && Finished && (
            <div className=" w-1/2 md:h-12 h-8 sm:mt-2 p-2 flex gap-4 justify-center">
              <img className='h-full fade-in-initial slide-in-left' src="/public/js.png" alt="" />
              <img className='h-full fade-in-initial slide-in-left' src="/public/typescript.png" alt="" />
              <img className='h-full fade-in-initial slide-in-left' src="/public/css.png" alt="" />
              <img className='h-full fade-in slide-in-left' src="/public/html.png" alt="" />
              <img className='h-full fade-in slide-in-left' src="/public/react.png" alt="" />
              <img className='h-full fade-in slide-in-left' src="/public/nodejs.png" alt="" />
            </div>
          )}


        </div>
      </div>


      <div className="h-[100vh] relative bg-gradient-to-b from-gray-300 via-gray-200 to-gray-500 w-full" id="section2" >
        <div className="absolute right-0 triangle"></div>
        <div className="absolute bottom-0 triangle-three"></div>
      </div>


      <div className="h-[100vh] relative flex justify-center items-center w-full" id="section2" >
        <div className="absolute left-0 top-0 triangle-four"></div>
        <div className=" h-1/2 w-full flex justify-center items-center ">
        <img src="/public/logo.svg" alt="" className="w-1/2"/>
        </div>
        {/* <div className="absolute bottom-0 triangle-three"></div> */}
      </div>
      <div className="h-[100vh] bg-gradient-to-b from-black via-zinc-950 to-black relative flex justify-center items-center w-full" id="section2" >
        <MyCarousel/>
        {/* <div className="absolute bottom-0 triangle-three"></div> */}
      </div>
      <div className="h-[100vh] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-500 relative flex justify-center items-center w-full" id="section2" >
        
        {/* <div className="absolute bottom-0 triangle-three"></div> */}
      </div>

      <div className="h-[20vh] bg-cyan-700" id="section3">
        
      </div>
    </div>
  );
};
