import { useEffect, useState } from 'react';
import '../App.css';

const COUNTDOWN_TARGET = new Date(Date.UTC(2025, 1, 21, 14, 0, 0));

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	// const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { totalTimeLeft, hours, minutes, seconds };
};

export const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

    if (timeLeft.totalTimeLeft <= 0) {
        return null;
    }

	return (
		<div className='countdown' id='countdown'>
            <h2 className='text-center' style={{color: 'lightgray'}}>Upcoming MEXC Listing In:</h2>
			<div className='content'>
				{Object.entries(timeLeft).map(([label, value]) => {
                    if (label === 'totalTimeLeft') return null;
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};