'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function BarChart() {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const data = [25, 30, 45, 60, 20, 65, 75];
      const svg = d3.select(d3Container.current);
      
      // Clear previous content
      svg.selectAll('*').remove();

      const width = 400;
      const height = 200;
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };

      const x = d3.scaleBand()
        .domain(data.map((d, i) => i.toString()))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data) || 100])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg.append('g')
        .attr('fill', '#007FFF')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d, i) => x(i.toString())!)
        .attr('y', d => y(d))
        .attr('height', d => y(0) - y(d))
        .attr('width', x.bandwidth());

      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    }
  }, []);

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginTop: 0 }}>D3.js Sample Chart</h3>
      <svg
        className="d3-component"
        width={400}
        height={200}
        ref={d3Container}
      />
    </div>
  );
}
