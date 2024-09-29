import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const useTheme = () => {
  
  const value = useContext(ThemeContext)
  // console.log ("ETO VALUE v useTHEME", value)
  return value;
};

export default useTheme;