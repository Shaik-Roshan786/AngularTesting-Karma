import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketReservationComponent } from './ticket-reservation.component';

describe('Ticket Reservation Component', () => {
  let component: TicketReservationComponent;
  let fixture: ComponentFixture<TicketReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketReservationComponent]
    });
    fixture = TestBed.createComponent(TicketReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   // Arrange (if needed)
    // ...
    // This beforeEach block runs before each test case in this suite
  // It initializes a new instance of the TicketReservationComponent before each test case
    let Reservation = new TicketReservationComponent();
    beforeEach(() => {
      Reservation = new TicketReservationComponent()
    })

    // afterEach(() => {
    //   Reservation = null;
    // })



  it('Reserve & Increment the people count by 1', () => { // Start the first test case: "Reserve & Increment the people count by 1"
    // Act
    let peopleCount = Reservation.reserveSeat();  // Act: Call the reserveSeat() method of the TicketReservationComponent

    // Assert
    expect(peopleCount).toEqual(21); // Check if the peopleCount returned by reserveSeat() is equal to 21
  })

  it('Cancel & Decrement the people count by 1', () => { // Start the second test case: "Cancel & Decrement the people count by 1"
    // Arrange (if needed)
    // ...
    // let Reservation = new TicketReservationComponent();

    // Act
    let peopleCount = Reservation.cancelSeat();  // Act: Call the cancelSeat() method of the TicketReservationComponent

    // Assert
    expect(peopleCount).toEqual(19); // Assert: Check if the peopleCount returned by cancelSeat() is equal to 19
  })

})
