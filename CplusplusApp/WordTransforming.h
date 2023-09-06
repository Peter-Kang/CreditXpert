#pragma once
#include <string>
#include <unordered_set>
#include <vector>

class WordTransforming 
{
private:
	std::string m_FirstWord;
	
	std::string m_SecondWord;

	std::unordered_set<std::string> m_Dictionary;

	void ToLowerCaseInPlace(std::string& value);
	
public:

	WordTransforming(const std::string& firstWord, const std::string& secondWord);

	std::string& getFirstWord(void);

	std::string& getSecondWord(void);

	std::unordered_set<std::string>& getDictionary(void);

	bool transform(void);

	bool transformWordRecursiveStep(const std::string& currentWord, const std::unordered_set<int>& previousIndices, const std::vector<std::string>& previousWords);
};