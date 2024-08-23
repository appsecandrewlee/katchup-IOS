import axios from 'axios';
import { OPENAI_API_KEY } from '@env';


const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
  },
});

export const generateText = async (prompt: string): Promise<string> => {
    const response = await openAI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    });
    return response.data.choices[0].message.content;
};