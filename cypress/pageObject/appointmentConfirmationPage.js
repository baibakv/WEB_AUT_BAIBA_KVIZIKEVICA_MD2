import { BasePage } from "../pageObject/basePage";

export class AppointmentConfirmationPage extends BasePage{
    static get url() {
        return "/#/appointment.php#summary";
    }
    
    static get facility(){
        return cy.get('#facility');
    }

    static get hospitalReadmission(){
        return cy.get('#hospital_readmission');
    }

    static get program(){
        return cy.get('#program');
    }

    static get visitDate(){
        return cy.get('#visit_date');
    }

    static get comment(){
        return cy.get('#comment');
    }
}