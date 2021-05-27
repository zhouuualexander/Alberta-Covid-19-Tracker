export var getYesterdaysDate = () => {
    let date = new Date();
    date.setDate(date.getDate() - 2);
    return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
};

/*----------------------------------------removeDuplicates-------------------------*/
export var removeDuplicates = (originalArray, prop) => {
    let newArray = [];
    let lookupObject = {};
    for (let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
};
//reference:https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript

/*--------------------------------------Finalize the array-------------------------*/
export var finalizeArray = (originalArray, uniqueArray) => {
    let finalArray = [];
    for (let i = 0; i < uniqueArray.length; i++) {
        let newObject = {};
        newObject["alberta_health_services_zone"] =
            uniqueArray[i]["alberta_health_services_zone"];
        let zoneArray = originalArray.filter(
            (city) =>
                city["alberta_health_services_zone"] ===
                uniqueArray[i]["alberta_health_services_zone"]
        );
        newObject["total case"] = zoneArray.length;
        newObject["total active"] = zoneArray.filter(
            (active) => active["case_status"] === "Active"
        ).length;
        newObject["total death"] = zoneArray.filter(
            (death) => death["case_status"] === "Died"
        ).length;
        finalArray.push(newObject);
    }
    return finalArray;
};