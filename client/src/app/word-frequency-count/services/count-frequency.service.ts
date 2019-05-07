import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountFrequencyService {

  constructor(private http: HttpClient) {}

  // Fetch and save the frequency count.
  saveAndcountFrequency(inputString) {
    return this.http.post('/api/saveAndCountWordFrequency', {
      inputString
    });
  }

  // Fetch the frequency
  fetchFrequencies() {
    return this.http.get('/api/fetchFrequency');
  }
}
