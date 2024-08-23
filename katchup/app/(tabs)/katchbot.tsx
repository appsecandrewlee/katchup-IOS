import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { generateText } from '../../services/api/OpenAI';

const AITextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
      const text = await generateText(prompt);
      setGeneratedText(text);
  };

  return (
    <View>
      <TextInput
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Enter your prompt"
      />
      <Button title="Generate" onPress={handleGenerate} />
      <Text>{generatedText}</Text>
    </View>
  );
};

export default AITextGenerator;