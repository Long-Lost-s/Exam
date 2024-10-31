function isValidDateFormat(dateStr) {
    let regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(dateStr);
}
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        return year;
}
function calDays() {
    let input = document.getElementById("date").value;
    if (!isValidDateFormat(input)) {
        document.write("Vui long nhap lai");
        return;
    }
    let [month, year] = input.split("/").map(Number);
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result = "";
    if (month === 2 && leapYear(year)) {
        result = `Tháng 2 năm ${year} có 29 ngày.`;
    } else {
        result = `Tháng ${month}/${year} có ${daysInMonth[month - 1]} ngày.`;
    }
    document.getElementById("result").innerHTML = result;
}

