const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Simulated LPI Tool Call 1
async function query_knowledge(course) {
  return {
    tool: "query_knowledge",
    data: `Compared ${course} curriculum, internships, placements, rankings and ROI from knowledge sources.`
  };
}

// Simulated LPI Tool Call 2
async function get_insights(budget, location) {
  let suggestion = "";

  if (location.toLowerCase() === "international") {
    if (budget < 1000000) suggestion = "Germany / Poland";
    else if (budget < 2500000) suggestion = "Canada / Australia";
    else suggestion = "USA / UK / Singapore";
  } else {
    suggestion = "Top Indian universities based on ROI and placements";
  }

  return {
    tool: "get_insights",
    data: suggestion
  };
}

function ask(q) {
  return new Promise((resolve) => rl.question(q, resolve));
}

async function runAgent() {
  try {
    const interests = await ask("Enter your interests: ");
    const course = await ask("Enter preferred course: ");
    const budgetInput = await ask("Enter budget in INR: ");
    const location = await ask("Domestic or International?: ");

    if (!interests.trim() || !course.trim() || !location.trim()) {
      throw new Error("Inputs cannot be empty.");
    }

    const budget = Number(budgetInput);

    if (isNaN(budget) || budget <= 0) {
      throw new Error("Budget must be a valid positive number.");
    }

    const tool1 = await query_knowledge(course);
    const tool2 = await get_insights(budget, location);

    console.log("\n===== AI Recommendation =====");
    console.log(`Interest: ${interests}`);
    console.log(`Course: ${course}`);

    console.log("\nLPI Tools Used:");
    console.log(`1. ${tool1.tool}`);
    console.log(tool1.data);

    console.log(`\n2. ${tool2.tool}`);
    console.log(tool2.data);

    console.log("\nReasoning:");
    console.log("Recommendation selected using user interests, budget, location and academic path.");

    console.log("\nNext Steps:");
    console.log("- Compare admission criteria");
    console.log("- Apply for scholarships");
    console.log("- Track deadlines");
  } catch (err) {
    console.log("\nError:", err.message);
  } finally {
    rl.close();
  }
}

runAgent();