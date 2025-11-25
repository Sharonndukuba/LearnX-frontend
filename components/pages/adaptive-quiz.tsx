"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RotateCcw, Brain, Trophy } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "What is the derivative of x²?",
    options: ["2x", "x", "2", "1"],
    correct: 0,
    difficulty: "Beginner",
  },
  {
    id: 2,
    question: "Which of the following is a prime number?",
    options: ["1", "4", "7", "9"],
    correct: 2,
    difficulty: "Beginner",
  },
  {
    id: 3,
    question: "What is the limit of 1/x as x approaches infinity?",
    options: ["∞", "0", "1", "undefined"],
    correct: 1,
    difficulty: "Intermediate",
  },
  {
    id: 4,
    question: "Integrate ∫ 2x dx",
    options: ["x² + C", "2x² + C", "x + C", "2x"],
    correct: 0,
    difficulty: "Intermediate",
  },
  {
    id: 5,
    question: "What is the chain rule used for?",
    options: [
      "Multiplying numbers",
      "Finding derivatives of composite functions",
      "Solving quadratic equations",
      "Finding integrals",
    ],
    correct: 1,
    difficulty: "Advanced",
  },
]

interface QuizAnswer {
  questionId: number
  selected: number
  correct: boolean
}

export function AdaptiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = quizQuestions[currentQuestion]

  const handleSelectAnswer = (index: number) => {
    setSelected(index)
    setShowResult(true)
  }

  const handleNext = () => {
    if (selected !== null) {
      const isCorrect = selected === question.correct
      setAnswers([
        ...answers,
        {
          questionId: question.id,
          selected,
          correct: isCorrect,
        },
      ])

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelected(null)
        setShowResult(false)
      } else {
        setQuizComplete(true)
      }
    }
  }

  const correctAnswers = answers.filter((a) => a.correct).length
  const score = Math.round((correctAnswers / answers.length) * 100)

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4 md:p-8 flex items-center justify-center">
        <Card className="border-primary/40 max-w-md w-full animate-scaleIn bg-gradient-to-br from-card to-card/50 shadow-2xl shadow-primary/30">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/10 border-b border-primary/20 text-center">
            <CardTitle className="text-3xl animate-slideInDown flex items-center justify-center gap-2">
              <Trophy className="w-7 h-7 text-accent animate-float" />
              Quiz Complete!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center pt-8">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 animate-slideInUp border border-primary/30 shadow-md shadow-primary/20">
              <p className="text-muted-foreground mb-2 text-sm font-medium">Your Score</p>
              <p className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse-glow">
                {score}%
              </p>
            </div>
            <div className="space-y-3 animate-slideInUp" style={{ animationDelay: "200ms" }}>
              <p className="text-lg font-semibold text-foreground">
                You got <span className="text-primary">{correctAnswers}</span> out of{" "}
                <span className="text-secondary">{answers.length}</span> correct
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {score >= 80
                  ? "Excellent work! Ready for advanced topics."
                  : score >= 60
                    ? "Good effort! Review weak areas."
                    : "Keep practicing! You'll improve."}
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground btn-hover font-semibold rounded-lg flex items-center justify-center gap-2"
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers([])
                setSelected(null)
                setShowResult(false)
                setQuizComplete(false)
              }}
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 animate-slideInRight">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            Adaptive Quiz
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground font-medium">
              Question <span className="text-primary font-bold">{currentQuestion + 1}</span> of{" "}
              <span className="text-secondary font-bold">{quizQuestions.length}</span>
            </p>
            <div className="text-sm font-bold px-4 py-1.5 bg-gradient-to-r from-accent/30 to-accent/10 text-accent rounded-full border border-accent/30 shadow-md shadow-accent/20">
              {question.difficulty}
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-3 mt-4 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500 shadow-lg shadow-primary/50"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="border-border/50 mb-8 animate-slideInUp bg-gradient-to-br from-card to-card/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b border-primary/10">
            <CardTitle className="text-2xl text-foreground">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-300 font-medium transform ${
                    selected === index
                      ? index === question.correct
                        ? "border-secondary/60 bg-gradient-to-r from-secondary/25 to-secondary/10 scale-105 shadow-lg shadow-secondary/30"
                        : "border-destructive/60 bg-gradient-to-r from-destructive/25 to-destructive/10 scale-95 shadow-lg shadow-destructive/20"
                      : showResult && index === question.correct
                        ? "border-secondary/60 bg-gradient-to-r from-secondary/25 to-secondary/10 shadow-md shadow-secondary/20"
                        : "border-border/50 hover:border-primary/40 hover:scale-102 hover:shadow-md hover:shadow-primary/15 hover:bg-muted/30"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-lg">{option}</span>
                    {selected === index && (
                      <div className="animate-scaleIn">
                        {index === question.correct ? (
                          <CheckCircle2 className="w-6 h-6 text-secondary" />
                        ) : (
                          <XCircle className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                    )}
                    {showResult && index === question.correct && selected !== index && (
                      <CheckCircle2 className="w-6 h-6 text-secondary animate-slideInRight" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-6 text-base btn-hover font-semibold rounded-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
          onClick={handleNext}
          disabled={selected === null}
        >
          {currentQuestion === quizQuestions.length - 1 ? (
            <>
              <Trophy className="w-5 h-5" />
              See Results
            </>
          ) : (
            "Next Question"
          )}
        </Button>
      </div>
    </div>
  )
}
