export class EmissionInfo {
    constructor(energyConsumption, waterConsumption, renewablEnergyProduction, waterRecycling) {
        this.energyConsumption = energyConsumption;
        this.waterConsumption = waterConsumption;
        this.renewablEnergyProduction = renewablEnergyProduction;
        this.waterRecycling = waterRecycling;
    }

    getEnergyDemand() {
        return this.energyConsumption - this.renewablEnergyProduction;
    }

    getWaterDemand() {
        return this.waterConsumption - this.waterRecycling;
    }

    getTotalEmissions() {
        return this.getEnergyDemand() + this.getWaterDemand();
    }
}

export class LocationInfo {
    constructor(coordinateX, coordinateY, cadastralRef) {
        this.coordinates = (coordinateX, coordinateY);
        this.cadastralRef = cadastralRef;
    }

    getCoordinates() {
        return this.coordinates;
    }

    getCadastralRef() {
        return this.cadastralRef;
    }
}

export class CompanyInfo {
    constructor(name, companyId) {
        this.name = name;
        this.companyId = companyId;
    }

    getName() {
        return this.name;
    }

    getCompanyId() {
        return this.companyId;
    }
}

export class ProfessionalInfo {
    constructor(firstName, lastName, professionalId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.professionalId = professionalId;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getCompleteName() {
        return this.firstName + " " + this.lastName
    }

    getProfessionalId() {
        return this.professionalId;
    }
}

export class ProjectInfo {
    constructor(professional, company, location, originalEmissions, finalEmissions, buildingArea) {
        this.professional = professional;
        this.company = company;
        this.location = location;
        this.originalEmissions = originalEmissions;
        this.finalEmissions = finalEmissions;
        this.buildingArea = buildingArea;
    }

    getProfessional() {
        return this.professional;
    }

    getCompany() {
        return this.company;
    }

    getLocation() {
        return this.location;
    }

    getOriginalEmissions() {
        return this.originalEmissions;
    }

    getFinalEmissions() {
        return this.finalEmissions;
    }

    getArea() {
        return this.buildingArea;
    }

    getEmissionsSavings() {
        let usefulLife = 50;
        return (this.getOriginalEmissions().getTotalEmissions() - this.getFinalEmissions().getTotalEmissions()) * usefulLife * this.getArea()
    }

    checkEnergyEfficiencyRating() {
        let emissionsRatingC = 14;
        return this.finalEmissions.getTotalEmissions() <= emissionsRatingC;
    }

    canGetCarbonCredits() {
        if (this.checkEnergyEfficiencyRating()) {
            return this.getEmissionsSavings()
        } else {
            return "Your project has an energy efficiency rating lower than C. Please, improve the sustainability of your project and try again "
        }
    }

    calculateCarbonCredits() {
        return (this.getEmissionsSavings()/1000) * 4.5
    }
}

export default {EmissionInfo, LocationInfo, ProfessionalInfo, ProjectInfo};