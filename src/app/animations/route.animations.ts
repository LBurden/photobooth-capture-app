import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const animation =
    trigger('routeAnimations', [
        // GENERIC ANIMATION
        transition('* <=> *', [
            style({ position: 'relative', 'z-index': 2 }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('800ms cubic-bezier(0.64, 0.04, 0.35, 1)', style({ opacity: 0 }))
                ], { optional: true }),
                query(':enter', [
                    animate('400ms cubic-bezier(0.64, 0.04, 0.35, 1)', style({ opacity: 1 }))
                ], { optional: true }),

            ]),
            query(':enter', animateChild(), { optional: true }),
        ])
    ]);
