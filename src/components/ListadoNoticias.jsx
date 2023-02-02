import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import Noticia from "./Noticia"

export default function ListadoNoticias() {

    const { noticias, totalNoticias, pagina, handleChangePagina } = useNoticias()
    console.log(totalNoticias);

    return (
        <>
            <Typography
                textAlign = 'center'
                marginY = {5}
                variant= 'h3'
                component='h2'
            >
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {noticias.map( noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignContent={'center'}
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={Math.ceil(totalNoticias/20)}
                    color='primary'
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}
