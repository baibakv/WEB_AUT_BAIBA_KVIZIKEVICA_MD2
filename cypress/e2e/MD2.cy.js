const { AppointmentConfirmationPage } = require("../pageObject/appointmentConfirmationPage");
const { HistoryPage } = require("../pageObject/historyPage");
const { HomePage } = require("../pageObject/homePage");
const { LoginPage } = require("../pageObject/loginPage");
const { MakeAppointmentPage } = require("../pageObject/makeAppointmentPage");

describe("CURA Healthcare Service scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make an Appointment", () => {
      // Click - Make Appointment
      HomePage.makeAppointmentButton.click();

      // Set username and password fields with the demo account credentials
      LoginPage.usernameField.type('John Doe');
      LoginPage.passwordField.type('ThisIsNotAPassword');

      // Click - Login
      LoginPage.loginButton.click();

      // Set the following values:
      MakeAppointmentPage.facilityDropdown.select('Seoul CURA Healthcare Center');
      MakeAppointmentPage.checkbox.click();
      MakeAppointmentPage.medicaidButton.click();
      MakeAppointmentPage.dateSelect.click();
      MakeAppointmentPage.calendar.contains('30').click();
      MakeAppointmentPage.commentBox.click('bottomRight');
      MakeAppointmentPage.commentBox.type('CURA Healthcare Service');
      MakeAppointmentPage.bookAppointmentButton.click();

      // Validate that previously set values are correct
      AppointmentConfirmationPage.facility.should('contain.text','Seoul CURA Healthcare Center');
      AppointmentConfirmationPage.hospitalReadmission.should('contain.text','Yes');
      AppointmentConfirmationPage.program.should('contain.text','Medicaid');
      AppointmentConfirmationPage.visitDate.should('contain.text','30/04/2026');
      AppointmentConfirmationPage.comment.should('contain.text','CURA Healthcare Service');
    });

    it("Check appointment history", () => {
      // Click - Make Appointment
      HomePage.makeAppointmentButton.click();

      // Set username and password fields with the demo account credentials
      LoginPage.usernameField.type('John Doe');
      LoginPage.passwordField.type('ThisIsNotAPassword');

      // Click - Login
      LoginPage.loginButton.click();

      // Click - Menu/Stack/Burger icon
      MakeAppointmentPage.menuButton.click();

      // Validate that the sidebar is active
      MakeAppointmentPage.sidebar.should('be.visible');
      
      // Click - History
      MakeAppointmentPage.history.click();

      // Validate that - No appointment - is visible
      HistoryPage.appointmentCheck.should('contain.text','No appointment.');
    });
  });
});