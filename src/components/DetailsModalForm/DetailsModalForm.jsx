import { useForm } from "react-hook-form";
import css from "./DetailsModalForm.module.css";

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
          />
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
        </label>
        <label className={css.label}>
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
