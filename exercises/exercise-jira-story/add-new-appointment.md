## User Story 3: Add a New Appointment
**Title**: As an administrator, I want to add a new appointment for a client.

**Acceptance Criteria**:
- The administrator can select a client from the client list or create a new client. (just clientId)
- The administrator can set the appointment date and time. (ISO 8601 format 2011-10-05T14:48:00.000Z)
- The dates and times must be in the future.
- The system checks for conflicts and prevent double-booking.
  - The system will not allow two appointments at the same time.
  - The appointment duration is fixed at 2 hours. 
- The working hours are from 9:00 AM to 5:00 PM.
- The appointment can have stauses:
  - SCHEDULED_READY: The appointment is scheduled and ready to be started.
  - SCHEDULED_WAITING: The appointment is scheduled, waiting for inventory.
  - RESCHEDULED_READY: The appointment is rescheduled and ready to be started.
  - RESCHEDULED_WAITING: The appointment is rescheduled, waiting for inventory.
  - IN_PROGRESS: The appointment is in progress.
  - COMPLETED: The appointment is completed.
  - CANCELED: The appointment is canceled.

**Definition of Done**:
- The API should correctly implement the creation and management of appointment entities.
- The `POST /api/v1/appointments` endpoint must allow the creation of new appointments, provided the `date` (`startDate` is `date` and `endDate` is `date` + 2 hours) do not conflict with existing appointments.
- The dates must be stored in the ISO 8601 format.
- The API should handle time conflict detection for appointments to prevent scheduling overlaps.
  
- The API should validate the input data for required fields:
  - The `clientId` field is required for appointment creation.
  - The `date` is required for appointment creation.
- Appropriate HTTP status codes must be returned:
  - `201 Created` for successful creation of an appointment.
  - `400 Bad Request` when required fields (`clientId`, `date`) are missing.
  - `409 Conflict` if the appointment times conflict with an existing appointment.
  - `409 Conflict` if the date and time are not within working hours.
  - `409 Conflict` if the date and time are not in the future.

- The API must return appropriate error messages and status codes for invalid requests:
  - Missing `clientId`, `date`, should return a `400 Bad Request`.
  - Conflicting appointment times should return a `409 Conflict` with a clear error message.
- Ensure consistent error format in the API responses.
  
- Tests must cover all critical functionality, including:
  - Successful appointment creation.
  - Handling of missing fields.
  - Conflict detection for overlapping appointments.
  - Conflict detection for appointments outside working hours.
  - Conflict detection for appointments in the past.
