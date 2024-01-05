import React, { useEffect, useState } from "react";
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';
  
  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <CircularProgressWithLabel value={progress} />;
  }


  export const SpaceGame = () => {
    const [banner, setBanner] = useState(true);
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                setBanner(false);
              }, 500);
              return 100;
            } else {
              return prevProgress + 1;
            }
          });
        }, 50); // Atualize a cada 50 milissegundos
    
        return () => clearInterval(interval);
      }, []); // O useEffect será executado uma vez após a montagem do componente
  
    return (
      <div className="h-[100vh] w-full relative flex justify-center md:items-center">
        {banner && (
          <div className="absolute bg-black flex flex-col gap-8 justify-center items-center w-full h-full object-cover">
            <img src="/public/bannergame.png" alt="" className="md:w-1/2 w-[90%] md:h-1/2" />
            <CircularProgressWithLabel value={progress} color="info" size={'60px'} />
          </div>
        )}
        <iframe src="/src/screens/game/game.html" className="w-full h-full"></iframe>
      </div>
    );
  };
