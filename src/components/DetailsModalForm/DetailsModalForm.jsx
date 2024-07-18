import { useForm } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";

import currentDate from "../../services/getData";
import css from "./DetailsModalForm.module.css";
import sprite from "../../assets/sprite.svg";

const DetailsModalForm = () => {
  const { handleSubmit } = useForm();
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
            required
          />
        </label>
        <label>
          <input
            className={css.input}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={css.label}>
          <Flatpickr
            className={css.input}
            placeholder="Booking date"
            options={{ minDate: currentDate() }}
          />
          <svg className={css.calendarIcon} width="20" height="20">
            <use href={`${sprite}#icon-Calendar`}></use>
          </svg>
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
