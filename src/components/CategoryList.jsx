import { Stack } from "@mui/material"
import { CategoryItem } from "./CategoryItem"

function CategoryList({meals}) {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap"
    spacing={2}
    mt={5}
  >
    {meals.map(el => (
      <CategoryItem key={el.idMeal} {...el}/>
    ))}
  </Stack>
  )
}

export {CategoryList}