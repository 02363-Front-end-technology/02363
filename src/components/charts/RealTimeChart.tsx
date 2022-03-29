import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import StreamingPlugin from 'chartjs-plugin-streaming';
import React, { useState } from 'react';
import 'chartjs-adapter-luxon';
import style from '@Styles/UpgradeLayout.module.css';

type IProps = {};

const RealTimeChart: React.FC<IProps> = ({}) => {
	ChartJS.register(...registerables, StreamingPlugin);

	const [data] = useState<number[]>([]);

	return (
		<div className={style.chart}>
			<Line
				data={{
					datasets: [
						{
							label: 'CPU usage(TODO: Simuler så den "bruger" mere CPU, jo flere ting der købt)',
							backgroundColor: '#152c50cf',
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
								text: 'RealTimeChart'
							}
						}
					}
				}}
			/>
		</div>
	);
};

export default RealTimeChart;
