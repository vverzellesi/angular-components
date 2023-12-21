import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class UserProfileService {
    constructor() { }

    getUserName(): string {
        return this.getRandomName();
    }

    private getRandomName(): string {
        const names: string[] = [
            'Alice',
            'Anna',
            'Bob',
            'Charles',
            'David',
            'Jane',
            'John',
            'Jonas',
            'Mathew',
            'Mike',
        ];

        return _.sample(names) || 'Victor';
    }
}
