import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    estate,
    git,
    github,
    linkedin,
    mongodb,
    pricewise,
    snapgram,
    summiz,
    threads,
    // added tool icons
    docker,
    huggingface,
    numpy,
    python,
    streamlit,
    tensorflow,
    dvc,
    langchain,
    langsmith,
    mlflow,
    pinecone,
    powerbi,
    scikitlearn,
    sql,
    dagshub
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "ML Framework",
    },
    {
        imageUrl: scikitlearn,
        name: "scikit-learn",
        type: "ML Framework",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Data",
    },
    {
        imageUrl: dvc,
        name: "DVC",
        type: "MLOps",
    },
    {
        imageUrl: mlflow,
        name: "MLflow",
        type: "MLOps",
    },
    {
        imageUrl: streamlit,
        name: "Streamlit",
        type: "ML Apps",
    },
    {
        imageUrl: langchain,
        name: "LangChain",
        type: "LLM",
    },
    {
        imageUrl: langsmith,
        name: "LangSmith",
        type: "LLM",
    },
    {
        imageUrl: huggingface,
        name: "Hugging Face",
        type: "LLM",
    },
    {
        imageUrl: pinecone,
        name: "Pinecone",
        type: "Vector DB",
    },
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "BI/Analytics",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: dagshub,
        name: "DagsHub",
        type: "MLOps",
    }
];

export const experiences = [
    {
        title: "Machine Learning Engineer",
        company_name: "CodeAlpha",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "June 2025 - July 2025",
        points: [
            "Gained practical knowledge of Supervised and Unsupervised Learning techniques.",
            "Utilized scikit-learn for building and evaluating machine learning models.",
            "Developed an Emotion Recognition application.",
            "Built a Weather Prediction application.",
        ],
    },
    {
        title: "Artificial Intelligence Engineer",
        company_name: "NoviTech R&D Pvt Ltd",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "September 2024 - November 2024",
        points: [
            "Studied and applied key deep learning architectures: RNN, CNN, and Transformer models.",
            "Developed and implemented an Object Detection application.",
            "Created a Face Recognition system.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "CognaRise InfoTech",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "October 2024 - November 2024",
        points: [
            "Acquired proficiency in data visualization and reporting using Power BI.",
            "Conducted comprehensive Sales Analysis and generated actionable insights.",
            "Learned and applied core Python data libraries: Pandas, NumPy, Matplotlib, and Seaborn.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Vodafone Idea Foundation",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "September 2024 - November 2024",
        points: [
            "Developed skills in querying and managing databases using SQL.",
            "Utilized Tableau for creating interactive data visualizations and dashboards.",
            "Gained fundamental knowledge of the Snowflake cloud data platform.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Aldoreni45',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aldo-reni',
    }
];


export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Room Hunter',
        description: 'A room search platform built as a backend developer using Python (Flask), MongoDB, HTML, CSS, and JavaScript, allowing users to efficiently search and find available rooms.',
        link: 'https://github.com/Aldoreni45/Room_Hunter',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Guidy',
        description: 'A tourism guide project built with Python (Flask), MongoDB, HTML, CSS, and JavaScript. I implemented AR/VR features to offer tourists virtual reality guidance and safe travel information.',
        link: 'https://github.com/Aldoreni45/guidy',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Medico chat bot',
        description: 'A personalized medical chatbot built using RAG (Retrieval-Augmented Generation) architecture. It utilizes LangChain, LangSmith, and Pinecone, with ChatGroq as the LLM and Cohere API for embeddings, to provide personalized patient information.',
        link: 'https://github.com/Aldoreni45/Rag_implementation',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Pneumonia Detection MLOps',
        description: 'Finetuned a VGG16 model for specific Pneumonia detection. The project uses Docker for containerization and implements an MLOps pipeline with Prefect, integrating tools like MLflow, DVC, and Dagshub for tracking and versioning.',
        link: 'https://github.com/Aldoreni45/pneumonia_detection_mlops',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'SQL Natural Language Processing',
        description: 'Developed a system using LangChain to connect with SQL databases, allowing users to query data using natural language (English) and receive results without writing traditional SQL queries.',
        link: 'https://github.com/Aldoreni45/SQL_Natural_Language_Processing',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Chest Cancer Detection using VG16',
        description: 'A complete end-to-end MLOps solution involving the finetuning of a VGG16 model for Chest Cancer Detection, following a similar MLOps workflow, execution, and tech stack as the Pneumonia Detection project.',
        link: 'https://github.com/Aldoreni45/deeplearning_mlops',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Emotion Recognition using Random Forest',
        description: 'An audio-based Emotion Recognition system built using a Random Forest Classifier. The project utilizes MLOps, DVC, Dagshub, and MLflow to manage the end-to-end pipeline.',
        link: 'https://github.com/Aldoreni45/mlops_end_to_end_emotion_rec',
    }
];