export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  ERROR = 'ERROR'
}

export interface BreedBotState {
  messages: Message[];
  loadingState: LoadingState;
}

export interface BreedData {
  id: string;
  name: string;
  category: 'Cattle' | 'Buffalo';
  origin: string;
  utility: string;
  morphology: string;
  performance: string;
  synonyms?: string;
}