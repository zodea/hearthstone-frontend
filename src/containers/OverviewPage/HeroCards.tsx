import { Box, CardMedia, CircularProgress, Container, Fade, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useHerosNameQuery } from '/~/graphql/hero'
import { Hero } from '/~/types/graphql'
import { lowerCase, trimUpperFirst } from '/~/utils/stringUtil'

const setHeroName = (string: string) => {
  const reg = /\w+\s\w+/g
  return reg.test(string) ? trimUpperFirst(string) : lowerCase(string)
}
const setHeroImage = (string: string, status = 'static') =>
  new URL(`/~/assets/images/avatar/${setHeroName(string)}_${status}.png`, import.meta.url).href

function HeroItem(
  heros: Omit<Hero, 'arenaWins'>[] | undefined,
  {
    navigate,
    setIndex,
    currentIndex,
  }: {
    navigate: NavigateFunction
    setIndex: React.Dispatch<React.SetStateAction<number>>
    currentIndex: number
  },
) {
  return (
    <>
      {heros?.map((item) => {
        return (
          <Grid sm={4} md={2.4} key={item.id} sx={{ position: 'relative' }}>
            <CardMedia
              onMouseOver={() => setIndex(item.id)}
              onMouseLeave={() => setIndex(0)}
              onClick={() => navigate(`hero/${setHeroName(item.name)}`)}
              component="img"
              src={setHeroImage(item.name, currentIndex === item.id ? 'hover' : 'static')}
            />
            <Typography
              variant="h4"
              align="center"
              sx={{
                width: '100%',
                position: 'absolute',
                top: '60%',
                left: 0,
                color: '#fff',
                textShadow:
                  'rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px, rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px, rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px, rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px, rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px, rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px, rgb(0 0 0) 1.92034px -0.55883px 0px',
                pointerEvents: 'none',
                fontSize: 'calc(20.25px + 4.75 * ((100vw - 375px) / 1225))',
              }}
            >
              {item.nameCN}
            </Typography>
          </Grid>
        )
      })}
    </>
  )
}

export default function HeroCards() {
  const [currentIndex, setIndex] = useState(0)
  const navigate = useNavigate()
  const [heros, reExecuteQuery] = useHerosNameQuery()

  const { data, fetching, error } = heros

  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div
      style={{
        background: 'url("/~/assets/images/background/heroBg.jpg") left top repeat',
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ padding: '48px 0' }}>
        <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: '20px' }}>
          {' '}
          选择一个英雄 查看战绩详情{' '}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}
            display="flex"
            justifyContent="center"
          >
            {fetching ? (
              <Fade
                in={fetching}
                style={{
                  transitionDelay: fetching ? '400ms' : '0ms',
                }}
                unmountOnExit
              >
                <CircularProgress />
              </Fade>
            ) : (
              HeroItem(data?.heros, { navigate, setIndex, currentIndex })
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
