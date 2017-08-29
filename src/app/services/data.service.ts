import { Injectable } from '@angular/core';
import { Question } from './../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
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
   }

   getQuestions() {
     return this.questions;
   }

   addQuestion(question: Question) {
     this.questions.unshift(question);
   }

}
