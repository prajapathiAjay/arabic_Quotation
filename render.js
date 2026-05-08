const ejs = require("ejs");
const fs = require("fs");

// read EJS file
const template = fs.readFileSync("./quotation.ejs", "utf-8");

// data (VERY IMPORTANT)
const data = {
  templateData: {
    companyName: "AWN Company",
    quotation: {
      customerName: "Ajay",
      quotationDate: new Date(),
      totalAmount: 1000,
    },
    quotationItems: [
      {
        serviceName: "Web Development",
        quantity: 2,
        price: 300,
      },
      {
        serviceName: "Hosting",
        quantity: 1,
        price: 400,
      },
    ],
  },
};

// render HTML
const html = ejs.render(template, data);

// save file
fs.writeFileSync("output.html", html);

console.log("✅ HTML generated successfully → output.html");