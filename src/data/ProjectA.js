import { EmissionInfo, LocationInfo, CompanyInfo, ProfessionalInfo, ProjectInfo } from "./Calculations"

//Mock data objects to test project:

export let originalEmissionsMock = new EmissionInfo(66, 7, 0, 0)
export let finalEmissionsMock = new EmissionInfo(10, 4, 5, 1)
export let locationMock = new LocationInfo(10, 20, "123456789")
export let companyMock = new CompanyInfo("Company One", "123456789")
export let professionalMock = new ProfessionalInfo("Maria", "Garcia", "123456789")
export let buildingAreaMock = 1380

let mockProjectA = new ProjectInfo(
    professionalMock,
    companyMock,
    locationMock,
    originalEmissionsMock,
    finalEmissionsMock,
    buildingAreaMock
)

console.log(mockProjectA.checkEnergyEfficiencyRating());
console.log(mockProjectA.canGetCarbonCredits());
console.log(mockProjectA.calculateCarbonCredits())

export const rating = mockProjectA.checkEnergyEfficiencyRating();
console.log(rating);
export const getCredits = mockProjectA.canGetCarbonCredits();
console.log(getCredits);
export const calculateCredit = mockProjectA.calculateCarbonCredits();
console.log(calculateCredit);

export const myRating = 'Approved';