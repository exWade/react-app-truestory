import { IAccount } from '../types/models'
import { cards } from './cards'

export const profile: IAccount = {
  "nickname": 'vileontev',
  "firstName": 'Vitaly',
  "photo": '../images/photoHH.jpg',
  "status": '🎯',
  "about": {
    "job": 'Front-end developer',
    "age": 22,
    "residence": {
      "city": 'Saint Petersburg',
      "country": 'Russia'
    }
  },
  "backgroundImage": 'https://images.unsplash.com/photo-1603350929754-7faba95e062c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2104&q=80',
  "cardsCount": cards.length,
  "followersCount": 3065,
  "followingCount": 52
}