import { TypeAnimation } from 'react-type-animation';

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        'Coder',
        1500, 
        'Designer',
        1500,
        'Web developer',
        1500,
        'Tester',
        1500
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#34d7f4] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffects;