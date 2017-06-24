export interface IFamilies{
    id: number,
    householderName: string,
    name: string,
    englishFirstName: string,
    englishLastName: string,
    baptismName: string,
    gender: string,
    relation: string,
    address1: string,
    city: string,
    state: string,
    zipcode: string,
    homePhone: string
}

export interface IFamily {
    id: number,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zipcode:string,
    country:string,
    homePhone:string,
    workPhone: string,
    cellPhone: string,
    faxNumber: string,
    region: string,
    subregion:string,
    createdDate: string,
    lastUpdatedDate: string,
    familyMember:any[]
}
