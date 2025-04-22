import axios from "axios";
import clsx from "clsx";
import { Button } from "components/Button";
import { FieldWrapper } from "components/FieldWrapper";
import { SelectField } from "components/SelectField";
import { TextField } from "components/TextField";
import { EMAIL_REGEX } from "lib/utils";
import { capitalize } from "lodash";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const projectTypes = ["product", "dev", "devops", "other"] as const;
type ProjectType = (typeof projectTypes)[number];

const projectSources = [
  "event",
  "referral",
  "search engine",
  "open source",
  "clutch",
  "other",
] as const;

const ProjectLabel: Record<ProjectType, string> = {
  product: "Develop a product",
  dev: "Development services",
  devops: "Devops & Sysops services",
  other: "Something else",
};

const budgetOptions = ["< 25k", "25k-50k", "50k-100k", "> 100k", "tbd"];
type BudgetOption = (typeof budgetOptions)[number];

const BudgetLabels: Record<BudgetOption, string> = {
  "< 25k": "Less than $25,000",
  "25k-50k": "$25,000-$50,000",
  "50k-100k": "$50,000-$100,000",
  "> 100k": "More than $100,000",
  tbd: "We don't know yet",
};

type ProjectSource = (typeof projectSources)[number];

type Inputs = {
  fax?: string;
  company: string;
  name: string;
  email: string;
  projectType: ProjectType;
  projectDetail: string;
  budget: string;
  source: ProjectSource;
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitted(false);

    if (data.fax) {
      alert("No dice, roboto!");
      return;
    }
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
        {
          ...data,
          project: "website-contact",
        }, {

        }
      );

      if (response.status < 300) {
        setSubmitted(true);
        reset();
      } else {
        console.error(response);
        alert(
          "There was an error submitting your form. Please try again later!"
        );
      }
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your form. Please try again later!");
    }
  };

  return (
    <>
      {submitted && (
        <div className="alert alert-success">
          <span className="alert-title">Thanks for your submission!</span>{" "}
          Someone will be in touch shortly.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="stack gap-md typography"
        noValidate
      >
        <TextField
          id="name"
          label="What should we call you?"
          placeholder="Jane Eyre"
          error={errors.name}
          required
          data-lpignore="true"
          data-1p-ignore
          autoComplete="name"
          {...register("name", {
            required: "A name is required",
          })}
        />

        <TextField
          id="company"
          label="What should we call your project or your company?"
          placeholder="ACME INC."
          error={errors.company}
          required
          data-lpignore="true"
          data-1p-ignore
          autoComplete="organization"
          {...register("company", {
            required: "Please provide a company or project name",
          })}
        />

        <TextField
          id="email"
          label="What's your email?"
          placeholder="jane.eyre@gateshead.example.com"
          error={errors.email}
          required
          type="email"
          autoComplete="email"
          data-lpignore="true"
          data-1p-ignore
          {...register("email", {
            required: "Please provide an email address",
            pattern: {
              value: EMAIL_REGEX,
              message: "Please provide a valid email address",
            },
          })}
        />

        <div className="hidden">
          <div className="form-group">
            <label className="label required" htmlFor="fax">
              If you can see this input, please don't enter anything. We're
              hunting robots.
            </label>
            <input id="fax" className="input" placeholder="555-555-5555" />
          </div>
        </div>

        <FieldWrapper
          id="project_type"
          label="What can we do for you?"
          error={errors.projectType}
          required
        >
          <div className="stack gap-sm">
            {projectTypes.map((p) => (
              <label className="stack gap-sm stack-h" key={p}>
                <input
                  type="checkbox"
                  className="m"
                  value={p}
                  {...register("projectType", {
                    required: "Please make a selection",
                  })}
                />

                {ProjectLabel[p]}
              </label>
            ))}
          </div>
        </FieldWrapper>

        <FieldWrapper
          id="project_detail"
          label="What else can you tell us?"
          error={errors.projectDetail}
        >
          <textarea
            className={clsx("input", errors.projectDetail && "error")}
            rows={3}
            id="project_detail"
            autoComplete="off"
            {...register("projectDetail")}
          ></textarea>
        </FieldWrapper>

        <SelectField
          id="budget"
          label="What's your budget look like?"
          error={errors.budget}
          required
          {...register("budget", { required: "Please make a selection" })}
        >
          <option value="">Select One&hellip;</option>
          {budgetOptions.map((b) => (
            <option value={b} key={b}>
              {BudgetLabels[b]}
            </option>
          ))}
        </SelectField>

        <SelectField
          id="source"
          label="How did you hear about us?"
          {...register("source")}
        >
          <option value="">Select One&hellip;</option>

          {projectSources.map((p) => (
            <option value={p} key={p}>
              {capitalize(p)}
            </option>
          ))}
        </SelectField>

        <footer>
          <Button loading={isSubmitting} type="submit" EndIcon={ChevronRight}>
            Let's go
          </Button>
        </footer>
      </form>
    </>
  );
};
