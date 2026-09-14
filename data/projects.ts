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
    slug: "carnot-coaching-center",
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
      "An end-to-end platform that scrapes, processes, and transforms the 2025 Philippine national and local elections (92K+ files, ~8M candidate votes) into analytics-ready marts on GCP.",
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
      "An end-to-end pipeline over 14 years of Stack Overflow Developer Survey data: scrape, GCS, PySpark, BigQuery, dbt, Looker, orchestrated with Airflow and provisioned with Terraform.",
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
      "A two-script Python pipeline that extracts the fee detail buried in raw Amazon sales data and turns it into sales, return-rate, and profit-margin charts.",
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
      "A containerized ETL pipeline that pulls live weather from OpenWeatherMap into PostgreSQL, then serves it through Metabase dashboards, all reproducible with one Docker Compose command.",
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
      "Completed coursework from the Machine Learning Zoomcamp, taken end to end from regression and classification through to deployed models on Flask, Docker, and Kubernetes.",
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
