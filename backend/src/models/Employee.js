class Employee {
    constructor(id, name, yearsInCompany = 0) {
        this.setId(id);
        this.setName(name);
        this.setYearsInCompany(yearsInCompany);
    }

    setId(id) {
        if (!id) throw new Error("ID obligatorio");

        this.id = id;
    }

    setName(name) {
        if (!name?.trim()) throw new Error("Nombre obligatorio");

        this.name = name;
    }

    setYearsInCompany(years) {
        if (years < 0) throw new Error("Años inválidos");

        this.yearsInCompany = years;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getYearsInCompany() {
        return this.yearsInCompany;
    }

    calculateSalary() {
        throw new Error("Método abstracto");
    }

    getSalary() {
        return this.calculateSalary();
    }
}

export default Employee;
