var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
]

/********************************************************************
    1. Calculate the total number of months included in the dataset.
*********************************************************************/

// Assign totalMonths variable to the total number of months included in the dataset
let totalMonths = finances.length


/********************************************************************
    2. The net total amount of Profit/Losses over the entire period.
    3.  Calculate the changes in Profit/Losses month to month
*********************************************************************/

// Store the calculated total profit and loss
let totalProfitLoss = 0

// we are creating a new array to store profit and loss for each month
let financeChanges = []

for (i = 0; i < totalMonths; i++) {

    /********************************************************************
        2. The net total amount of Profit/Losses over the entire period.
    ********************************************************************/

    //console.log(`profit/loss ${finances[i][0]} : ${finances[i][1]}`)
    let profitLossForMonth = finances[i][1]
    totalProfitLoss += profitLossForMonth
    //console.log(totalProfitLoss);

    /*************************************************************************
        3. Calculate the changes in Profit/Losses month to month
    *************************************************************************/

    // Initialise empty array to store profit/loss changes against the current month
    let record = []

    // Store profit/loss value between current and previous month
    let profitLossBetweenMonths = 0

    // If it's the first record, then there is 0 profit and loss
    if (i === 0) {
        // store the month as item 1 in array record[]
        record.push(finances[i][0])
        // store the calculated profit and loss as item 2 in the array record[]
        record.push(profitLossBetweenMonths)
        // Push the array record[] into the parent array financeChanges[]
        financeChanges.push(record)
    } else {
        // Store the current month index (created for better readability)
        let currentMonth = i

        // Set the previous month index (created for better readability)
        let previousMonth = currentMonth - 1

        // Get current month profit loss value
        let currentMonthProfitLoss = finances[currentMonth][1]

        // Get previous month profit loss value
        let previousMonthProfitLoss = finances[previousMonth][1]

        // calculate the profit and loss between the current and previous month
        profitLossBetweenMonths = currentMonthProfitLoss - previousMonthProfitLoss

        // store the month as item 1 in array record[]
        record.push(finances[i][0])

        // store the calculated profit and loss as item 2 in the array record[]
        record.push(profitLossBetweenMonths)

        //record["finances[i][0]"] = profitLossBetweenMonths
        //console.log(finances[i][0])

        // Added our record array item (with two items month and profit/loss) to our new financeChanges array
        financeChanges.push(record)
    }
}


/********************************************************************
    4. Calculate the average of the changes in Profit/Losses over the entire period.
    5. Calculate Greatest decrease & Increase over entire period
*********************************************************************/

/*
    4. Calculate the average of the changes in Profit/Losses over the entire period.
*/

// Create variable to store change in profit and loss value 
let totalChangeProfitLoss = 0

// Create a new array to store all values so we can use Javascript Math Max & Min function
let changesInProfitAndLossValues = []

// Loop through the financeChanges array
for (i = 0; i < financeChanges.length; i++) {

    // Get the value of profit and loss
    let changesInProfitAndLoss = financeChanges[i][1]
    totalChangeProfitLoss += changesInProfitAndLoss

    //console.log(financeChanges[i][0])
    //console.log(typeof financeChanges[0][1])

    // Push extracted profit and loss value into new array changesInProfitAndLossValues[]
    changesInProfitAndLossValues.push(changesInProfitAndLoss)

    //console.log(financeChanges[i][0])
    //console.log(typeof financeChanges[0][1])    
}

// Calculate the average of the changes

let averageChangesInProfitAndLoss = Math.ceil((totalChangeProfitLoss / financeChanges.length) / 100) * 100
/*
    5. Calculate Greatest decrease & Increase over entire period
*/

// Calculating the greatest increase and decrease in profits over the entire period

// Math.Max function to get the greatest increase in profit
let greatestIncreaseInProfits = Math.max(...changesInProfitAndLossValues)

// Math.Min function to get the greatest decrease in profit
let greatestDecreaseInProfits = Math.min(...changesInProfitAndLossValues)

/* 
    Get the index value of greatest increase & decrease (we will use this index 
    to get the date from the financeChanges array)
*/
let greatestIncreaseInProfitsIndex = changesInProfitAndLossValues.indexOf(greatestIncreaseInProfits)
//console.log(greatestIncreaseInProfitsIndex)

let greatestDecreaseInProfitsIndex = changesInProfitAndLossValues.indexOf(greatestDecreaseInProfits)
//console.log(greatestDecreaseInProfitsIndex)

// Get the month for the Greatest Increase in Profits
let greatestIncreaseInProfitsMonth = financeChanges[greatestIncreaseInProfitsIndex][0]
//console.log(greatestIncreaseInProfitsMonth)

// Get the month for the Greatest Decrease in Profits
let greatestDecreaseInProfitsMonth = financeChanges[greatestDecreaseInProfitsIndex][0]
//console.log(greatestDecreaseInProfitsMonth)

/********************************************************************
    6. Display all the information to the user
*********************************************************************/
// Print a title for the report
console.log("Financial Analysis")
console.log("----------------------------")

// Print total months
console.log(`Total Months: ${totalMonths}`)

// Print Total Profit & Loss to console
console.log(`Total: $${totalProfitLoss}`)

// Print Average Profit & Loss to console
console.log(`Average Change: $${averageChangesInProfitAndLoss}`)
console.log(`Greatest Increase in Profits: ${greatestIncreaseInProfitsMonth} ($${greatestIncreaseInProfits})`)
console.log(`Greatest Decrease in Profits: ${greatestDecreaseInProfitsMonth} ($${greatestDecreaseInProfits})`)