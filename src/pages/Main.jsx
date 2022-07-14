import { CardList } from "../components/CardList";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { CircularProgress } from "@mui/material";

function Main() {
  const [catalog, setCatalog] = useState([])

  useEffect(()=> {
    getAllCategories().then(data => {
      setCatalog(data.categories)
    })
  }, [])

  return (
    <>
    {
      !catalog.length ? <CircularProgress/> : (
        <CardList catalog={catalog}/>
      )
    }
    </>
  )
}

export {Main}