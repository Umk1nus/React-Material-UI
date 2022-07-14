import { CardCategory } from "./CardCategory";
import { Stack } from "@mui/material";

function CardList(props) {

  const {catalog} = props

  return(
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      spacing={2}
      mt={5}
    >
      {catalog.map(el => (
        <CardCategory key={el.idCategory} {...el}/>
      ))}
    </Stack>
  )
}

export {CardList}