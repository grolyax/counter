import React, { Component } from 'react';
import Counter from './counter';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counters: [
                { id: 1, value: 0, min: -5, max: 5 },
                { id: 2, value: 6, min: 0, max: 10 },
                { id: 3, value: -3, min: -3, max: 6 },
            ],
        };
    }

    render() {
        const { counters } = this.state;
        return (
            <div>
                {counters.map((counter) => (
                    <Counter data={counter} key={counter.id} /> // value={counter.value} min={counter.min} max={counter.max} все сразу передаёт data
                ))}
            </div>
        );
    }
}
