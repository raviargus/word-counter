import { Component, OnInit } from '@angular/core';

import { CountFrequencyService } from './services/count-frequency.service';

@Component({
  selector: 'app-word-frequency-count',
  templateUrl: './word-frequency-count.component.html',
  styleUrls: ['./word-frequency-count.component.css']
})
export class WordFrequencyCountComponent implements OnInit {

  inputString: '';
  frequencies = [];

  constructor(private countFrequencyService: CountFrequencyService) { }

  ngOnInit() {
    // Initialize the frequecies count with the current frequencies.
    this.countFrequencyService.fetchFrequencies().subscribe((frequencies: []) => {
      if (frequencies.length > 0) {
        this.frequencies = frequencies;
      }
    }, (error) => {
      console.log("Error while fetching frequencies", error);
    });
  }

  /**
   * Counts the frequency of the input string
   * and fetches the frequency.
   */
  countFrequency() {
    this.countFrequencyService.saveAndcountFrequency(this.inputString).subscribe((frequencies: []) => {
      if (frequencies.length > 0) {
        this.frequencies = frequencies;
      }
    }, (error) => {
      console.log("Error while fetching frequencies", error);
    });

    this.inputString = '';
  }

}
