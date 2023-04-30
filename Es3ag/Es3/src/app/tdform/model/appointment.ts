export interface Appointment {
  name: string;
  mail: string;
  dayOfTheWeek: string;
  office: string;
  applications: [{application: boolean}, {application: boolean}, {application: boolean }]
}
