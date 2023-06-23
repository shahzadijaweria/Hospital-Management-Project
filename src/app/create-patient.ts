export class createPatient {

    constructor(
        public _id: string,
        public First_Name: string,
        public Last_Name: string,
        public Cnic: string,
        public Date_of_Birth: string,
        public Address: string,
        public Phone_Number: string,
        public Disease: string,
        public isVisitedBofore: string,
        public infoProvided: boolean,
        public City: string

    ) { }

}