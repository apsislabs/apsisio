import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { EMAIL_REGEX } from "lib/utils";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import styles from "styles/components/NewsletterCTA.module.scss";

type Inputs = {
  email: string;
};

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  return (
    <form
      method="post"
      action="https://listmonk.skylab.apsis.io/subscription/form"
      className={styles.newsletter_form}
    >
      <input type="hidden" name="nonce" />
      <input
        id="00924"
        type="hidden"
        name="l"
        value="f2138cbb-fad3-499e-b5d5-b43b1c8accfb"
      />

      <TextField
        id="email"
        placeholder="sherlock@example.com"
        error={errors.email}
        required
        type="email"
        autoComplete="email"
        data-lpignore="true"
        data-1p-ignore
        className={styles.newsletter_form__input}
        {...register("email", {
          required: "Please provide an email address",
          pattern: {
            value: EMAIL_REGEX,
            message: "Please provide a valid email address",
          },
        })}
      />

      <Button
        type="submit"
        EndIcon={ChevronRight}
        className={styles.newsletter_form__button}
      >
        Subscribe
      </Button>
    </form>
  );
};
