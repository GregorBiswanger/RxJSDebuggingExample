import { of } from 'rxjs';
import { map, distinct } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    map(value => 'test: ' + value),
    distinct()
).subscribe(value => console.log(value));