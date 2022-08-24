import { Alert, Box, Button, Snackbar, styled, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'urql'

const CreateHeroMutation = `
mutation Mutation($createHeroInput: CreateHeroInput!) {
  createHero(createHeroInput: $createHeroInput) {
    id
    name
    nameCN
  }
}
`

type HeroInputs = {
  name: string
  nameCN: string
}
const HeroTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
})

export default function CreateHero() {
  const [open, setOpen] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroInputs>()

  const [heroResult, createHero] = useMutation(CreateHeroMutation)

  const submitHero = async (createHeroInput: HeroInputs) => {
    const result = await createHero({ createHeroInput })
    setOpen(true)
    console.log(result)
  }
  const onSubmit: SubmitHandler<HeroInputs> = (data) => submitHero(data)
  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <HeroTextField
          error={!!errors.name}
          id="hero-name"
          label="英雄英文名"
          size="small"
          variant="outlined"
          helperText={errors.name && '请输入英雄英文名'}
          {...register('name', { required: true })}
        ></HeroTextField>
        <HeroTextField
          error={!!errors.nameCN}
          id="hero-nameCN"
          label="英雄中文名"
          size="small"
          variant="outlined"
          helperText={errors.nameCN && '请输入英雄英文名'}
          {...register('nameCN', { required: true })}
        ></HeroTextField>
        <Button
          variant="contained"
          size="small"
          color="primary"
          type="submit"
          sx={{ flexShrink: 0, height: '40px' }}
        >
          添加
        </Button>
      </Box>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={2000}
      >
        <Alert severity={heroResult.error ? 'error' : 'success'}>
          {heroResult.data
            ? `添加${heroResult.data.createHero.name}(${heroResult.data.createHero.nameCN})成功`
            : heroResult.error?.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
