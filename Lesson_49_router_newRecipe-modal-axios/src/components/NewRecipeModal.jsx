import { Box, Modal, TextField, Grid, Button } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form"
import { addNewRecipe } from "../store/recipes.slice";
import { useDispatch } from "react-redux";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: "50%",
};

export default function NewRecipeModal({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    formState,
    control, // control нужен для useFieldArray
  } = useForm({
    mode: "onChange", // Будем проверять форму при каждом изменении
  })

  const { errors } = formState;

  const {
    fields, // Массив полей, который будет хранить шаги инструкции
    append,  // Позволяет добавлять новые шаги в конец массива
    remove, // Позволяет удалять шаги инструкции по индексу
    // insert, // Позволяет вставлять шаги в определенную позицию  
    // move, // Позволяет перемещать шаги внутри массива
    // swap, // Позволяет менять местами шаги в массиве
    // replace, // Позволяет заменить весь массив шагов инструкций
    // prepend, // Позволяет добавлять шаги в начало массива
    // update, // Позволяет обновлять шаги по индексу
  } = useFieldArray({
    control, // control из useForm
    name: "instructions", // Имя поля, которое будет хранить массив шагов инструкции
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addNewRecipe(data))
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2} columns={2}>
              <Grid size={1}>
                <TextField
                  fullWidth
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long"
                    }
                  })}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : "Enter recipe name"}
                />
              </Grid>
              <Grid size={1}>
                <TextField
                  fullWidth
                  {...register("cuisine", {
                    required: "Cuisine is required",
                    minLength: {
                      value: 3,
                      message: "Cuisine must be at least 3 characters long"
                    }
                  })}
                  error={!!errors.cuisine}
                  helperText={errors.cuisine ? errors.cuisine.message : "Enter cuisine"}
                />
              </Grid>
            </Grid>
          </Box>

          <TextField
            fullWidth
            {...register("image", {
              required: "Image URL is required",
            })}
            error={!!errors.image}
            helperText={errors.image ? errors.image.message : "Enter image URL"}
          />
          {fields.map((item, index) => (
            <Box key={item.id} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                {...register(`instructions.${index}`, {
                  required: "Step is required",
                  minLength: {
                    value: 5,
                    message: "Step must be at least 5 characters long"
                  }
                })}
                error={!!errors.instructions?.[index]}
                helperText={errors.instructions?.[index] ? errors.instructions[index].message : `Enter instruction step ${index + 1}`}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => remove(index)}
                sx={{ mt: 1 }}
              >
                Remove Step
              </Button>
            </Box>
          ))}

          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => append("")}
            fullWidth
            color="secondary"
          >
            Add Step
          </Button>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color="primary"
          >
            Add new recipe
          </Button>
        </Box>
      </Modal>
    </>
  )
}