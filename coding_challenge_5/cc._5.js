let employees = [
    { name: "Francis", department: "finance", salary: 75000 },
    { name: "jordy", department: "team leader", salary: 80000 },
    { name: "arun", department: "ceo", salary: 100000 },
    { name: "lazz", department: "COO", salary: 85000 },
];
const regularHourslimit = 40;
const overtimeHourslimit = 20;
const overtimerate = 1.5;

Function calculatebasepay(hours, rate) {
    return hours * rate;
    console.log("Base pay for", name, "is $", hours * rate);
}calculateovertimepay(hours, rate) {
    if (hours > regularHourslimit) {
        let overtimeHours = hours - regularHourslimit;
        return calculatebasepay(regularHourslimit, rate) + (overtimeHours * rate * overtimerate);
    }
    return calculatebasepay(hours, rate);
}
calculatetaxes(grosspay)
const taxrate = 0.15;
const taxamount = grosspay * taxrate;
constNetpay = grosspay - taxamount;
return constNetpay;
function processPayroll(employee)
const employee =(
    name: basepay,overtimePay,GrossPay,netPay
)