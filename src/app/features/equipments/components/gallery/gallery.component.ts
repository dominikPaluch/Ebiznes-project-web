import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor() {
    }

    ngOnInit() {
        this.galleryOptions = [
            {
                width: '1200px',
                height: '800px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '800px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: '../../../assets/1.jpg',
                medium: '../../../assets/1.jpg',
                big: '../../../assets/1.jpg'
            },
            {
                small: '../../../assets/2.jpg',
                medium: '../../../assets/2.jpg',
                big: '../../../assets/2.jpg'
            },
            {
                small: '../../../assets/3.jpeg',
                medium: '../../../assets/3.jpeg',
                big: '../../../assets/3.jpeg'
            },
            {
                small: '../../../assets/4.jpg',
                medium: '../../../assets/4.jpg',
                big: '../../../assets/4.jpg'
            },
            {
                small: '../../../assets/5.jpg',
                medium: '../../../assets/5.jpg',
                big: '../../../assets/5.jpg'
            },
            {
                small: '../../../assets/6.jpg',
                medium: '../../../assets/6.jpg',
                big: '../../../assets/6.jpg'
            },
            {
                small: '../../../assets/7.jpg',
                medium: '../../../assets7.jpg',
                big: '../../../assets/7.jpg'
            },
            {
                small: '../../../assets/8.jpg',
                medium: '../../../assets/8.jpg',
                big: '../../../assets/8.jpg'
            }
        ];
    }

}
