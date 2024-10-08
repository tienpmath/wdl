import { StaticImageData } from "next/image";

import course_thumb1 from "@/assets/img/courses/course_thumb01.jpg"
import course_thumb2 from "@/assets/img/courses/course_thumb02.jpg"
import course_thumb3 from "@/assets/img/courses/course_thumb03.jpg"
import course_thumb4 from "@/assets/img/courses/course_thumb04.jpg"
import course_thumb5 from "@/assets/img/courses/course_thumb05.jpg"
import course_thumb6 from "@/assets/img/courses/course_thumb06.jpg"

import course_thumb7 from "@/assets/img/courses/h8_course_thumb01.jpg"
import course_thumb8 from "@/assets/img/courses/h8_course_thumb02.jpg"
import course_thumb9 from "@/assets/img/courses/h8_course_thumb03.jpg"
import course_thumb10 from "@/assets/img/courses/h8_course_thumb04.jpg"
import course_thumb11 from "@/assets/img/courses/h8_course_thumb05.jpg"
import course_thumb12 from "@/assets/img/courses/h8_course_thumb06.jpg"
import course_thumb13 from "@/assets/img/courses/h8_course_thumb07.jpg"
import course_thumb14 from "@/assets/img/courses/h8_course_thumb08.jpg"

interface DataType {
   id: number;
   page: string;
   course_details: {
      id: number;
      thumb: StaticImageData;
      tag: string;
      review: string;
      title: string;
      author?: string;
      price: number;
      lesson?: string;
      minute?: string;
   }[]
}[];

const course_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      course_details: [
         {
            id: 1,
            thumb: course_thumb1,
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            price: 15,
         },
         {
            id: 2,
            thumb: course_thumb2,
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            price: 19,
         },
         {
            id: 3,
            thumb: course_thumb3,
            tag: "Marketing",
            review: "(4.3 Reviews)",
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            price: 24,
         },
         {
            id: 4,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
         {
            id: 5,
            thumb: course_thumb5,
            tag: "Data Science",
            review: "(4.5 Reviews)",
            title: "Data Analysis & Visualization Masterclass",
            author: "David Millar",
            price: 27,
         },
         {
            id: 6,
            thumb: course_thumb6,
            tag: "Mathematic",
            review: "(4.7 Reviews)",
            title: "Master the Fundamentals of Math",
            author: "David Millar",
            price: 10,
         },
         {
            id: 7,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
      ]
   },
   {
      id: 2,
      page: "home_1",
      course_details: [
         {
            id: 1,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
         {
            id: 2,
            thumb: course_thumb5,
            tag: "Data Science",
            review: "(4.5 Reviews)",
            title: "Data Analysis & Visualization Masterclass",
            author: "David Millar",
            price: 27,
         },
         {
            id: 3,
            thumb: course_thumb6,
            tag: "Mathematic",
            review: "(4.7 Reviews)",
            title: "Master the Fundamentals of Math",
            author: "David Millar",
            price: 10,
         },
         {
            id: 4,
            thumb: course_thumb1,
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            price: 15,
         },
         {
            id: 5,
            thumb: course_thumb2,
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            price: 19,
         },
         {
            id: 6,
            thumb: course_thumb3,
            tag: "Marketing",
            review: "(4.3 Reviews)",
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            price: 24,
         },
         {
            id: 7,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
      ]
   },
   {
      id: 3,
      page: "home_1",
      course_details: [
         {
            id: 1,
            thumb: course_thumb1,
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            price: 15,
         },
         {
            id: 2,
            thumb: course_thumb2,
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            price: 19,
         },
         {
            id: 3,
            thumb: course_thumb3,
            tag: "Marketing",
            review: "(4.3 Reviews)",
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            price: 24,
         },
         {
            id: 4,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
         {
            id: 5,
            thumb: course_thumb5,
            tag: "Data Science",
            review: "(4.5 Reviews)",
            title: "Data Analysis & Visualization Masterclass",
            author: "David Millar",
            price: 27,
         },
         {
            id: 6,
            thumb: course_thumb6,
            tag: "Mathematic",
            review: "(4.7 Reviews)",
            title: "Master the Fundamentals of Math",
            author: "David Millar",
            price: 10,
         },
         {
            id: 7,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
      ]
   },
   {
      id: 4,
      page: "home_1",
      course_details: [
         {
            id: 1,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
         {
            id: 2,
            thumb: course_thumb5,
            tag: "Data Science",
            review: "(4.5 Reviews)",
            title: "Data Analysis & Visualization Masterclass",
            author: "David Millar",
            price: 27,
         },
         {
            id: 3,
            thumb: course_thumb6,
            tag: "Mathematic",
            review: "(4.7 Reviews)",
            title: "Master the Fundamentals of Math",
            author: "David Millar",
            price: 10,
         },
         {
            id: 4,
            thumb: course_thumb1,
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            price: 15,
         },
         {
            id: 5,
            thumb: course_thumb2,
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            price: 19,
         },
         {
            id: 6,
            thumb: course_thumb3,
            tag: "Marketing",
            review: "(4.3 Reviews)",
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            price: 24,
         },
         {
            id: 7,
            thumb: course_thumb4,
            tag: "Business",
            review: "(4.8 Reviews)",
            title: "Financial Analyst Training & Investing Course",
            author: "David Millar",
            price: 12,
         },
      ]
   },

   // home_8

   {
      id: 1,
      page: "home_8",
      course_details: [
         {
            id: 1,
            thumb: course_thumb7,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 75,
            lesson: "05",
            minute: "34",
         },
         {
            id: 2,
            thumb: course_thumb8,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 22,
            lesson: "05",
            minute: "20",
         },
         {
            id: 3,
            thumb: course_thumb9,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 19,
            lesson: "05",
            minute: "30",
         },
         {
            id: 4,
            thumb: course_thumb10,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 79,
            lesson: "05",
            minute: "304",
         },
         {
            id: 5,
            thumb: course_thumb11,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 49,
            lesson: "05",
            minute: "30",
         },
         {
            id: 6,
            thumb: course_thumb12,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 25,
            lesson: "05",
            minute: "44",
         },
         {
            id: 7,
            thumb: course_thumb13,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 59,
            lesson: "05",
            minute: "30",
         },
         {
            id: 8,
            thumb: course_thumb8,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 15,
            lesson: "05",
            minute: "22",
         },
      ]
   },
   {
      id: 2,
      page: "home_8",
      course_details: [
         {
            id: 1,
            thumb: course_thumb11,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 49,
            lesson: "05",
            minute: "30",
         },
         {
            id: 2,
            thumb: course_thumb12,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 25,
            lesson: "05",
            minute: "44",
         },
         {
            id: 3,
            thumb: course_thumb13,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 59,
            lesson: "05",
            minute: "30",
         },
         {
            id: 4,
            thumb: course_thumb7,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 15,
            lesson: "05",
            minute: "22",
         },
         {
            id: 5,
            thumb: course_thumb7,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 75,
            lesson: "05",
            minute: "34",
         },
         {
            id: 6,
            thumb: course_thumb8,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 22,
            lesson: "05",
            minute: "20",
         },
         {
            id: 7,
            thumb: course_thumb9,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 19,
            lesson: "05",
            minute: "30",
         },
         {
            id: 8,
            thumb: course_thumb10,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 79,
            lesson: "05",
            minute: "304",
         },
      ]
   },
   {
      id: 3,
      page: "home_8",
      course_details: [
         {
            id: 1,
            thumb: course_thumb7,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 75,
            lesson: "05",
            minute: "34",
         },
         {
            id: 2,
            thumb: course_thumb8,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 22,
            lesson: "05",
            minute: "20",
         },
         {
            id: 3,
            thumb: course_thumb9,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 19,
            lesson: "05",
            minute: "30",
         },
         {
            id: 4,
            thumb: course_thumb10,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 79,
            lesson: "05",
            minute: "304",
         },
         {
            id: 5,
            thumb: course_thumb11,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 49,
            lesson: "05",
            minute: "30",
         },
         {
            id: 6,
            thumb: course_thumb12,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 25,
            lesson: "05",
            minute: "44",
         },
         {
            id: 7,
            thumb: course_thumb13,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 59,
            lesson: "05",
            minute: "30",
         },
         {
            id: 8,
            thumb: course_thumb7,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 15,
            lesson: "05",
            minute: "22",
         },
      ]
   },
   {
      id: 4,
      page: "home_8",
      course_details: [
         {
            id: 1,
            thumb: course_thumb11,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 49,
            lesson: "05",
            minute: "30",
         },
         {
            id: 2,
            thumb: course_thumb12,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 25,
            lesson: "05",
            minute: "44",
         },
         {
            id: 3,
            thumb: course_thumb13,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 59,
            lesson: "05",
            minute: "30",
         },
         {
            id: 4,
            thumb: course_thumb7,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 15,
            lesson: "05",
            minute: "22",
         },
         {
            id: 5,
            thumb: course_thumb7,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 75,
            lesson: "05",
            minute: "34",
         },
         {
            id: 6,
            thumb: course_thumb8,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 22,
            lesson: "05",
            minute: "20",
         },
         {
            id: 7,
            thumb: course_thumb9,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 19,
            lesson: "05",
            minute: "30",
         },
         {
            id: 8,
            thumb: course_thumb10,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 79,
            lesson: "05",
            minute: "304",
         },
      ]
   },
   {
      id: 5,
      page: "home_8",
      course_details: [
         {
            id: 1,
            thumb: course_thumb7,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 15,
            lesson: "05",
            minute: "22",
         },
         {
            id: 2,
            thumb: course_thumb7,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 75,
            lesson: "05",
            minute: "34",
         },
         {
            id: 3,
            thumb: course_thumb8,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 22,
            lesson: "05",
            minute: "20",
         },
         {
            id: 4,
            thumb: course_thumb11,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 49,
            lesson: "05",
            minute: "30",
         },
         {
            id: 5,
            thumb: course_thumb12,
            tag: "Chinese",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 25,
            lesson: "05",
            minute: "44",
         },
         {
            id: 6,
            thumb: course_thumb13,
            tag: "Dessert",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 59,
            lesson: "05",
            minute: "30",
         },
         {
            id: 7,
            thumb: course_thumb9,
            tag: "Pizza",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 19,
            lesson: "05",
            minute: "30",
         },
         {
            id: 8,
            thumb: course_thumb10,
            tag: "Italian",
            review: "(4.8 Reviews)",
            title: "It Statistics Data Science And Business Analysis",
            price: 79,
            lesson: "05",
            minute: "304",
         },
      ]
   },
];

export default course_data;