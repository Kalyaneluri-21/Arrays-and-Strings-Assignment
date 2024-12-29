let students_scores = [10,18,36,50,96,64,85,92,75,82];
let count = 0;
for(let i=0;i<students_scores.length;i++){
    if(students_scores[i]<40){
        students_scores[i]+=20;
    }
    if(students_scores[i]>90){
        students_scores[i]=90;
    }
    if(students_scores[i]>=50){
        count+=1;
    }
}
console.log(`Total number of students passed: ${count}`);
console.log(students_scores);