import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Stack Overflow End-to-End Data Pipeline",
    description:
      "This project analyzes 14 years of Stack Overflow Developer Survey data to uncover valuable insights into technology trends, developer experiences, and industry shifts. The analysis covers a wide range of topics, including programming languages, salary distribution, education demographics, job roles, and predictions for future tech trends.",
    stack: [
      "Python",
      "Docker",
      "Apache Airflow",
      "dbt (Data Build Tool)",
      "Terraform",
      "Google Cloud Storage (GCS)",
      "Google BigQuery",
      "PySpark",
      "Pandas",
    ],
    image: "/assets/project-6.png",
    githubUrl: "https://github.com/cancinoray/stackoverflow-data-pipeline",
  },
  {
    title: "Amazon Sales Data Analysis",
    description:
      "This project processes and analyzes Amazon sales data to generate insightful metrics and visualizations, including sales performance, return rates, profit margins, and fee analysis.",
    features: [
      "Data Processing: Extracts detailed fee information from raw Amazon sales data.",
      "Sales Metrics: Calculates total sales, net proceeds, return rates, and profit margins.",
      "Visualizations: Generates bar charts for sales, return rates, profit margins, and fee analysis.",
    ],
    image: "/assets/project-3.png",
    githubUrl: "https://github.com/cancinoray/amazon-sales-data-analysis",
  },
  {
    title: "Weather Data Pipeline",
    description:
      "This project collects, processes, and analyzes weather data to enable insightful visualizations and trend analysis using modern data tools.",
    features: [
      "Data Collection: Fetches real-time and historical weather data from a public API.",
      "Data Storage and Processing: Cleans and stores data in PostgreSQL using Python ETL scripts within Docker containers.",
      "Visualizations: Uses Metabase to create dashboards showing temperature trends, humidity levels, and weather anomalies.",
    ],
    image: "/assets/project-4.png",
    githubUrl: "https://github.com/cancinoray/weather-api-pipeline-dashboard",
  },
  {
    title: "Machine Learning Zoomcamp Coursework",
    description:
      "This project is a collection of coursework from the Machine Learning Zoomcamp, covering various topics in machine learning and data science.",
    features: [
      "Module 1: Introduction to Machine Learning",
      "Module 2: Machine Learning for Regression",
      "Module 3: Machine Learning for Classification",
      "Module 4: Evaluation Metrics",
      "Module 5: Deploying ML Models",
      "Module 6: Decision Trees & Ensemble Learning",
      "Module 7: Neural Networks & Deep Learning",
      "Module 8: Serverless Deep Learning",
      "Module 9: Kubernetes & TensorFlow Serving",
    ],
    image: "/assets/project-5.png",
    githubUrl: "https://github.com/cancinoray/ml-zoomcamp-2024",
    courseUrl: "https://github.com/DataTalksClub/machine-learning-zoomcamp",
  },
];

