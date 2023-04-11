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
      resDate: "",
      resTime: "",
      comment: "",
    },
    onSubmit: async (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      resDate: Yup.string().required("Please enter a date to continue"),
      resTime: Yup.string().required("Please enter Timeslot to continue"),
      email: Yup.string()
        .required("Required")
        .email("Please enter your email address"),

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
                isInvalid={formik.touched.resDate && !!formik.errors.resDate}
              >
                <FormLabel htmlFor="resDate">Choose date</FormLabel>
                <Input
                  id="resDate"
                  name="resDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.resDate}
                  {...formik.getFieldProps("resDate")}
                  isInvalid={formik.touched.resDate && !!formik.errors.resDate}
                />
                <FormErrorMessage>
                  {formik.touched.resDate && formik.errors.resDate}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.resTime && !!formik.errors.resTime}
              >
                <FormLabel htmlFor="resTime">Select Time:</FormLabel>
                <Select
                  id="resTime"
                  name="resTime"
                  {...formik.getFieldProps("resTime")}
                >
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.resTime && formik.errors.resTime}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.resDate && !!formik.errors.resDate}
              >
                <FormLabel htmlFor="guests">No. of Guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  onChange={formik.handleChange}
                  value={formik.values.guests}
                  {...formik.getFieldProps("guests")}
                  isInvalid={formik.touched.guests && !!formik.errors.guests}
                />
                <FormErrorMessage>
                  {formik.touched.guests && formik.errors.guests}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.occasion && !!formik.errors.occasion}
              >
                <FormLabel htmlFor="occasion">Select Occasion:</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  {...formik.getFieldProps("occasion")}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.occasion && formik.errors.occasion}
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
                {isLoading ? "Loading..." : "Make Your Reservation"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </>
  );
};

export default Book;
