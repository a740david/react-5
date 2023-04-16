import { useState } from "react"
import { Button, TextField,Stack} from "@mui/material";
import ResulBox from './ResulBox';
export default function SearchBox() {
    const [fruitsValue,setFruitsValue]=useState('');
    const [resulValue, setresulValue] = useState('');

    const list_fruits=['apple','cucumber','tomato','pepper']
     
    const handleClick=()=>{
        

        if (list_fruits.includes(fruitsValue)) {  
            
            setresulValue(`"${fruitsValue}" is a fruit!.`);
          } else {
            setresulValue(`"${fruitsValue}" does not exit.`);
          }
    }

  return (
    <div >
    <Stack direction="row" justifyContent="center">
    <TextField
     label="Search"
     variant="outlined"
     size="small"
     
     onChange={(e)=>setFruitsValue(e.target.value)} >
     </TextField>
       <Button 
      
        size="normal"
        variant="contained"
         color="primary"
         
         onClick={handleClick}
         
        >
        Search
       </Button>
       
      
       </Stack>
       {
        <ResulBox fruits_value={fruitsValue} resul_value={resulValue}/>
       }
    </div>
  );
}
