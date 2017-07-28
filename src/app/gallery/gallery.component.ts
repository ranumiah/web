import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  visibleImages: any[] = [];

  constructor() {
    this.visibleImages = IMAGES.slice(0);
  }

  ngOnChanges() {
    this.visibleImages = IMAGES.slice(0);
  }
}

const IMAGES = [
  { 'id': 1, 'category': 'boats', 'caption': 'View from the boat', 'url': 'assets/img/boat_01.jpeg' },
  { 'id': 2, 'category': 'boats', 'caption': 'Sailing the coast', 'url': 'assets/img/boat_02.jpeg' },
  { 'id': 3, 'category': 'boats', 'caption': 'The water was nice', 'url': 'assets/img/boat_03.jpeg' },
  { 'id': 4, 'category': 'boats', 'caption': 'Cool water cavern', 'url': 'assets/img/boat_04.jpeg' },
  { 'id': 5, 'category': 'boats', 'caption': 'Sunset at the docks', 'url': 'assets/img/boat_05.jpeg' },
  { 'id': 6, 'category': 'camping', 'caption': 'Camping Trip \'17\'', 'url': 'assets/img/camping_01.jpeg' },
  { 'id': 7, 'category': 'camping', 'caption': 'Kim and Jessie', 'url': 'assets/img/camping_02.jpeg' },
  { 'id': 8, 'category': 'camping', 'caption': 'View from the top', 'url': 'assets/img/camping_03.jpeg' },
  { 'id': 9, 'category': 'camping', 'caption': 'On the trail', 'url': 'assets/img/camping_04.jpg' },
  { 'id': 10, 'category': 'camping', 'caption': 'Our camping spot', 'url': 'assets/img/camping_05.jpeg' },
  { 'id': 11, 'category': 'camping', 'caption': 'RV Life', 'url': 'assets/img/camping_06.jpg' },
  { 'id': 12, 'category': 'camping', 'caption': 'Hiking trip 2017', 'url': 'assets/img/camping_07.jpeg' },
  { 'id': 13, 'category': 'library', 'caption': 'Big library', 'url': 'assets/img/library_01.jpeg' },
  { 'id': 14, 'category': 'library', 'caption': 'Stacks', 'url': 'assets/img/library_02.jpeg' },
  { 'id': 15, 'category': 'library', 'caption': 'Saturday afternoon', 'url': 'assets/img/library_03.jpeg' },
  { 'id': 16, 'category': 'library', 'caption': 'Local library', 'url': 'assets/img/library_04.jpeg' },
  { 'id': 17, 'category': 'library', 'caption': 'Nice library', 'url': 'assets/img/library_05.jpeg' },
  { 'id': 18, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/abstract-q-c-1920-1920-1.jpg' },
  { 'id': 19, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/abstract-q-c-1920-1920-8.jpg' },
  { 'id': 20, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/animals-q-c-1920-1920-1.jpg' },
  { 'id': 21, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/animals-q-c-1920-1920-8.jpg' },
  { 'id': 22, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/city-q-c-1920-1920-5.jpg' },
  { 'id': 23, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/city-q-c-1920-1920-9.jpg' },
  { 'id': 24, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/food-q-c-1920-1920-9.jpg' },
  { 'id': 25, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/nature-q-c-1920-1920-1.jpg' },
  { 'id': 26, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/nature-q-c-1920-1920-7.jpg' },
  { 'id': 27, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/people-q-c-1920-1920-7.jpg' },
  { 'id': 28, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/sports-q-c-1920-1920-2.jpg' },
  { 'id': 29, 'category': 'online', 'caption': 'Online Image', 'url': 'assets/img/technics-q-c-1920-1920-8.jpg' }
];
