import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import StreamingPlugin from 'chartjs-plugin-streaming';
import React, { useState } from 'react';
import 'chartjs-adapter-luxon';

type IProps = {};

const RealTimeChart: React.FC<IProps> = ({}) => {
	ChartJS.register(...registerables, StreamingPlugin);

	const [data] = useState<number[]>([]);

	return (
		<div className='relative w-full h-1/2'>
			<Line
				data={{
					datasets: [
						{
							label: 'CPU usage',
							backgroundColor: 'rgba(255, 99, 132, 0.5)',
							fill: false,
							data: data
						}
					]
				}}
				options={{
					maintainAspectRatio: false,
					scales: {
						x: {
							type: 'realtime',
							realtime: {
								delay: 3000,
								onRefresh: (chart) => {
									chart.data.datasets.forEach((dataset) => {
										dataset.data.push({
											x: Date.now(),
											y: Math.random()
										});
									});
								}
							}
						},
						y: {
							title: {
								display: true,
								text: 'Some title'
							}
						}
					}
				}}
			/>
		</div>
	);
};

export default RealTimeChart;
