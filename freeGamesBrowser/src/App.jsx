import { fetchData } from "./components/fetchData";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

export default function App(){
const [gameListResult, setGameListResult] = useState(null);
useEffect(()=>{
async function awaitdata(){
    const result = fetchData("https://free-to-play-games-database.p.rapidapi.com/api/filter");
    setGameListResult(result);
}
awaitdata()
},[]);
console.log(gameListResult);
return (
 <NavBar></NavBar>
 );
}