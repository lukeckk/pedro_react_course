import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

// example how useForm works in handling form data and combine with yup for validation
export const Form = () => {

  // validation function for how each form should look like
  const schema = yup.object().shape({
    // fullName is a string and is required(cant be null)
    fullName: yup.string().required("Please enter full name"),
    // email needs to be a string and email type and is required
    email: yup.string().email("").required(),
    // must be a number, positive and cant be decimal, min of 18
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    //must be the same as password, null to mean password is the only field we need
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Dont Match").required(),
  })

  // resolver to complete the validation
  // formState is used to show error message for validation
  const {register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema)
  });

  // data is the data that user inputs in the form
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    // handleSubmit goes through some REACT handling process before submitting by onSubmit
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="Full Name" {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};