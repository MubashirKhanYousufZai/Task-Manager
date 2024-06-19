//    TASK MANAGER:
import inquirer from "inquirer";
let task = await inquirer.prompt([
    {
        name: "Task",
        message: "Choose a task to manage?",
        type: "list",
        choices: ["Workout", "Reading", "Learn a small course online", "Prectice a hobby", "Plan your weak"]
    }
]);
if (task.Task === "Workout") {
    console.log("Choose exercises by the suggestion of your trainer.");
    console.log("Then start the exercise.");
    console.log("Do 5 reps of each exercise.");
    console.log("Take a energy drink in the middle of your Workout.");
    console.log("After break again start your exercise.");
    console.log("Then end your exercise.");
}
else if (task.Task === "Reading") {
    console.log("Select the Book which you want to read.");
    console.log("Open first page of the Book which you selected.");
    console.log("Then Start reading Carefully.");
    console.log("If you want to read turn next page.");
    console.log("Otherwise close the Book.📕");
}
else if (task.Task === "Learn a small course online") {
    console.log("Select the course in which you are intrested.");
    console.log("Then find your course online.");
    console.log("Then start learning from your course carefully.");
    console.log("If you learn from that course and got a skill so use it to earn some amount of monney.");
}
else if (task.Task === "Prectice a hobby") {
    let hobby = await inquirer.prompt([
        {
            name: "Hobby",
            message: "What is your hobby?",
            type: "input",
        }
    ]);
    console.log(`Start precticing Your Hobby ${hobby.Hobby}`);
}
else if (task.Task === "Plan your weak") {
    console.log("Firstly set your routine and add salah(NAMAZ) in your routine.)");
    console.log("Then start workout for a healthy lifestyle.");
    console.log("Start eating Healthy meals.");
    console.log("Start making natural movements of your body.");
    console.log("Start walking daily.");
}
