import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/sections/reservePages/BookingForm";

test("Renders the BookingForm", () => {
  render(<BookingForm />);
  const submitBtn = screen.getByText("Book Table");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Date:/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time:/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});
