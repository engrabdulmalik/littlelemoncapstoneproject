import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const Book = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter a name to continue"),
      email: Yup.string()
        .required("Required")
        .email("Please enter your email address"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Add any special request")
        .min(25, "Comment must be at least 25 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reserve a Table
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  {...formik.getFieldProps("firstName")}
                  isInvalid={
                    formik.touched.firstName && !!formik.errors.firstName
                  }
                />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <FormLabel htmlFor="type">Select Dishes:</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Salad</option>
                  <option value="openSource">Pasta</option>
                  <option value="other">Drinks</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.type && formik.errors.type}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <FormLabel htmlFor="type">Total No. of Diners</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Salad</option>
                  <option value="openSource">Pasta</option>
                  <option value="other">Drinks</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.type && formik.errors.type}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Any Special Request</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  isInvalid={formik.touched.comment && !!formik.errors.comment}
                />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                {isLoading ? "Loading..." : "Add to cart"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </>
  );
};

export default Book;
