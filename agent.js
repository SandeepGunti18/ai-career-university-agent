const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function query_knowledge(course) {
  return `For ${course}, compare curriculum, internships, placements, rankings, and ROI.`;
}

function get_insights(budget, location) {
  if (location.toLowerCase() === "international") {
    if (budget < 1000000) return "Germany / Poland";
    if (budget < 2500000) return "Canada / Australia";
    return "USA / UK / Singapore";
  }
  return "Top Indian universities based on your state and placements.";
}

rl.question("Enter your interests: ", (interests) => {
  rl.question("Enter preferred course: ", (course) => {
    rl.question("Enter budget in INR: ", (budget) => {
      rl.question("Domestic or International?: ", (location) => {

        console.log("\n===== AI Recommendation =====");
        console.log(`Interest: ${interests}`);
        console.log(`Course: ${course}`);

        console.log("\nSources Used:");

        console.log("\n1. query_knowledge");
        console.log(query_knowledge(course));

        console.log("\n2. get_insights");
        console.log(get_insights(parseInt(budget), location));

        console.log("\nNext Steps:");
        console.log("- Compare universities");
        console.log("- Check scholarships");
        console.log("- Apply before deadlines");

        rl.close();
      });
    });
  });
});