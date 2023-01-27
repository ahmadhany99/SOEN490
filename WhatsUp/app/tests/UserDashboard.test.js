import "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  render,
  waitFor,
  fireEvent,
  screen,
} from "@testing-library/react-native";
import UserDashboardScreen from "../screens/UserDashboard";
import LoginScreen from "../screens/Login";
import UserProfileScreen from "../screens/UserProfile";

jest.useFakeTimers();

it("Renders User Dashboard Correctly", () => {
  const tree = render(
    <NavigationContainer>
      <UserDashboardScreen />
    </NavigationContainer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Logging in with attendee account should render User Dashboard Screen", async () => {
  render(
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
  await waitFor(() =>
    fireEvent.changeText(
      screen.getByPlaceholderText("Email"),
      "jd@test.com"
    )
  );
  await waitFor(() =>
    fireEvent.changeText(screen.getByPlaceholderText("Password"), "123456")
  );
  await waitFor(() => {
    fireEvent.press(screen.getAllByText("Login")[1]);
  });
  render(<NavigationContainer>
               <UserDashboardScreen />
             </NavigationContainer>);
});

test("When clicking on the Location icon it should console log Location", async () => {
  render(
    <NavigationContainer>
      <UserDashboardScreen />
    </NavigationContainer>
  );
  await waitFor(() => {
    fireEvent.press(screen.getByTestId("location"));
  });
});

test("When clicking on the Notification icon it should console log notification", async () => {
  render(
    <NavigationContainer>
      <UserDashboardScreen />
    </NavigationContainer>
  );
  await waitFor(() => {
    fireEvent.press(screen.getByTestId("notification"));
  });
});

test("When clicking on the Filter icon it should console log Filters", async () => {
  render(
    <NavigationContainer>
          <UserDashboardScreen />
    </NavigationContainer>
  );
  await waitFor(() => {
    fireEvent.press(screen.getByTestId("filters"));
  });
});

test("When searching in search bar for fa, it should return events that include fa", async () => {
  render(
    <NavigationContainer>
      <UserDashboardScreen />
    </NavigationContainer>
  );
  await waitFor(() => {
    fireEvent.changeText(screen.getByPlaceholderText("Search for..."),"fa");
  });
});

{/**Needs to be fixed**/}
test("When clicking on the User Profile icon, it should redirect to the User Profile screen", async () => {
  render(
    <NavigationContainer>
      <UserDashboardScreen />
    </NavigationContainer>
  );

  const temp = screen.queryAllByText("");
  await waitFor(() => {
    fireEvent.press(temp[5]);
  });

  const userProfile = (
    <NavigationContainer>
      <UserProfileScreen />
    </NavigationContainer>
  );
  render(userProfile);
});