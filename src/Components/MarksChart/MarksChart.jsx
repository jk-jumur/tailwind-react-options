import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";


const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    console.log(marksData)

      // data processing for the chart 
           const marksChartData = marksData.map(studentData => {
               const student = {
                  id: studentData.student_id,
                  name: studentData.name,
                   'business communication': studentData.marks["Business Communication"]  ,
                   'business mathematics': studentData.marks["Business Mathematics"],
               }

                const avg =
             (student["business communication"] +
               student["business mathematics"]) / 2;
                student.avg= avg;
                return student
           })
             console.log(marksChartData)
        


    return (
        <div>
              <BarChart width={500} height={300} data={marksChartData}>
                  <XAxis dataKey={'name'}></XAxis>
                  <YAxis></YAxis>
                  <Bar dataKey={'avg'} fill="yellow"></Bar>
                  <Bar dataKey={'business communication'} fill="blue"></Bar>
              </BarChart>
        </div>
    );
};

export default MarksChart;