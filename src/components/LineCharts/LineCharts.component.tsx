import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useTheme } from '@mui/material';

import {
    formatDayMonthShort,
    formatDayMonthYearShort,
} from '@utils/dateFormatter';
import { formatNumber } from '@utils/formatNumber';

import { SalesLineChartProps } from './LineCharts.types';

export const LineCharts = ({ data }: SalesLineChartProps) => {
    const { palette } = useTheme();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            >
                <CartesianGrid
                    vertical={false}
                    color={palette.text.disabled}
                    strokeWidth={0.25}
                />
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={20}
                    tickFormatter={(tick: string) => formatDayMonthShort(tick)}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickMargin={20}
                    tickFormatter={(tick: number) => formatNumber(tick)}
                />
                <Tooltip
                    formatter={(value: number, name: string) => {
                        return [
                            formatNumber(value),
                            name === 'sale' ? 'Sales' : '',
                        ];
                    }}
                    labelFormatter={(label: string) =>
                        formatDayMonthYearShort(label)
                    }
                />
                <Line
                    type="monotone"
                    dataKey="sale"
                    stroke={palette.primary.main}
                    strokeWidth={4}
                    dot={false}
                    activeDot={{ r: 4 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
