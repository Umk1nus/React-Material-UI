import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFilterByCategories} from "../api";
import { CircularProgress } from "@mui/material";
import { CategoryList } from "../components/CategoryList";

function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilterByCategories(name).then((data) => setMeals(data.meals));
  }, [name])

  return (
    <>
      {
        !meals.length ? <CircularProgress/> : (
          <CategoryList meals={meals}/>
        )
      }
    </>
  )
}

export {Category};