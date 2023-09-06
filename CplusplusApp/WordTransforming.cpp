#include "WordTransforming.h"
#include <iostream>
#include <fstream>
#include <cctype>

static const std::string FILE_NAME = "dictionary.txt";

WordTransforming::WordTransforming(const std::string& firstWord, const std::string& secondWord) 
{
	//set words
	m_FirstWord = firstWord;
	m_SecondWord = secondWord;
	//toLower
	ToLowerCaseInPlace(m_FirstWord);
	ToLowerCaseInPlace(m_SecondWord);
	//read in dictionary
	m_Dictionary = std::unordered_set<std::string>();
	std::ifstream myfile(FILE_NAME);
	if (myfile.is_open()) {
		while (myfile) 
		{
			std::string line;
			std::getline(myfile,line);
			ToLowerCaseInPlace(line);
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

void WordTransforming::ToLowerCaseInPlace(std::string & value)
{
	for ( int i = 0; i<value.size(); i++ ) 
	{
		value[i] = tolower(value[i]);
	}
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
	if (currentWord == m_SecondWord)
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
		for ( int i =0; i< m_FirstWord.size(); i++)
		{
			if (previousIndices.find(i) == previousIndices.end())
			{
				//get indicies swaps
				std::string current_word_layer = currentWord;
				//swap
				current_word_layer[i] = m_SecondWord[i];

				//check if the words has been found
				bool already_exists = false;
				for (int j =0; j<previousWords.size(); j++)
				{
					if ( previousWords[j] == current_word_layer)
					{
						already_exists = true;
						break;
					}
				}

				//check if it is a valid word
				if (m_Dictionary.find( current_word_layer) != m_Dictionary.end() && already_exists == false)
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