let tasks = ["check_phone","exercise","classes","study","relax"];
for(let i=0;i<tasks.length-1;i++){
    tasks[i]=tasks[i+1];
}
for (let j = tasks.length - 1; j >= 0; j--) {
    tasks[j+2] = tasks[j];
}
tasks.length=tasks.length-1;
tasks[0]="meditation";
tasks[1]="revise_notes"
tasks[tasks.length-1]="recap_concepts";
console.log(tasks);