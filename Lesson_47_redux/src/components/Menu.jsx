import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Box, Grid } from "@mui/material" 
import { setCurrentPage } from "../store/page.slice"
import { getRecipesByMenu } from "../store/recipes.slice"
import { selectMenu, getMenuStatus } from "../store/menu.slice"
import { getMenu } from "../store/menu.slice"

export default function Menus() {
  const menu = useSelector(selectMenu)
  const status = useSelector(getMenuStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      {status === 'error' && <h1>Error loading menu</h1>}
      <Grid container spacing={2} columns={6}>
        {menu.map((item) => (
          <Grid item key={item} xs={2}>
            <Box 
              onClick={() => {
                dispatch(getRecipesByMenu(item))
                dispatch(setCurrentPage('selected-menu'))
              }}
              sx={{
                paddingY: '50px', 
                textAlign: 'center', 
                '&:hover': { 
                  backgroundColor: 'lightblue',
                  color: 'white',
                  cursor: 'pointer'
                },
              }}
            >
              {item}
            </Box>
          </Grid>         
        ))}
      </Grid>
    </>
  )
}

/*
return (
    <>
      {status === 'pending' && <h1>Loading...</h1>} 
      <Grid container spacing={2} columns={6}>
            {menu.map((item) => (
              <Grid key={item} size={2}> 
                <TabContext value={tabValue}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="Menu tabs">
                      <Tab label="Список меню" value="1" />
                      <Tab label="Таблица рецептов" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                     <div>Таблица здесь</div>
                  </TabPanel> 
                </TabContext>
              </Grid>
            ))}
        </Grid> 
    </>
  )  
*/
