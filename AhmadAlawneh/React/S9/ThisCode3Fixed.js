function logCustomerInfo(customer) {
    // Log customer information
    console.log("Customer Code:", customer.custCode);
    console.log("Customer Name:", customer.custName);
    console.log("Customer Age:", customer.custAge);
    console.log("Customer Phone:", customer.custPhone);
    console.log("Customer Mobile:", customer.custMobile);
    console.log("Customer Address:", customer.custAddress);
    console.log("Customer Email:", customer.custEmail);
    console.log("Customer Fax:", customer.fax);
}

function myFunction() {
    const zeadAge = 36;
    const ahmadAge = 35;
    const mohammedAge = 40;

    // Show message box with Zead's age
    alert("Zead's Age is: " + zeadAge);
}

// Function to handle JSON parsing exceptions
function parseJsonData(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        console.log("Parsed JSON data:", parsedData);
    } catch (error) {
        console.error("Error while parsing JSON data:", error.message);
    }
}

// Usage of logCustomerInfo with an object as parameter
const customerInfo = {
    custCode: "12345",
    custName: "John Doe",
    custAge: 30,
    custPhone: "123-456-7890",
    custMobile: "987-654-3210",
    custAddress: "123 Main St",
    custEmail: "john@example.com",
    fax: "555-555-5555"
};

// Usage of parseJsonData with JSON data as a parameter
const jsonData = '{"key": "value"}';
parseJsonData(jsonData);

logCustomerInfo(customerInfo);