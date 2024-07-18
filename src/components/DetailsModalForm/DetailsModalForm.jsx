import { useForm } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import currentDate from "../../services/getData";
import css from "./DetailsModalForm.module.css";
import sprite from "../../assets/sprite.svg";

const schema = yup
  .object({
    name: yup
      .string()
      .required("This field is required.")
      .min(2)
      .matches(/^[A-Za-z' -]$/, "Enter correct name."),
    email: yup.string().email().required("This field is required."),
  })
  .required();

const DetailsModalForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <div className={css.container}>
        <label>
          <input
            className={css.input}
            name="name"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <span className={css.errorMessage}>{errors.name.message}</span>
          )}
        </label>
        <label>
          <input
            className={css.input}
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className={css.errorMessage}>{errors.email.message}d</span>
          )}
        </label>
        <label className={css.label}>
          <Flatpickr
            name="bookingDate"
            className={css.input}
            placeholder="Booking date"
            options={{ minDate: currentDate() }}
            onChange={([date]) => {
              setValue("bookingDate", date, { shouldValidate: true });
            }}
          />
          <svg className={css.calendarIcon} width="20" height="20">
            <use href={`${sprite}#icon-Calendar`}></use>
          </svg>
          <input
            type="hidden"
            {...register("bookingDate", { required: true })}
          />
          {errors.bookingDate && (
            <span className={css.errorMessage}>This field is required</span>
          )}
        </label>
        <label>
          <textarea
            className={css.textarea}
            name="comment"
            type="text"
            placeholder="Comment"
          />
        </label>
      </div>
      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default DetailsModalForm;
