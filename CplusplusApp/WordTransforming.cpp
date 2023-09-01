#include "WordTransforming.h"
#include <iostream>
#include <fstream>

static const std::string FILE_NAME = "dictionary.txt";
static  const int CHARACTER_LENGTH = 4;

WordTransforming::WordTransforming(const std::string& firstWord, const std::string& secondWord) 
{
	//set words
	m_FirstWord = firstWord;
	m_SecondWord = secondWord;
	//read in dictionary
	m_Dictionary = std::unordered_set<std::string>();
	std::ifstream myfile(FILE_NAME);
	if (myfile.is_open()) {
		while (myfile) 
		{
			std::string line;
			std::getline(myfile,line);
			m_Dictionary.insert(line);
		}
	}
}

std::string& WordTransforming::getFirstWord(void) 
{
	return m_FirstWord;
}

std::string& WordTransforming::getSecondWord(void) 
{
	return m_SecondWord;
}

std::unordered_set<std::string>& WordTransforming::getDictionary(void) 
{
	return m_Dictionary;
}

bool WordTransforming::transform(void) 
{
	bool result = false;
	std::string current_word = m_FirstWord;
	std::unordered_set<std::string> used_words = std::unordered_set<std::string>();
	std::unordered_set<int> indices = std::unordered_set<int>();
	std::vector<std::string> words = std::vector<std::string>();
	words.push_back(current_word);
	result = transformWordRecursiveStep(current_word, indices, words);
	return result;
}

bool WordTransforming::transformWordRecursiveStep(const std::string& currentWord, const std::unordered_set<int>& previousIndices, const std::vector<std::string>& previousWords) 
{
	bool result = false;
	if ( previousWords.size() == CHARACTER_LENGTH+1)
	{
		std::cout << "Found Sequence" << std::endl;
		for (std::string word: previousWords) 
		{
			std::cout << word << std::endl;
		}
		result = true;
	}
	else 
	{
		for ( int i =0; i< CHARACTER_LENGTH; i++)
		{
			if (previousIndices.find(i) == previousIndices.end())
			{
				//get 4 indicies swaps
				std::string current_word_layer = currentWord;
				//swap
				current_word_layer[i] = m_SecondWord[i];
				//check if it is a valid word
				if (m_Dictionary.find( current_word_layer) != m_Dictionary.end())
				{
					//move to the next letter
					std::unordered_set<int> current_indices(previousIndices.begin(), previousIndices.end());
					current_indices.insert(i);
					std::vector<std::string> current_words(previousWords.begin(), previousWords.end());
					current_words.push_back(current_word_layer);
					result |= transformWordRecursiveStep(current_word_layer, current_indices, current_words);
				}
			}
		}
	}
	return result;
}