import React from "react";
import { Stack} from "@mui/material";

export default function ResulBox(props){
   
    return(
        <div>
        <Stack direction="row" justifyContent="center">
      <h2  style={{ color: props.resul_value=== `"${props.fruits_value}" does not exit.` ? "red" : "black" }}>{props.resul_value}</h2>
      </Stack>
     </div>
    );
   
}