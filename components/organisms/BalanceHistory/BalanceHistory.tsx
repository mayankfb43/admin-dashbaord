'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, useTheme, Theme } from '@mui/material';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { Card } from '../../molecules';

interface DataPoint {
  month: string;
  value: number;
}

const data: DataPoint[] = [
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 300 },
  { month: 'Sep', value: 220 },
  { month: 'Oct', value: 450 },
  { month: 'Nov', value: 400 },
  { month: 'Dec', value: 750 },
  { month: 'Jan', value: 200 },
  { month: 'Feb', value: 550 },
  { month: 'Mar', value: 250 },
  { month: 'Apr', value: 600 },
];

export const BalanceHistory = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver(chartRef);
  const theme = useTheme();

  useEffect(() => {
    if (!width || !height) return;

    d3.select(chartRef.current).select('svg').remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.month))
      .range([0, chartWidth]);

    const y = d3
      .scaleLinear()
      .domain([0, 800])
      .range([chartHeight, 0]);

    // Area generator
    const area = d3
      .area<DataPoint>()
      .x((d) => x(d.month)!)
      .y0(chartHeight)
      .y1((d) => y(d.value))
      .curve(d3.curveBasis);

    // Line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.value))
      .curve(d3.curveBasis);

    // Grid lines
    const yAxis = d3.axisLeft(y).ticks(5).tickSize(-chartWidth).tickPadding(10);
    const xAxis = d3.axisBottom(x as d3.AxisScale<string>).tickSize(-chartHeight).tickPadding(10);

    const yGrid = svg.append('g').call(yAxis);
    yGrid.select('.domain').remove();
    yGrid.selectAll('.tick line').attr('stroke', theme.palette.divider).attr('stroke-dasharray', '4,4');
    yGrid.selectAll('.tick text')
      .attr('fill', '#718EBF') // Source of truth for labels
      .attr('font-size', '0.75rem') // 12px fluid base
      .attr('font-family', 'Inter, sans-serif');

    const xGrid = svg.append('g').attr('transform', `translate(0,${chartHeight})`).call(xAxis);
    xGrid.select('.domain').remove();
    xGrid.selectAll('.tick line').attr('stroke', theme.palette.divider).attr('stroke-dasharray', '4,4');
    xGrid.selectAll('.tick text')
      .attr('fill', '#718EBF')
      .attr('font-size', '0.75rem')
      .attr('font-family', 'Inter, sans-serif');

    // Gradient
    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'area-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#1814F3').attr('stop-opacity', 0.2);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#1814F3').attr('stop-opacity', 0);

    // Area
    svg.append('path').datum(data).attr('fill', 'url(#area-gradient)').attr('d', area);

    // Line
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#1814F3')
      .attr('stroke-width', 3)
      .attr('d', line);

  }, [width, height, theme]);

  return (
    <Card 
      title="Balance History"
      sx={{ 
        height: '100%',
        aspectRatio: {
            xs: '325 / 195',
            md: '423 / 220',
            lg: '635 / 276',
        },
        p: '1.5625rem', // 25px
        overflow: 'hidden',
      }}
    >
      <Box ref={chartRef} sx={{ width: '100%', height: '100%', position: 'relative', minWidth: 0 }} />
    </Card>
  );
};
