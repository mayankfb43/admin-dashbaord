'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, useTheme, Theme } from '@mui/material';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { Card } from '../../molecules';

const data = [
  { day: 'Sat', deposit: 480, withdraw: 250 },
  { day: 'Sun', deposit: 350, withdraw: 150 },
  { day: 'Mon', deposit: 320, withdraw: 270 },
  { day: 'Tue', deposit: 480, withdraw: 380 },
  { day: 'Wed', deposit: 150, withdraw: 240 },
  { day: 'Thu', deposit: 390, withdraw: 240 },
  { day: 'Fri', deposit: 400, withdraw: 330 },
];

export const GroupBarChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver(chartRef);
  const theme = useTheme();

  useEffect(() => {
    if (!width || !height) return;

    // Clear existing
    d3.select(chartRef.current).select('svg').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
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

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .rangeRound([0, chartWidth])
      .paddingInner(0.4);

    const x1 = d3
      .scaleBand()
      .domain(['withdraw', 'deposit'])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, 500])
      .nice()
      .rangeRound([chartHeight, 0]);

    // Grid lines
    const yAxis = d3.axisLeft(y).ticks(5).tickSize(-chartWidth).tickPadding(10);
    const yGrid = svg.append('g').call(yAxis);
    yGrid.select('.domain').remove();
    yGrid.selectAll('.tick line').attr('stroke', theme.palette.divider);
    yGrid.selectAll('.tick text')
      .attr('fill', theme.palette.text.secondary)
      .attr('font-size', theme.typography.caption.fontSize as string);

    const xAxis = d3.axisBottom(x0).tickSize(0).tickPadding(10);
    const xLabels = svg.append('g').attr('transform', `translate(0,${chartHeight})`).call(xAxis);
    xLabels.select('.domain').attr('stroke', theme.palette.divider);
    xLabels.selectAll('.tick text')
      .attr('fill', theme.palette.text.secondary)
      .attr('font-size', theme.typography.caption.fontSize as string);

    const barGroups = svg
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${x0(d.day)},0)`);

    // Deposit Bar
    barGroups
      .append('rect')
      .attr('x', x1('deposit')!)
      .attr('y', (d) => y(d.deposit))
      .attr('width', x1.bandwidth())
      .attr('height', (d) => chartHeight - y(d.deposit))
      .attr('fill', theme.palette.primary.main)
      .attr('rx', 5);

    // Withdraw Bar
    barGroups
      .append('rect')
      .attr('x', x1('withdraw')!)
      .attr('y', (d) => y(d.withdraw))
      .attr('width', x1.bandwidth())
      .attr('height', (d) => chartHeight - y(d.withdraw))
      .attr('fill', theme.palette.text.primary)
      .attr('rx', 5);

  }, [width, height, theme]);

  return (
    <Card 
      title="Weekly Activity"
      sx={{
        p: (theme: Theme) => theme.customSpacing.cardPadding,
        height: (theme: Theme) => theme.layout.chartHeight,
        overflow: 'hidden',
      }}
    >
      <Box ref={chartRef} sx={{ width: '100%', height: '100%', position: 'relative', minWidth: 0 }} />
    </Card>
  );
};
