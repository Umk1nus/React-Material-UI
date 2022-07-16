import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { CircularProgress } from "@mui/material";

function Meal() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate()

  useEffect(()=> {
    getMealById(id).then((data)=> setRecipe(data.meals[0]));
  }, [id])

  return(
    <>
      <button onClick={()=> navigate(-1)}>назад</button>
      {
        !recipe.idMeal ? <CircularProgress/> : (
          <div className="card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </div>
        )
      }
    </>
  )
}

export {Meal}