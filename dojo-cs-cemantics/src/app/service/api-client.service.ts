import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuessModel} from "../dto/guess.model";
import {ResultModel} from "../dto/result.model";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private httpRequest = inject(HttpClient)

  getPokemonByName(guess: GuessModel): Observable<ResultModel> {
    console.log('My guess : ', guess);
    return this.httpRequest.get<ResultModel>(`https://pokeapi.co/api/v2/pokemon/${guess}`)
  }
}
