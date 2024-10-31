class Staff {
    constructor(id, name, birthdate, address, salary, position) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.address = address;
        this.salary = salary;
        this.position = position;
    }
}

let staffs = [
    new Staff(1, "Trương Tấn A", "1997-11-11", "Quảng Nam", 2000, "Nhân viên"),
    new Staff(2, "Trương Tấn B", "1998-11-11", "Đà Nẵng", 2500, "Trưởng nhóm"),
    new Staff(3, "Trương Tấn C", "1999-11-11", "Huế", 3000, "Giám đốc"),
];

function displayStaffs() {
    let tableBody = document.querySelector("#staffTable tbody");
    tableBody.innerHTML = "";

    staffs.forEach((staff) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${staff.id}</td>
            <td>${staff.name}</td>
            <td>${staff.birthdate}</td>
            <td>${staff.address}</td>
            <td>${staff.salary}</td>
            <td>${staff.position}</td>
        `;
        tableBody.appendChild(row);
    });
}
function addStaff(id, name, birthdate, address, salary, position) {
    let newStaff = new Staff(id, name, birthdate, address, salary, position);
    staffs.push(newStaff);
    displayStaffs();
}
document.getElementById("addStaffBtn").onclick = function() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let position = document.getElementById("position").value;

    addStaff(id, name, birthdate, address, salary, position);
};
staffs.sort((a, b) => a.name.localeCompare(b.name))
displayStaffs()