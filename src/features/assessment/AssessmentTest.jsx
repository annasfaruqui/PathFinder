import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "./InteractiveAssessmentHome.css";

import Button from "../../ui/Button";

const Question = styled.h4`
  font-size: 2.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const Options = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;

  li {
    cursor: pointer;
    font-size: 2rem;
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-radius: 20rem;
    background-color: var(--color-grey-50);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-grey-200);
      transform: translateX(3rem);
    }

    &:active {
      background-color: black;
      color: red;
    }
  }
`;

function AssessmentHome() {
  // Define preference-based questions and answers
  const preferenceQuestions = [
    {
      question: "Which of the following best describes your primary interest?",
      options: [
        "Designing user interfaces",
        "Programming and development",
        "Data analysis and visualization",
        "Infrastructure and operations",
      ],
    },
    {
      question: "What type of projects do you find most exciting?",
      options: [
        "Web development and apps",
        "Machine learning and AI",
        "Data-driven decision making",
        "Cloud and server management",
      ],
    },
    {
      question: "Which programming languages are you most comfortable with?",
      options: ["JavaScript", "Python", "Java", "Ruby", "Other"],
    },
    {
      question:
        "Do you prefer working on small projects with a focus on details or large-scale projects with complex challenges?",
      options: [
        "Small projects with attention to detail",
        "Large-scale projects with complex challenges",
        "Both equally",
      ],
    },
    {
      question:
        "How do you feel about continuous learning and staying updated with the latest technologies?",
      options: [
        "I love learning and staying updated",
        "I prefer a stable technology stack",
        "I'm open to learning, but not constantly",
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [recommendedCareerPath, setRecommendedCareerPath] = useState("");
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const navigate = useNavigate();

  const handleAnswerSelect = (selectedAnswer) => {
    if (!assessmentComplete) {
      const currentQuestion = preferenceQuestions[currentQuestionIndex];
      const updatedAnswers = {
        ...userAnswers,
        [currentQuestion.question]: selectedAnswer,
      };

      // Update user's answers
      setUserAnswers(updatedAnswers);

      // Move to the next question or mark the assessment as complete if all questions are answered
      if (currentQuestionIndex < preferenceQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Quiz is complete, recommend a career path based on the answers
        const recommendedPath = recommendCareerPath(updatedAnswers);
        setAssessmentComplete(true);
        setRecommendedCareerPath(recommendedPath);
      }
    }
  };

  const recommendCareerPath = (answers) => {
    const primaryInterest =
      answers["Which of the following best describes your primary interest?"];
    const projectType =
      answers["What type of projects do you find most exciting?"];
    const programmingLanguage =
      answers["Which programming languages are you most comfortable with?"];
    const projectSize =
      answers[
        "Do you prefer working on small projects with a focus on details or large-scale projects with complex challenges?"
      ];
    const learningStyle =
      answers[
        "How do you feel about continuous learning and staying updated with the latest technologies?"
      ];

    // Define an array to store relevant career paths based on user preferences
    let relevantPaths = [];

    // Define conditions for each career path and filter out irrelevant paths
    if (primaryInterest === "Designing user interfaces") {
      relevantPaths.push("UI/UX Designer");
    }

    if (primaryInterest === "Programming and development") {
      if (
        projectType === "Web development and apps" &&
        programmingLanguage === "JavaScript"
      ) {
        relevantPaths.push("Frontend Developer");
      }
      if (
        projectType === "Web development and apps" &&
        programmingLanguage === "Python"
      ) {
        relevantPaths.push("Full Stack Developer");
      }
      if (
        projectType === "Machine learning and AI" &&
        programmingLanguage === "Python"
      ) {
        relevantPaths.push("Machine Learning Engineer");
      }
      if (projectType === "Data-driven decision making") {
        relevantPaths.push("Data Analyst");
      }
      if (projectType === "Cloud and server management") {
        relevantPaths.push("DevOps Engineer");
      }
    }

    if (primaryInterest === "Data analysis and visualization") {
      relevantPaths.push("Data Scientist");
    }

    if (primaryInterest === "Infrastructure and operations") {
      relevantPaths.push("Cybersecurity Specialist");
    }

    // Filter out irrelevant paths based on project size and learning style
    if (projectSize === "Small projects with attention to detail") {
      relevantPaths = relevantPaths.filter(
        (path) => path !== "DevOps Engineer"
      );
    }
    if (learningStyle === "I prefer a stable technology stack") {
      relevantPaths = relevantPaths.filter(
        (path) => path !== "Frontend Developer"
      );
    }
    if (learningStyle === "I'm open to learning, but not constantly") {
      relevantPaths = relevantPaths.filter(
        (path) => path !== "Machine Learning Engineer"
      );
    }

    // If there are relevant paths, return the first one; otherwise, return 'Undecided'
    if (relevantPaths.length > 0) {
      return relevantPaths[0];
    }

    return "Undecided";
  };

  const resetAssessment = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setRecommendedCareerPath("");
    setAssessmentComplete(false);
  };

  function displayRecommendedCareerPath() {
    function handleBack() {
      resetAssessment();
      navigate(-1);
    }

    return (
      <div className="recommendations">
        <p className="path-heading">Recommended Career Path:</p>
        <p className="path">
          <span>{recommendedCareerPath}</span>
        </p>

        <div className="btn-box">
          <Button size="large" variation="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button size="large" onClick={resetAssessment}>
            Start Over 🔁
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {!assessmentComplete
        ? currentQuestionIndex < preferenceQuestions.length && (
            <div className="assessment">
              <Question>
                {preferenceQuestions[currentQuestionIndex].question}
              </Question>
              <Options>
                {preferenceQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <li key={index} onClick={() => handleAnswerSelect(option)}>
                      {option}
                    </li>
                  )
                )}
              </Options>
            </div>
          )
        : displayRecommendedCareerPath()}
    </>
  );
}

export default AssessmentHome;
