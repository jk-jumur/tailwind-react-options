import { Line, LineChart, XAxis, YAxis } from "recharts";


const studentData = [
  {
    "student_id": "STU001",
    "name": "JK",
    "Intermediate Accounting": 78,
    "Business Statistics": 72,
    "Business Communication": 80,
    "Business Mathematics": 75,
    "Taxation in Bangladesh": 69,
    "Macroeconomics": 74
  },
  {
    "student_id": "STU002",
    "name": "Jumur",
    "Intermediate Accounting": 65,
    "Business Statistics": 70,
    "Business Communication": 68,
    "Business Mathematics": 62,
    "Taxation in Bangladesh": 71,
    "Macroeconomics": 66
  },
  {
    "student_id": "STU003",
    "name": "Khushbu",
    "Intermediate Accounting": 88,
    "Business Statistics": 85,
    "Business Communication": 90,
    "Business Mathematics": 84,
    "Taxation in Bangladesh": 80,
    "Macroeconomics": 87
  },
  {
    "student_id": "STU004",
    "name": "Jannat",
    "Intermediate Accounting": 56,
    "Business Statistics": 60,
    "Business Communication": 58,
    "Business Mathematics": 55,
    "Taxation in Bangladesh": 63,
    "Macroeconomics": 59
  },
  {
    "student_id": "STU005",
    "name": "paglu",
    "Intermediate Accounting": 91,
    "Business Statistics": 89,
    "Business Communication": 94,
    "Business Mathematics": 90,
    "Taxation in Bangladesh": 88,
    "Macroeconomics": 92
  },
  {
    "student_id": "STU006",
    "name": "chaglu",
    "Intermediate Accounting": 73,
    "Business Statistics": 76,
    "Business Communication": 70,
    "Business Mathematics": 68,
    "Taxation in Bangladesh": 74,
    "Macroeconomics": 72
  },
  {
    "student_id": "STU007",
    "name": "Hero Alom",
    "Intermediate Accounting": 82,
    "Business Statistics": 79,
    "Business Communication": 85,
    "Business Mathematics": 81,
    "Taxation in Bangladesh": 77,
    "Macroeconomics": 80
  },
  {
    "student_id": "STU008",
    "name": "Bappa Raj",
    "Intermediate Accounting": 67,
    "Business Statistics": 64,
    "Business Communication": 72,
    "Business Mathematics": 69,
    "Taxation in Bangladesh": 65,
    "Macroeconomics": 68
  },
  {
    "student_id": "STU009",
    "name": "AR",
    "Intermediate Accounting": 95,
    "Business Statistics": 92,
    "Business Communication": 96,
    "Business Mathematics": 94,
    "Taxation in Bangladesh": 90,
    "Macroeconomics": 93
  },
  {
    "student_id": "STU010",
    "name": "FC",
    "Intermediate Accounting": 60,
    "Business Statistics": 58,
    "Business Communication": 62,
    "Business Mathematics": 57,
    "Taxation in Bangladesh": 61,
    "Macroeconomics": 59
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='Business Communication'></Line>
                <Line dataKey={'Intermediate Accounting'} stroke="green"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;
