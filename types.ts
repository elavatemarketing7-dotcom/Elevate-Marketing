
export interface Question {
  id: number;
  text: string;
  options: string[];
}

export type AppState = 'INITIAL' | 'QUIZ' | 'RESULT' | 'LANDING';

export interface QuizResult {
  [key: string]: string;
}
