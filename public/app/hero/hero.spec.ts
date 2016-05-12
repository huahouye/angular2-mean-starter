import { Hero } from './hero.model';

describe('Hero', () => {
    it('has name', () => {
        let hero: Hero = { id: 1, name: 'Super Cat', power: '12',alterEgo: '' };
        expect(hero.name).toEqual('Super Cat');
    });
    it('has id', () => {
        let hero: Hero = { id: 1, name: 'Super Cat', power: '12',alterEgo: '' };
        expect(hero.id).toEqual(1);
    });
});
