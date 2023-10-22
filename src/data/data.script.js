const { faker } = require('@faker-js/faker');
const fs = require('fs');

const getLocationData = () => {
    // Generate fake property details using Faker
    const propertyData = {
        id: faker.string.uuid(),
        propertyName: faker.location.street(),
        location: faker.location.city(),
        owner: faker.person.firstName(),
        walletAddress: faker.finance.bitcoinAddress(),
        currentPrice: faker.finance.amount(1000, 100000, 2),
        sellingPrice: faker.finance.amount(1000, 100000, 2),
        currency: "USD",
        pictures: [faker.image.url(), faker.image.url(), faker.image.url()]
    };

    return propertyData;
}

// Save the generated data to a JSON file
const saveLocationDataToJsonFile = (data, fileName) => {
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(fileName, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
        } else {
            console.log(`Data saved to ${fileName}`);
        }
    });
}

const propertyDetailsArray = [];
for (let i = 0; i < 1550; i++) {
    propertyDetailsArray.push(getLocationData());
}

saveLocationDataToJsonFile(propertyDetailsArray, './properties.json');