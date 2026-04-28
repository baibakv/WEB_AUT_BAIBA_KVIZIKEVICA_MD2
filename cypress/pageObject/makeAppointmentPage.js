import { BasePage } from "../pageObject/basePage";

export class MakeAppointmentPage extends BasePage{
    static get url() {
        return "/#/#appointment";
    }

    static get facilityDropdown(){
        return cy.get('#combo_facility');
    }

    static get checkbox(){
        return cy.get('#chk_hospotal_readmission');
    }

    static get medicaidButton(){
        return cy.get('#radio_program_medicaid');
    }

    static get dateSelect(){
        return cy.get("#txt_visit_date");
    }

    static get calendar(){
        return cy.get('[class="day"]');
    }

    static get commentBox(){
        return cy.get('#txt_comment');
    }

    static get bookAppointmentButton(){
        return cy.get('#btn-book-appointment');
    }

    static get menuButton(){
        return cy.get('#menu-toggle');
    }

    static get sidebar(){
        return cy.get('[class="active"]');
    }

    static get history(){
        return cy.get('#sidebar-wrapper > ul > li:nth-child(4) > a'); // right-click on element > copy > copy selector
    }
}