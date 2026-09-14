import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "E-Commerce Logistics Analytics",
    description:
      "An analytics-engineering pipeline for the Olist Brazilian E-Commerce dataset (99k+ orders), focused on delivery speed, freight cost, seller performance, and data quality. Built with ClickHouse, dbt, and Metabase, fully containerized with Docker.",
    highlight: "26 dbt models · 4 dashboards",
    stack: ["ClickHouse", "dbt", "Metabase", "Docker", "Python", "SQL"],
    image: "/assets/project-6.png",
    githubUrl: "https://github.com/cancinoray/ecommerce-logistics-analytics",
    slug: "ecommerce-logistics-analytics",
  },
  {
    title: "Carnot Coaching Center",
    description:
      "An EdTech platform targeting Philippine engineering licensure examinees. Built the full-stack web application, infrastructure, and data strategy for the August 2026 MELE cohort launch.",
    highlight: "100+ students using it live",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Railway",
    ],
    image: "/assets/project-6.png",
    liveUrl: "https://www.carnot-coaching-center.com",
  },
  {
    title: "Data Analysis for Engineers",
    description:
      "A project-based Python course teaching engineers job-ready data analysis skills, from Pandas and NumPy to statistics and applied ML, through six case studies grounded in Philippine engineering practice.",
    highlight: "6 modules · 6 engineering fields",
    stack: ["Python", "Pandas", "NumPy", "SciPy", "Statistics"],
    image: "/assets/project-6.png",
    courseUrl: "https://www.carnot-coaching-center.com/courses/data-analysis",
    slug: "data-analysis-for-engineers",
  },
  {
    title: "2025 COMELEC Election Data Analytics Platform",
    description:
      "A comprehensive data engineering platform for collecting, processing, and analyzing election data from the 2025 Philippines Commission on Elections (COMELEC) national and local elections.",
    highlight: "92K+ files · ~8M votes",
    stack: [
      "Python",
      "GCP",
      "BigQuery",
      "Google Cloud Storage",
      "Terraform",
      "dbt",
    ],
    image: "/assets/project-6.png",
    githubUrl:
      "https://github.com/cancinoray/2025-comelec-national-and-local-election",
    slug: "2025-comelec-election-analytics",
  },
  {
    title: "Stack Overflow End-to-End Data Pipeline",
    description:
      "This project analyzes 14 years of Stack Overflow Developer Survey data to uncover valuable insights into technology trends, developer experiences, and industry shifts. The analysis covers a wide range of topics, including programming languages, salary distribution, education demographics, job roles, and predictions for future tech trends.",
    highlight: "14 years · 2011–2024",
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
    slug: "stackoverflow-data-pipeline",
  },
  {
    title: "Amazon Sales Data Analysis",
    description:
      "This project processes and analyzes Amazon sales data to generate insightful metrics and visualizations, including sales performance, return rates, profit margins, and fee analysis.",
    highlight: "Sales · returns · margins",
    stack: ["Python", "Pandas", "Matplotlib", "Data Processing"],
    features: [
      "Data Processing: Extracts detailed fee information from raw Amazon sales data.",
      "Sales Metrics: Calculates total sales, net proceeds, return rates, and profit margins.",
      "Visualizations: Generates bar charts for sales, return rates, profit margins, and fee analysis.",
    ],
    image: "/assets/project-3.png",
    githubUrl: "https://github.com/cancinoray/amazon-sales-data-analysis",
    slug: "amazon-sales-data-analysis",
  },
  {
    title: "Weather Data Pipeline",
    description:
      "This project collects, processes, and analyzes weather data to enable insightful visualizations and trend analysis using modern data tools.",
    highlight: "3 services · 2 dashboards",
    stack: ["Python", "PostgreSQL", "Docker", "Metabase", "ETL"],
    features: [
      "Data Collection: Fetches real-time and historical weather data from a public API.",
      "Data Storage and Processing: Cleans and stores data in PostgreSQL using Python ETL scripts within Docker containers.",
      "Visualizations: Uses Metabase to create dashboards showing temperature trends, humidity levels, and weather anomalies.",
    ],
    image: "/assets/project-4.png",
    githubUrl: "https://github.com/cancinoray/weather-api-pipeline-dashboard",
    slug: "weather-data-pipeline",
  },
  {
    title: "Machine Learning Zoomcamp Coursework",
    description:
      "This project is a collection of coursework from the Machine Learning Zoomcamp, covering various topics in machine learning and data science.",
    highlight: "9 modules · full ML lifecycle",
    stack: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Docker",
      "Kubernetes",
      "Flask",
    ],
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
    slug: "ml-zoomcamp",
  },
];
