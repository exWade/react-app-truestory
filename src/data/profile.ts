import { IAccount } from '../types/models'
import { cards } from './cards'
import backgroundImage from '../assets/background.jpg';
import profilePhoto from '../assets/profile_photo.jpg'

export const profile: IAccount = {
  "nickname": 'vileontev',
  "firstName": 'Vitaly',
  "photo": profilePhoto,
  "status": '🎯',
  "about": {
    "job": 'Front-end developer',
    "age": 22,
    "residence": {
      "city": 'Saint Petersburg',
      "country": 'Russia'
    }
  },
  "backgroundImage": backgroundImage,
  "cardsCount": cards.length,
  "followersCount": 3065,
  "followingCount": 52
}