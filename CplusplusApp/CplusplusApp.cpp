// CplusplusApp.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "WordTransforming.h"

int main()
{
    std::string first_word = "";
    while (first_word.size() == 0)
    {
        std::cout << "Please enter in a letter word\n";
        std::cin >> first_word;
    }
    std::string second_word = "";
    while (second_word.size() == 0)
    {
        std::cout << "Please enter in another word\n";
        std::cin >> second_word;
    }
    WordTransforming word_transforming = WordTransforming(first_word, second_word);
    std::cout << "Words used: " << word_transforming.getFirstWord() << " to "<< word_transforming.getSecondWord() << std::endl;
    bool result = word_transforming.transform();
    if (result == false) 
    {
        std::cout << "Could not sequence" << std::endl;
    }
    std::cout << "Press to end" << std::endl;
    std::cin.ignore();
}
