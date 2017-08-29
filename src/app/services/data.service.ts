import { Injectable } from '@angular/core';
import { Question } from './../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    /*
    this.questions = [
      {
        question: 'What is your name?',
        answer: 'Abdurahman A Gugssa',
        hide: true
      },
      {
        question: 'What is your favorite pet?',
        answer: 'Cats',
        hide: true
      }, {
        question: 'Which city did you grew up?',
        answer: 'Addis Ababa',
        hide: true
      }
    ];
    */
   }

  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

   addQuestion(question: Question) {
     this.questions.unshift(question);

     // Init local var
     let questions;

     if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new arrary to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
   }

   removeQuestion(question: Question) {
     const index = this.questions.indexOf(question);
     this.questions.splice(index, 1);
     localStorage.setItem('questions', JSON.stringify(this.questions));
   }

}
