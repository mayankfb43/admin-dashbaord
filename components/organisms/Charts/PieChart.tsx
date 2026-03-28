'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, useTheme, Theme } from '@mui/material';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { Card } from '../../molecules';

interface PieData {
  label: string;
  value: number;
  color: string;
}

const data: PieData[] = [
  { label: 'Entertainment', value: 30, color: '#2B2B4B' },
  { label: 'Bill Expense', value: 15, color: '#FF8A48' },
  { label: 'Others', value: 35, color: '#3A36DB' },
  { label: 'Investment', value: 20, color: '#396AFF' },
];

export const PieChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver(chartRef);
  const theme = useTheme();

  useEffect(() => {
    if (!width || !height) return;

    d3.select(chartRef.current).select('svg').remove();

    const radius = Math.min(width, height) / 2 - 20;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3
      .pie<PieData>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<PieData>>()
      .innerRadius(0)
      .outerRadius(radius)
      .padAngle(0.05);

    const labelArc = d3
      .arc<d3.PieArcDatum<PieData>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.5);

    const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g');

    arcs
      .append('path')
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      .attr('d', arc as any)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', '#fff')
      .style('stroke-width', '2px');

    arcs
      .append('text')
      .attr('transform', (d: unknown) => `translate(${labelArc.centroid(d as d3.PieArcDatum<PieData>)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff')
      .style('font-weight', 'bold')
      .style('font-size', theme.typography.caption.fontSize as string)
      .style('font-family', theme.typography.fontFamily as string)
      .selectAll('tspan')
      .data((d: unknown) => {
        const datum = d as d3.PieArcDatum<PieData>;
        return [
          { text: `${datum.data.value}%`, dy: 0 },
          { text: datum.data.label, dy: '1.2em' },
        ];
      })
      .enter()
      .append('tspan')
      .attr('x', 0)
      .attr('dy', (d) => d.dy)
      .text((d) => d.text);

  }, [width, height, theme]);

  return (
    <Card 
      title="Expense Statistics"
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
